<template>
  <view class="messages">
    <nut-tabs v-model="tabvalue">
      <nut-tabpane title="评论消息">
        <scroll-view
          class="list comment"
          :scroll-y="true"
          @scrolltolower="commentLower"
        >
          <view v-for="(it, idx) in commentList" :key="idx" class="it bgc-w">
            <view class="top">
              <view class="title">{{ it.title }}</view>
              <view class="time">{{ it.triggerTimeStr }}</view>
            </view>
            <view class="bottom">
              <view class="left">
                <img class="avatar" :src="it.avatar" />
              </view>
              <view class="center">
                <view class="name">{{ it.nickname }}</view>
                <view class="content">{{ it.content }}</view>
              </view>
            </view>
          </view>
          <view v-show="commentMoreLoading" class="footer">
            <nut-divider>加载中 ...</nut-divider>
          </view>
          <view v-show="!commentHasMore" class="footer">
            <nut-divider>到底啦</nut-divider>
          </view>
        </scroll-view>
      </nut-tabpane>
      <nut-tabpane title="系统消息">
        <scroll-view
          class="list sys"
          :scroll-y="true"
          @scrolltolower="sysLower"
        >
          <view v-for="(it, idx) in sysList" :key="idx" class="it bgc-w">
            <view class="title">{{ it.title }}</view>
            <view class="time valc-h">{{ it.time }}</view>
            <view class="content">{{ it.content }}</view>
          </view>
          <view v-show="sysMoreLoading" class="footer">
            <nut-divider>加载中 ...</nut-divider>
          </view>
          <view v-show="!sysHasMore" class="footer">
            <nut-divider>到底啦</nut-divider>
          </view>
        </scroll-view>
      </nut-tabpane>
    </nut-tabs>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import API from "../../utils/api";
import Taro from "@tarojs/taro";

export default {
  name: "Messages",
  components: {},
  setup() {
    const state = reactive({
      tabvalue: 0,
      myCommentMsgParam: {},
      myCommentMsgRes: {},
      mySysMsgParam: {},
      mySysMsgRes: {},
      commentMoreLoading: false,
      commentHasMore: true,
      sysMoreLoading: false,
      sysHasMore: true,
      commentList: [],
      sysList: [],
    });

    onMounted(async () => {
      state.myCommentMsgParam.pageNum = 1;
      state.myCommentMsgParam.pageSize = 20;
      state.commentMoreLoading = true;
      API.requestAfterHandle(
        await API.myCommentMsg(state.myCommentMsgParam),
        (data) => {
          if (data.records.length > 0) {
            for (const it of data.records) {
              it.triggerTimeStr = API.timeTxt(it.triggerTime);
            }
          }
          state.myCommentMsgRes = data;
          state.commentList.splice(0, state.commentList.length);
          state.commentList.push(...state.myCommentMsgRes.records);
          handleAfterCommentMsg();
        }
      );
      state.commentMoreLoading = false;
      state.mySysMsgParam.pageNum = 1;
      state.mySysMsgParam.pageSize = 20;
      state.sysMoreLoading = true;
      API.requestAfterHandle(
        await API.mySysMsg(state.mySysMsgParam),
        (data) => {
          if (data.records.length > 0) {
            for (const it of data.records) {
              it.triggerTimeStr = API.timeTxt(it.triggerTime);
            }
          }
          state.mySysMsgRes = data;
          state.sysList.splice(0, state.sysList.length);
          state.sysList.push(...state.mySysMsgRes.records);
          handleAfterSysMsg();
        }
      );
      state.sysMoreLoading = false;

      const readAll1 = API.requestAfterHandle(await API.readAll("1,2,3,4,5"));
      if (readAll1.msg == "ok") {
        API.requestAfterHandle(await API.countUnread(), (data) => {
          Taro.setStorageSync("unreadCount", data || []);
        });
      }
    });

    const commentLower = async () => {
      if (!state.commentHasMore || state.commentMoreLoading) {
        return;
      }
      state.commentMoreLoading = true;
      state.myCommentMsgParam.pageNum++;
      API.requestAfterHandle(
        await API.myCommentMsg(state.myCommentMsgParam),
        (data) => {
          if (data.records.length > 0) {
            for (const it of data.records) {
              it.triggerTimeStr = API.timeTxt(it.triggerTime);
            }
          }
          state.myCommentMsgRes = data;
          state.commentList.push(...state.myCommentMsgRes.records);
          handleAfterCommentMsg();
        }
      );
      state.commentMoreLoading = false;
    };

    const sysLower = async () => {
      if (!state.sysHasMore || state.sysMoreLoading) {
        return;
      }
      state.sysMoreLoading = true;
      state.mySysMsgParam.pageNum++;
      API.requestAfterHandle(
        await API.myCommentMsg(state.mySysMsgParam),
        (data) => {
          if (data.records.length > 0) {
            for (const it of data.records) {
              it.triggerTimeStr = API.timeTxt(it.triggerTime);
            }
          }
          state.mySysMsgRes = data;
          state.sysList.push(...state.mySysMsgRes.records);
          handleAfterSysMsg();
        }
      );
      state.sysMoreLoading = false;
    };

    const handleAfterCommentMsg = () => {
      if (state.myCommentMsgRes.current >= state.myCommentMsgRes.pages) {
        state.commentHasMore = false;
      }
    };

    const handleAfterSysMsg = () => {
      if (state.mySysMsgRes.current >= state.mySysMsgRes.pages) {
        state.sysHasMore = false;
      }
    };

    return {
      ...toRefs(state),
      commentLower,
      sysLower,
    };
  },
};
</script>

<style lang="scss">
.messages {
  height: 100%;

  .nut-tabs__content {
    height: calc(100vh - 46px);

    .nut-tabpane {
      padding: 0;
      height: 100%;

      .list {
        height: 100%;
        background-color: #f7f8fa;

        &.comment {
          .it {
            margin: 30rpx;
            padding: 30rpx;
            box-shadow: 0 0 2px 0px #bdbdbd;
            border-radius: 20rpx;
            box-sizing: border-box;

            .top {
              display: flex;
              justify-content: space-between;

              .title {
                font-size: 30rpx;
                font-weight: 600;
              }

              .time {
                color: #8e8e8e;
                font-size: 22rpx;
              }
            }

            .bottom {
              display: flex;
              padding-top: 20rpx;

              .left {
                .avatar {
                  width: 120rpx;
                  height: 120rpx;
                }
              }

              .center {
                flex: 1;
                margin: 0 20rpx;
                width: 100%;

                .name {
                  font-size: 22rpx;
                  font-weight: 600;
                }

                .content {
                  color: #333;
                  font-size: 22rpx;
                  padding-top: 10rpx;
                }
              }
            }
          }
        }

        &.sys {
          .it {
            margin: 30rpx;
            padding: 30rpx;
            box-shadow: 0 0 2px 0px #bdbdbd;
            border-radius: 10rpx;
            box-sizing: border-box;

            .title {
              font-size: 32rpx;
              font-weight: 600;
            }

            .time {
              padding-top: 6rpx;
              font-size: 24rpx;
            }

            .content {
              padding-top: 20rpx;
              font-size: 28rpx;
            }
          }
        }

        .footer {
          padding: 0 100rpx 20rpx 100rpx;
        }
      }
    }
  }
}
</style>
