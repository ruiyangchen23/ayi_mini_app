<template>
  <scroll-view
    class="scroll-view"
    :scroll-y="true"
    @scrolltolower="lower"
    :scroll-into-view="toView"
    :scroll-top="scrollTop"
  >
    <view class="aydetail" v-if="info">
      <view class="info">
        <view class="left">
          <img class="avatar" :src="info.avatar" />
        </view>
        <view class="right">
          <view class="name row">
            <view class="txt">
              {{ info.lastname }}{{ info.firstname || "阿姨" }}
            </view>
            <view class="coll" @click="collectHandle">
              <nut-icon
                v-show="info.hasCollect < 1"
                name="heart1"
                size="40rpx"
                color="rgb(236, 128, 126)"
              ></nut-icon>
              <nut-icon
                v-show="info.hasCollect > 0"
                name="heart-fill"
                size="40rpx"
                color="rgb(236, 128, 126)"
              ></nut-icon>
            </view>
          </view>
          <view class="tag row">
            <nut-tag
              v-if="info.verifed == 1"
              color="rgb(236, 128, 126)"
              text-color="#fff"
            >
              已认证
            </nut-tag>
            <!-- <nut-tag v-else color="#E9E9E9">未认证</nut-tag> -->
          </view>
          <view class="rate row">
            <nut-rate
              active-color="#FFC800"
              v-model="info.rate"
              icon-size="18"
              spacing="2"
              readonly
            />
          </view>
          <view class="comment-num row">
            <view>{{ info.commentNum || 0 }} 条评价</view>
            <nut-tag plain @click="toComment" color="rgb(236, 128, 126)"
              >写评价</nut-tag
            >
          </view>
          <view class="btns row">
            <nut-tag
              v-if="info.verifed != 1 && info.currentUser > 0"
              color="#ff0000"
              text-color="#ff0000"
              plain
              @click="toAycert"
            >
              去认证
            </nut-tag>
          </view>
        </view>
      </view>
      <!-- 信息 -->
      <view class="basic">
        <nut-cell-group>
          <nut-cell title="来自" :desc="info.hometown"></nut-cell>
          <nut-cell title="年龄" :desc="info.age"></nut-cell>
          <nut-cell title="服务类型" :desc="info.servType"></nut-cell>
          <nut-cell title="服务地区" :desc="info.servLocation"></nut-cell>
          <nut-cell title="服务年限" :desc="info.servYear"></nut-cell>
          <nut-cell title="自我介绍">
            <template v-slot:link>
              <nut-icon
                name="horizontal"
                @click="() => (infoPopupVisible = true)"
              ></nut-icon>
            </template>
          </nut-cell>
          <nut-cell v-if="info?.imgArr && info.imgArr.length > 0" title="图片">
            <template v-slot:link>
              <nut-icon
                name="horizontal"
                @click="() => (imgsPopupVisible = true)"
              />
            </template>
          </nut-cell>
          <nut-cell v-else title="图片" />
          <nut-cell
            v-if="info.mobile"
            title="手机号码"
            :desc="info.mobile"
          ></nut-cell>
          <nut-cell v-else title="手机号码" />
          <nut-cell
            v-if="info.wxcode"
            title="微信号"
            :desc="info.wxcode"
            @click="copy(info.wxcode)"
          ></nut-cell>
          <nut-cell v-else title="微信号" />
          <!-- <nut-cell title="微信二维码">
            <template v-slot:link>
              <nut-icon
                name="scan"
                @click="() => (wxqrcodePopupVisible = true)"
              ></nut-icon>
            </template>
          </nut-cell> -->
        </nut-cell-group>
      </view>
      <!-- 评价 -->
      <view class="comment bgc-w">
        <view class="head">评价</view>
        <view v-if="!commentList || commentList.length < 1" class="nocomment">
          暂无评论
        </view>
        <view v-else class="list">
          <template v-for="(it, idx) in commentList" :key="idx">
            <nut-divider
              v-if="idx > 0"
              :style="{
                color: '#d5d5d5',
                borderColor: '#d5d5d5',
                padding: '0 16px',
              }"
            />
            <view class="it">
              <view class="left">
                <img class="avatar" :src="it.avatar" />
              </view>
              <view class="right">
                <view class="nickname">
                  <view>{{ it.nickname }}</view>
                  <view
                    class="ay-main-txt reply"
                    @click="replycommentPopupShow(it)"
                    >回复</view
                  >
                </view>
                <view class="rate row">
                  <nut-rate
                    active-color="#FFC800"
                    v-model="it.rate"
                    icon-size="12"
                    spacing="2"
                    readonly
                  />
                </view>
                <view class="timeandlocation row">
                  <view class="time">{{ it.createTimeStr }}</view>
                  <nut-divider direction="vertical" />
                  <view class="location">{{ it.servLocation }}</view>
                  <nut-divider direction="vertical" />
                  <view class="servtype">{{ it.servType }}</view>
                </view>
                <view class="timeandlocation row">
                  <view class="time"
                    >服务时间：{{ it.servStartTimeStr }}-{{
                      it.servEndTimeStr
                    }}</view
                  >
                </view>
                <view class="timeandlocation row">
                  <view class="location">支付金额：{{ it.payamountTxt }}</view>
                </view>
                <view
                  v-if="it.imgArr && it.imgArr.length > 0"
                  class="timeandlocation row"
                >
                  <view class="imgs">
                    <img
                      class="img"
                      v-for="(img, idx) in it.imgArr"
                      :key="idx"
                      :src="img"
                      @click="viewCommentImgs(it.imgArr)"
                    />
                  </view>
                </view>
                <view class="content row">
                  {{ it.commentContent }}
                </view>
                <view
                  v-if="it.replyCommentNum > 0"
                  class="replycomment-list row"
                >
                  <view
                    v-for="(it1, idx1) in it.replycommentList"
                    :key="idx1"
                    class="it"
                  >
                    <view class="it-left">
                      <img class="it-avatar" :src="it1.avatar" />
                    </view>
                    <view class="it-right">
                      <view class="it-name">
                        <view>{{ it1.nickname }}</view>
                        <view
                          class="ay-main-txt reply"
                          @click="replycommentPopupShow(it, it1)"
                        >
                          回复
                        </view>
                      </view>
                      <view class="it-time row">{{ it1.createTimeStr }}</view>
                      <view class="it-content row">
                        {{ it1.commentContent }}
                      </view>
                    </view>
                  </view>
                  <nut-divider
                    v-if="!it.replycommentPage"
                    content-position="left"
                    @click="replycommentPage(it)"
                  >
                    展开 {{ it.replyCommentNum }} 条回复
                    <nut-icon
                      name="rect-down"
                      size=".8rem"
                      style="margin-left: 4rpx"
                    ></nut-icon>
                  </nut-divider>
                  <nut-divider
                    v-else-if="
                      it.replycommentPage.current < it.replycommentPage.pages
                    "
                    content-position="left"
                    @click="replycommentPage(it)"
                  >
                    展开更多条回复
                    <nut-icon
                      name="rect-down"
                      size=".8rem"
                      style="margin-left: 4rpx"
                    ></nut-icon>
                  </nut-divider>
                </view>
              </view>
            </view>
          </template>
        </view>
      </view>
    </view>
    <view v-show="commentLoading" class="footer">
      <nut-divider
        :style="{
          color: '#d5d5d5',
          borderColor: '#d5d5d5',
          padding: '0 50rpx',
        }"
        >加载中...</nut-divider
      >
    </view>
    <view v-show="!commentHasMore" class="footer">
      <nut-divider
        :style="{
          color: '#d5d5d5',
          borderColor: '#d5d5d5',
          padding: '0 50rpx',
        }"
        >到底啦</nut-divider
      >
    </view>
  </scroll-view>

  <nut-popup v-model:visible="infoPopupVisible">
    <view class="bg-w" style="width: 500rpx; height: 700rpx; padding: 30rpx">
      {{ info?.info }}
    </view>
  </nut-popup>

  <nut-popup v-model:visible="wxqrcodePopupVisible">
    <img
      style="width: 500rpx; height: 500rpx; border-radius: 30rpx"
      :src="info?.wxqrcode"
    />
  </nut-popup>

  <nut-popup v-model:visible="imgsPopupVisible" class="imgs-popup">
    <swiper indicator-dots="true" style="width: 600rpx; height: 600rpx">
      <swiper-item v-for="(it, idx) in info?.imgArr" :key="idx">
        <img
          style="width: 100%; height: 100%; border-radius: 30rpx"
          :src="it"
        />
      </swiper-item>
    </swiper>
  </nut-popup>

  <nut-popup v-model:visible="commentImgsPopupVisible" class="imgs-popup">
    <swiper indicator-dots="true" style="width: 600rpx; height: 600rpx">
      <swiper-item v-for="(it, idx) in commentImgs" :key="idx">
        <img
          style="width: 100%; height: 100%; border-radius: 30rpx"
          :src="it"
        />
      </swiper-item>
    </swiper>
  </nut-popup>

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
        :placeholder="'回复 @' + replycommentSubmitData.nickname + ' :'"
      />
      <nut-button
        v-show="
          replycommentSubmitData.content &&
          replycommentSubmitData.content.length > 0
        "
        type="primary"
        size="small"
        @click="replycommentSubmit"
      >
        回复
      </nut-button>
    </view>
  </nut-popup>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import Taro from "@tarojs/taro";
import API from "../../utils/api";

const defaultAvatar = process.env.DEFAULT_AVATAR;

export default {
  name: "Aydetail",
  components: {},
  setup() {
    const state = reactive({
      user: null,
      $instance: null,
      id: null,
      info: null,
      ayCommentPageParam: {},
      ayCommentPageRes: {},
      commentList: [],
      commentHasMore: true,
      commentLoading: false,
      collectLoading: false,
      infoPopupVisible: false,
      wxqrcodePopupVisible: false,
      imgsPopupVisible: false,
      commentImgsPopupVisible: false,
      commentImgs: [],
      replycommentPopupVisible: false,
      replycommentSubmitData: {
        ayId: "",
        commentId: "",
        replycommentId: "",
        content: "",
      },
    });

    // 进入时触发
    onMounted(async () => {
      state.user = Taro.getStorageSync("user");
      // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
      // 而不是频繁地调用此 API
      state.$instance = Taro.getCurrentInstance();
      state.id = state.$instance.router.params.id;
      // 加载阿姨信息
      API.ayDetail(state.id).then((ayDetailRes) => {
        API.requestAfterHandle(ayDetailRes, (data) => {
          console.log("ayi detail is ", data);
          if (!!data) {
            data.avatar = data.avatar || defaultAvatar;
          }
          state.info = data;
          if (state.info.imgs) {
            state.info.imgArr = state.info.imgs.split(",");
          }
        });
      });
      state.ayCommentPageParam.ayId = state.id;
      // 加载评论信息
      state.ayCommentPageParam.pageNum = 1;
      state.ayCommentPageParam.pageSize = 20;
      state.commentLoading = true;
      API.requestAfterHandle(
        await API.ayCommentPage(state.ayCommentPageParam),
        (data) => {
          console.log("comment page are", data);
          handleCommentPageTime(data.records);
          for (const it of data.records) {
            it.replycommentList = [];
            if (it.imgs) {
              it.imgArr = it.imgs.split(",");
            }
          }
          state.ayCommentPageRes = data;
          state.commentList.splice(0, state.commentList.length);
          state.commentList.push(...state.ayCommentPageRes.records);
          handleAfterCommentPage();
        }
      );
      state.commentLoading = false;
    });

    // 跳转页面相关
    const toComment = () => {
      Taro.navigateTo({
        url: "/pages/comment/index?ayId=" + state.id,
      });
    };
    const toAycert = () => {
      Taro.navigateTo({
        url: "/pages/aycert/index?id=" + state.id + "&type=实名认证",
      });
    };

    // 页面滚动相关
    const lower = async () => {
      if (!state.commentHasMore || state.commentLoading) {
        return;
      }
      state.commentLoading = true;
      state.ayCommentPageParam.pageNum++;
      API.requestAfterHandle(
        await API.ayCommentPage(state.ayCommentPageParam),
        (data) => {
          handleCommentPageTime(data.records);
          for (const it of data.records) {
            it.replycommentList = [];
            if (it.imgs) {
              it.imgArr = it.imgs.split(",");
            }
          }

          state.ayCommentPageRes = data;
          state.commentList.push(...state.ayCommentPageRes.records);
          handleAfterCommentPage();
        }
      );
      state.commentLoading = false;
    };

    // 其他工具函数
    const handleAfterCommentPage = () => {
      if (state.ayCommentPageRes.current >= state.ayCommentPageRes.pages) {
        state.commentHasMore = false;
      }
    };
    const handleCommentPageTime = (list) => {
      const now = new Date().getTime();
      if (!list || list.length < 1) return;
      for (const it of list) {
        it.createTimeStr = API.timeTxt(it.createTime);
        if (it.servStartTime) {
          it.servStartTimeStr = API.timeTxt2(it.servStartTime);
        }
        if (it.servEndTime) {
          it.servEndTimeStr = API.timeTxt2(it.servEndTime);
        }
      }
    };
    const copy = (txt) => {
      if (!txt) return false;
      Taro.setClipboardData({
        data: txt,
        success: function (res) {
          Taro.showToast({
            title: "复制成功",
            icon: "success",
            duration: 1500,
          });
        },
      });
    };

    // 收藏处理
    const collectHandle = async () => {
      if (state.collectLoading) {
        return;
      }
      state.collectLoading = true;
      if (state.info.hasCollect > 0) {
        state.info.hasCollect = 0;
        API.requestAfterHandle(await API.myDelCollect(state.info.id));
      } else {
        state.info.hasCollect = 1;
        API.requestAfterHandle(await API.myAddCollect(state.info.id));
      }
      state.collectLoading = false;
    };

    // 回复评论
    const replycommentPopupShow = (comment, replycomment) => {
      state.replycommentSubmitData.content = "";
      state.replycommentSubmitData.ayId = state.id;
      state.replycommentSubmitData.commentId = comment.id;

      if (replycomment) {
        state.replycommentSubmitData.replycommentId = replycomment.id;
        state.replycommentSubmitData.nickname = replycomment.nickname;
      } else {
        state.replycommentSubmitData.nickname = comment.nickname;
      }

      state.replycommentPopupVisible = true;
    };
    const replycommentSubmit = async () => {
      API.requestAfterHandle(
        await API.replycomment(state.replycommentSubmitData),
        () => {
          Taro.showToast({
            title: "回复成功",
            icon: "success",
            duration: 1500,
          });
        }
      );
      state.replycommentPopupVisible = false;
    };

    // 搜索回复评论
    const replycommentPage = async (e) => {
      const param = {
        commentId: e.id,
        pageNum: e.replycommentPage ? e.replycommentPage.current + 1 : 1,
        pageSize: 5,
      };
      API.requestAfterHandle(await API.replyCommentPage(param), (data) => {
        e.replycommentPage = data;
        handleCommentPageTime(e.replycommentPage.records);
        e.replycommentList.push(...e.replycommentPage.records);
      });
    };

    const viewCommentImgs = (imgs) => {
      state.commentImgs.splice(0, state.commentImgs.length);
      state.commentImgs.push(...imgs);
      state.commentImgsPopupVisible = true;
    };

    return {
      ...toRefs(state),
      copy,
      lower,
      toComment,
      toAycert,
      collectHandle,
      replycommentPopupShow,
      replycommentSubmit,
      replycommentPage,
      viewCommentImgs,
    };
  },
};
</script>

<style lang="scss">
.scroll-view {
  height: 100vh;

  .footer {
    padding-bottom: 1px;
  }
}

.aydetail {
  padding: 30rpx 30rpx 0 30rpx;

  .info {
    display: flex;
    padding: 30rpx;
    border-radius: 20rpx;
    align-items: center;

    .left {
      display: flex;

      .row {
        padding-top: 10rpx;
      }

      .avatar {
        width: 160rpx;
        height: 160rpx;
      }
    }

    .right {
      padding-left: 60rpx;
      flex: 1;

      > .row {
        padding-top: 10rpx;
      }

      .name {
        display: flex;
        justify-content: space-between;
        font-size: 32rpx;
        font-weight: 600;
        padding-top: 0;
      }

      .comment-num {
        font-size: 28rpx;
        display: flex;
        justify-content: space-between;
      }

      .tocert {
      }
    }
  }

  .comment {
    margin-top: 30rpx;
    padding: 20rpx;
    border-radius: 20rpx;

    .head {
      font-size: 30rpx;
      font-weight: 600;
    }

    .nocomment {
      text-align: center;
      font-size: 26rpx;
      color: #ccc;
      line-height: 1.6rem;
    }

    .list {
      .it {
        padding-top: 30rpx;
        display: flex;
        align-items: flex-start;

        .left {
          .avatar {
            width: 100rpx;
            height: 100rpx;
          }
        }

        .right {
          margin-left: 20rpx;
          font-size: 24rpx;
          width: 100%;

          .row {
            padding-top: 10rpx;
          }

          .nickname {
            display: flex;
            justify-content: space-between;
            font-size: 28rpx;

            .reply {
              font-size: 24rpx;
            }
          }

          .timeandlocation {
            display: flex;
            color: #ccc;

            .imgs {
              display: flex;
              .img {
                width: 100rpx;
                height: 100rpx;
                margin-right: 10rpx;
              }
            }
          }

          .replycomment-list {
            .nut-divider::after {
              border-color: rgba(0, 0, 0, 0);
            }

            .it {
              display: flex;

              .it-left {
                .it-avatar {
                  width: 60rpx;
                  height: 60rpx;
                }
              }

              .it-right {
                margin-left: 20rpx;
                width: 100%;

                .it-name {
                  display: flex;
                  justify-content: space-between;
                  font-size: 28rpx;

                  .reply {
                    font-size: 24rpx;
                  }
                }

                .it-time {
                  color: #ccc;
                }
              }
            }
          }
        }
      }
    }
  }
}

.reply-container {
  display: flex;
  align-items: flex-end;
}

.imgs-popup {
  .popup-center {
    width: 600rpx;
    height: 600rpx;
  }
}

.nut-popup {
  border-radius: 30rpx;
  overflow: hidden;
}
</style>
