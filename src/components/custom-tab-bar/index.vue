<template>
  <!-- <view class="tabbar">
        <nut-tabbar v-model:visible="current" :bottom="true" :safe-area-inset-bottom="true" :placeholder="true" @tab-switch="tabSwitch">
            <nut-tabbar-item v-for="(item, idx) in state.list" :key="idx"
                :tab-title="item.text" :icon="item.iconPath" :to="item.pagePath"></nut-tabbar-item>
        </nut-tabbar>
    </view> -->
  <view class="tabbar">
    <view class="h5-div nut-tabbar__placeholder">
      <view class="nut-tabbar nut-tabbar-bottom nut-tabbar-safebottom">
        <template v-for="(it, idx) in state.list" :key="idx">
          <view
            :class="{
              'h5-div nut-tabbar-item': true,
              'nut-tabbar-item__icon--unactive': current != idx,
            }"
            @click="tabSwitch(it)"
          >
            <view class="nut-tabbar-item_icon-box">
              <template v-if="it.iconPath">
                <nut-icon
                  v-if="current == idx"
                  font-class-name="iconfont"
                  class-prefix="icon"
                  :name="it.iconPath"
                  style="font-size: 24px; color: #fa2c19"
                >
                </nut-icon>
                <nut-icon
                  v-if="current != idx"
                  font-class-name="iconfont"
                  class-prefix="icon"
                  :name="it.iconPath"
                  style="font-size: 24px"
                >
                </nut-icon>
              </template>
              <view
                :class="{
                  'tabbar-it-unread-count': it.unreadCount && unreadCount && unreadCount > 0,
                  'nut-tabbar-item_icon-box_nav-word': true,
                  'nut-tabbar-item_icon-box_big-word': !!it.text,
                }"
              >
                <view v-if="!!it.text">{{ it.text }}</view>
                <view v-if="it.unreadCount && unreadCount && unreadCount > 0" class="unread-count">{{ unreadCount }}</view>
              </view>
            </view>
          </view>
          <view
            v-if="it.children"
            class="overlay-parent"
            v-show="it.childrenShow"
          >
            <nut-overlay
              class="overlay"
              v-model:visible="it.childrenShow"
              :overlay-style="overlayStyle"
            >
              <view class="tabbar-children">
                <template v-for="(tmpIt, tmpIdx) in state.list" :key="tmpIdx">
                  <view v-if="tmpIdx == idx" class="tabbar-blank realy">
                    <view
                      v-for="(childIt, childIdx) in it.children"
                      :key="childIdx"
                      class="child-it nut-tabbar-item_icon-box_big-word"
                      @click="tabSwitch(childIt)"
                    >
                      {{ childIt.text }}
                    </view>
                  </view>
                  <view v-else class="tabbar-blank"></view>
                </template>
              </view>
            </nut-overlay>
          </view>
        </template>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import Taro from "@tarojs/taro";
import { ref, reactive } from "vue";

export default {
  setup(props) {
    const state = reactive({
      color: "#B1B1B1",
      selectedColor: "#34C266",
      backgroundColor: "#F8F8F8",
      list: [
        {
          pagePath: "pages/index/index",
          text: "找阿姨",
          // iconPath: 'home'
        },
        {
          iconPath: "plus-square",
          children: [
            {
              pagePath: "pages/comment/index",
              text: "雇主-点评阿姨",
              tabbarPage: false,
            },
            {
              pagePath: "pages/aycert/index?type=注册",
              text: "阿姨-我要注册",
              tabbarPage: false,
            },
          ],
          childrenShow: false,
        },
        {
          pagePath: "pages/my/index",
          text: "我",
          unreadCount: true
          // iconPath: 'my'
        },
      ],
      unreadCount: 0
    });

    const current = ref(0);
    const unreadCount = ref(0);

    const overlayShow = ref(true);
    const overlayStyle = reactive({
      backgroundColor: "rgba(0, 0, 0, .0)",
    });

    return {
      props,
      state,
      current,
      unreadCount,
      overlayShow,
      overlayStyle,
    };
  },
  props: [],
  computed: {},
  filters: {},
  methods: {
    tabSwitch: (item) => {
      console.log(item);
      if (item.children && item.children.length > 0) {
        item.childrenShow = true;
        return;
      }
      if (item.tabbarPage == false) {
        Taro.navigateTo({ url: "/" + item.pagePath });
      } else {
        Taro.switchTab({ url: "/" + item.pagePath });
      }
    },
  },
};
</script>
<style lang="scss">
.tabbar-it-unread-count {
  display: flex;

  .unread-count {
    background-color: #f00;
    font-size: 20rpx;
    width: 24rpx;
    height: 24rpx;
    line-height: 24rpx;
    padding: 2rpx 2rpx;
    color: #fff;
    border-radius: 18rpx;
    margin-left: 4rpx;
    text-align: center;
  }
}

.nut-tabbar {
  height: 100rpx;
}

.overlay-parent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .overlay {
    position: relative;

    .tabbar-children {
      position: absolute;
      bottom: 100rpx;
      left: 0;
      display: flex;
      width: 100%;

      .tabbar-blank {
        flex: 1;

        &.realy {
          background-color: #fff;
          // padding: 20rpx;
          text-align: center;
          box-shadow: 0 0 6px #e9e9e9;
        }

        .child-it {
          padding: 20rpx 0;
          border-bottom: 1px solid #e9e9e9;
        }

        :last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
