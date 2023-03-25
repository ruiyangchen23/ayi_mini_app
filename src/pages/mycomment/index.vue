<template>
  <view class="mycomment">
    <scroll-view
      class="list"
      :scroll-y="true"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="scroll"
      :scroll-into-view="toView"
      :scroll-top="scrollTop"
    >
      <view v-for="(it, idx) in list" :key="idx" class="item bgc-w">
        <view class="ay" @click="toAyDetail(it)">
          <view class="left">
            <img class="avatar" :src="it.ayAvatar" />
          </view>
          <view class="right">
            <view class="nameandtime">
              <view class="name"
                >{{ it.ayLastname }}{{ it.ayFirstname || "阿姨" }}</view
              >
              <view class="time">{{ it.createTimeStr }}</view>
            </view>
            <view class="other">
              <view class="other-left">
                <view>{{ it.ayServLocation }}</view>
                <nut-divider direction="vertical" />
                <view>{{ it.ayServType }}</view>
                <nut-divider direction="vertical" />
                <view>{{ it.ayCommentNum || 0 }} 条评价</view>
              </view>
              <view class="other-right">
                <nut-tag v-if="it.approvalStatus == 1" type="success" plain>
                  审核通过
                </nut-tag>
                <nut-tag v-else-if="it.approvalStatus == 2" type="danger" plain>
                  审核驳回
                </nut-tag>
                <nut-tag v-else plain>待审核</nut-tag>
              </view>
            </view>
            <view class="rate">
              <nut-rate
                active-color="#FFC800"
                v-model="it.rate"
                icon-size="14"
                spacing="6"
                disabled
              />
            </view>
          </view>
        </view>
        <view v-if="it.imgList && it.imgList.length > 0" class="imgs">
          <view
            v-for="(imgIt, imgIdx) in it.imgList"
            :key="imgIdx"
            class="img-it"
          >
            <img class="img" :src="imgIt" />
          </view>
        </view>
        <view class="content">
          <view class="value valc-h">{{ it.commentContent }}</view>
        </view>
        <view
          v-if="it.approvalStatus == 1 || it.approvalStatus == 2"
          class="operations"
        >
          <nut-tag
            v-if="it.approvalStatus == 1"
            plain
            color="rgb(236, 128, 126)"
            @click="replycommentPopupShow(it)"
          >
            追评
          </nut-tag>
          <nut-tag
            v-if="it.approvalStatus == 2"
            plain
            color="rgb(236, 128, 126)"
            @click="toComment(it)"
          >
            修改
          </nut-tag>
        </view>
      </view>
      <view v-show="moreLoading" class="footer">
        <nut-divider>加载中...</nut-divider>
      </view>
      <view v-show="!hasMore" class="footer">
        <nut-divider>到底啦</nut-divider>
      </view>
    </scroll-view>
  </view>

  <nut-popup
    position="bottom"
    :style="{ padding: '20rpx', boxSizing: 'border-box' }"
    v-model:visible="replycommentPopupVisible"
  >
    <view class="reply-container">
      <nut-input
        v-model="replycommentSubmitData.content"
        type="textarea"
        show-word-limit
        rows="2"
        max-length="150"
        placeholder="追评"
      />
      <nut-button
        v-show="
          replycommentSubmitData.content &&
          replycommentSubmitData.content.length > 0
        "
        type="primary"
        @click="replycommentSubmit"
      >
        追评
      </nut-button>
    </view>
  </nut-popup>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import Taro from "@tarojs/taro";
import API from "../../utils/api";

export default {
  name: "Mycomment",
  components: {},
  setup() {
    const state = reactive({
      myCommentPageParam: {},
      myCommentPageRes: null,
      list: [],
      hasMore: true,
      moreLoading: false,
      replycommentPopupVisible: false,
      replycommentSubmitData: {
        ayId: "",
        commentId: "",
        content: "",
      },
    });

    onMounted(async () => {
      state.myCommentPageParam.pageNum = 1;
      state.myCommentPageParam.pageSize = 20;
      state.moreLoading = true;
      API.requestAfterHandle(
        await API.myCommentPage(state.myCommentPageParam),
        (data) => {
          for (const it of data.records) {
            if (it.imgs && it.imgs.indexOf(",") > -1) {
              it.imgList = it.imgs.split(",");
            }
            it.createTimeStr = API.timeTxt(it.createTime);
          }
          state.myCommentPageRes = data;
          state.list.splice(0, state.list.length);
          state.list.push(...state.myCommentPageRes.records);
          handleAfterSearch();
        }
      );
      state.moreLoading = false;

      API.requestAfterHandle(await API.readAll("4"));
      API.requestAfterHandle(await API.countUnread(), (data) => {
        Taro.setStorageSync("unreadCount", data || []);
      });
    });

    const lower = async () => {
      if (!state.hasMore || state.moreLoading) {
        return;
      }
      state.moreLoading = true;
      state.myCommentPageParam.pageNum++;
      API.requestAfterHandle(
        await API.myCommentPage(state.myCommentPageParam),
        (data) => {
          for (const it of data.records) {
            if (it.imgs && it.imgs.indexOf(",") > -1) {
              it.imgList = it.imgs.split(",");
            }
            it.createTimeStr = API.timeTxt(it.createTime);
          }
          state.myCommentPageRes = data;
          state.list.push(...state.myCommentPageRes.records);
          handleAfterSearch();
        }
      );
      state.moreLoading = false;
    };

    const handleAfterSearch = () => {
      if (state.myCommentPageRes.current >= state.myCommentPageRes.pages) {
        state.hasMore = false;
      }
    };

    const replycommentPopupShow = (e) => {
      state.replycommentSubmitData.ayId = e.ayId;
      state.replycommentSubmitData.commentId = e.id;
      state.replycommentSubmitData.content = "";

      state.replycommentPopupVisible = true;
    };
    const replycommentSubmit = async () => {
      API.requestAfterHandle(
        await API.replycomment(state.replycommentSubmitData),
        () => {
          Taro.showToast({
            title: "追评成功",
            icon: "success",
            duration: 1500,
          });
        }
      );
      state.replycommentPopupVisible = false;
    };

    const toAyDetail = (e) => {
      Taro.navigateTo({
        url: "/pages/aydetail/index?id=" + e.ayId,
      });
    };
    const toComment = (e) => {
      Taro.redirectTo({
        url: "/pages/comment/index?id=" + e.id,
      });
    };

    return {
      ...toRefs(state),
      lower,
      replycommentPopupShow,
      replycommentSubmit,
      toAyDetail,
      toComment,
    };
  },
};
</script>

<style lang="scss">
.mycomment {
  height: 100%;
  .list {
    height: 100vh;

    .item {
      margin-top: 30rpx;
      margin-left: 30rpx;
      margin-right: 30rpx;
      display: flex;
      flex-direction: column;
      border-radius: 20rpx;
      padding: 20rpx;
      line-height: 1.6rem;

      .ay {
        display: flex;

        .left {
          .avatar {
            width: 100rpx;
            height: 100rpx;
          }
        }

        .right {
          margin-left: 20rpx;
          font-size: 22rpx;
          width: 100%;

          .nameandtime {
            font-size: 28rpx;
            display: flex;
            justify-content: space-between;

            .name {
              font-weight: 600;
            }

            .time {
              color: #555555;
              font-size: 24rpx;
            }
          }

          .other {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .other-left {
              display: flex;
              align-items: center;
            }

            .other-right {
              .nut-tag {
                font-size: 20rpx;
                line-height: 1rem;
              }
            }
          }

          .rateandtime {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
          }
        }
      }

      .label {
        font-size: 26rpx;
        font-weight: 500;
      }

      .value {
        font-size: 24rpx;
      }

      .rateandtime {
        display: flex;
        justify-content: space-between;

        .rate {
          display: flex;
        }
      }

      .serv-type {
        display: flex;
      }

      .imgs {
        display: flex;
        flex-wrap: wrap;

        .img-it {
          padding: 10rpx;
          margin: 10rpx;

          .img {
            width: 80rpx;
            height: 80rpx;
          }
        }
      }

      .operations {
        text-align: right;
        // color: #555555;
        color: rgb(236, 128, 126);
        font-size: 24rpx;
        text-align: right;
      }
    }

    .footer {
      padding: 0 100rpx 20rpx 100rpx;
    }
  }
}

.reply-container {
  display: flex;
  align-items: flex-end;
}
</style>
