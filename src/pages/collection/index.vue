<template>
  <view class="collection">
    <scroll-view
      class="list"
      :scroll-y="true"
      @scrolltolower="lower"
      :scroll-into-view="toView"
      :scroll-top="scrollTop"
    >
      <view
        v-for="(it, idx) in dataList"
        :key="idx"
        class="it"
        @touchstart="touchstart($event)"
        @touchend="touchend($event, it)"
        @click="toAyDetail(it)"
      >
        <view class="left">
          <img class="img" :src="it.avatar" />
        </view>
        <view class="right">
          <view class="top">
            <view class="name"
              >{{ it.lastname }}{{ it.firstname || "阿姨" }}</view
            >
            <view class="info">
              <view class="info-it">{{ it.servLocation }}</view>
              <nut-divider direction="vertical" />
              <view class="info-it">{{ it.servType }}</view>
              <nut-divider direction="vertical" />
              <view class="info-it">{{ it.commentNum || 0 }} 条评价</view>
            </view>
            <view class="rate">
              <nut-rate
                active-color="#FFC800"
                v-model="it.rate"
                icon-size="14"
                spacing="2"
                readonly
              />
            </view>
          </view>
          <view class="bottom">
            <nut-tag
              v-if="it.verifed == 1"
              color="rgb(236, 128, 126)"
              text-color="#fff"
              class="tag"
            >
              已认证
            </nut-tag>
            <!-- <nut-tag v-else color="#E9E9E9" class="tag">未认证</nut-tag> -->
          </view>
        </view>
      </view>
      <view v-show="moreLoading" class="footer">
        <nut-divider>加载中 ...</nut-divider>
      </view>
      <view v-show="!hasMore" class="footer">
        <nut-divider>到底啦</nut-divider>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import Taro from "@tarojs/taro";
import API from "../../utils/api";

export default {
  name: "Collection",
  components: {},
  setup() {
    const state = reactive({
      myCollectPageParam: {},
      myCollectPageRes: null,
      dataList: [],
      hasMore: true,
      moreLoading: false,
      touchstart: -1,
    });

    onMounted(async () => {
      state.myCollectPageParam.pageNum = 1;
      state.myCollectPageParam.pageSize = 20;
      state.moreLoading = true;
      API.requestAfterHandle(
        await API.myCollectPage(state.myCollectPageParam),
        (data) => {
          state.myCollectPageRes = data;
          state.dataList.splice(0, state.dataList.length);
          state.dataList.push(...state.myCollectPageRes.records);
          handleAfterSearch();
        }
      );
      state.moreLoading = false;
    });

    const lower = () => {
      if (!state.hasMore || state.moreLoading) {
        return;
      }
      state.moreLoading = true;
      state.myCollectPageParam.pageNum++;
      state.dataList.push(...state.myCollectPageRes.records);
      handleAfterSearch();
      state.moreLoading = false;
    };

    const touchstart = (e) => {
      state.touchstart = e.timeStamp;
    };

    const touchend = (e, it) => {
      if (!state.touchstart || state.touchstart < 0) {
        return;
      }
      if (e.timeStamp - state.touchstart > 500) {
        Taro.showActionSheet({
          itemList: ["取消收藏"],
          success: async function (res) {
            // 取消搜藏
            if (res.tapIndex == 0) {
              API.requestAfterHandle(await API.myDelCollect(it.ayId));
              for (let i = 0; i < state.dataList.length; i++) {
                if (state.dataList[i].id == it.id) {
                  state.dataList.splice(i, 1);
                }
              }
            }
          },
          fail: function (res) {
            console.log(res.errMsg);
          },
        });
      }
      state.touchstart = -1;
    };

    const handleAfterSearch = () => {
      if (state.myCollectPageRes.current >= state.myCollectPageRes.pages) {
        state.hasMore = false;
      }
    };

    const toAyDetail = (e) => {
      Taro.navigateTo({
        url: "/pages/aydetail/index?id=" + e.ayId,
      });
    };

    return {
      ...toRefs(state),
      lower,
      touchstart,
      touchend,
      toAyDetail,
    };
  },
};
</script>

<style lang="scss">
.collection {
  height: 100%;
  .list {
    height: 100vh;

    .it {
      margin: 0rpx 30rpx;
      padding: 30rpx 20rpx;
      background: #fff;
      border-radius: 20rpx;
      display: flex;
      margin-top: 20rpx;
      box-sizing: border-box;

      .left {
        padding: 10rpx;
        box-sizing: border-box;

        .img {
          width: 120rpx;
          height: 120rpx;
        }
      }

      .right {
        padding-left: 30rpx;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .top {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .name {
            font-size: 28rpx;
            font-weight: 600;
          }

          .info {
            display: flex;
            font-size: 22rpx;
            padding-top: 8rpx;
          }
        }

        .bottom {
          .tag {
            font-size: 22rpx;
          }
        }
      }
    }

    .footer {
      padding: 0 100rpx 20rpx 100rpx;
    }
  }
}
</style>
