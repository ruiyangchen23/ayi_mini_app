<template>
  <view class="background"></view>
  <view class="all">
    <!-- <view class="topright">
      <nut-icon name="setting"></nut-icon>
    </view> -->
    <view class="touxiang">
      <view
        class="login"
        v-if="user?.authProfile"
        @click="getUserProfile"
      >
        <nut-avatar
          class="avatar"
          size="large"
          :icon="user.avatar"
        ></nut-avatar>
        <view class="usename">
          {{ user.nickname }}
        </view>
      </view>
      <view
        class="nologin"
        v-else
        @click="getUserProfile"
        type="getUserProfile"
      >
        <!-- <nut-avatar
          class="avatar"
          size="large"
          url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAvdJREFUWEfFV0trFEEQrurNQxAFweDzsO5O9+hBD7JBDSgJHgQP3hRBPKl4y18w/gRzC+opCD5uHgQvKgq+EjzowUz3vg4aCREhapC4u13S4w5sNjPTPUlg5zj9fVVfVVdXVyNk+IIgOJvL5c5prY8yxoaIaMjQEXFRa73IGPvQarUe+77/xNUs2oD1en3PysrKdcbYZQAo2PDt9arWenpwcHAqn89/S+OkCgiCYIIxdg0A9jo67obNa61v+74/kcRPFKCUeggA59fpuJv2iHN+Ic5WrIByuVwjovwmOQ/NIGLd87wD3TbXCJBSLiLizs10Htkiou9CiLBwo2+VACnlS0Q86eD8KRHdb7VaLww2l8uNIuJFADhj4xLRKyHEqTUC2gV3w2YAAK5yzu/G4ZRSVwDgjs2G1vpmVJhhBsxRazQas7Zq7yQmOXEMZL6/v79kjmgowIVERL+EENtt0Zl1KeVPRNyWho2CCQUopQIAEGkEIpoTQhxyFPAZEQ9asJJz7qNSahQAnjsYfsc5P+6AMwG9BYBjDtgxlFLeQsRxB/BXzvl+B5wR8AUA9tmwRDRpBLxHxGEbuL0+wjl/k4ZVSp0AgNcu9ohoBrN0PSIKhBCpeyulnENE30WA6Y6mBn4DwFYXgsEYEgBc8jxvVZTlcnkEAO5lbOHLmQW0hf4FgGkAiLbDpN1c1wOugbRxy5m2wJDM+e3r65tBxNlCobBg/lWr1V1EVGo2m8OMMZduGvoPtyBDEVa01uO2acdMTYyxSQAo2rIRFqHLMXRpwd3OlFImE4mDiMGHx9ChETk3oBgRtoY0Zm3FjLEjxWLxky2dceuVSuWw1vpjAvd/KzaLSZfRelLf7cxmO/U6RsTTnuc9W0/0EUcpZWbBB102Vl/HSVlYWloaKJVKjY0IqNVqW5rN5p9OG2sGkmixayRb4Jzv3ojzjiz8AIAd7cqPH8k6RPRuKI1EZLmgXDPkPJZ3pK13D5NIRE+fZpGInj5OY5rKpj/P/wGTlpqwyZ7bjgAAAABJRU5ErkJggg=="
        ></nut-avatar> -->
        <nut-avatar
          class="avatar"
          size="large"
          :icon="defaultAvatar"
        ></nut-avatar>
        <view class="usename">请登录</view>
      </view>
    </view>

    <!-- 菜单栏 -->
    <view class="menu">
      <!-- <view class="head">
        <view class="left">菜单栏</view>
      </view> -->
      <nut-cell-group>
        <nut-cell title="我的注册" is-link @click="toMycert">
          <template v-slot:link>
            <view
              v-if="unreadCountCert && unreadCountCert > 0"
              class="unread-count"
            >
              <!-- {{ unreadCountCert }} -->1
            </view>
            <nut-icon name="right"></nut-icon>
          </template>
        </nut-cell>
        <nut-cell title="我的点评" is-link @click="toMycomment">
          <template v-slot:link>
            <view
              v-if="unreadCountComment && unreadCountComment > 0"
              class="unread-count"
              >{{ unreadCountComment }}</view
            >
            <nut-icon name="right"></nut-icon>
          </template>
        </nut-cell>
        <nut-cell title="我的收藏" is-link @click="toCollection"></nut-cell>
        <nut-cell title="我的消息" is-link @click="toMessages">
          <template v-slot:link>
            <view
              v-if="unreadCountMsg && unreadCountMsg > 0"
              class="unread-count"
              >{{ unreadCountMsg }}</view
            >
            <nut-icon name="right"></nut-icon>
          </template>
        </nut-cell>
        <nut-cell title="联系我们" is-link @click="toContactUs"></nut-cell>
      </nut-cell-group>
    </view>
  </view>

  <nut-popup v-model:visible="showContactUs">
    <view
      style="
        height: 300rpx;
        width: 500rpx;
        padding: 0 30rpx;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 28rpx;
      "
    >
      <view>
        如果您有任何疑问，欢迎邮件至
        <view
          style="display: inline; text-decoration: underline; color: #ee8283"
          @click="copy('support_ayituitui@163.com')"
        >
          support_ayituitui@163.com
        </view>
      </view>
    </view>
  </nut-popup>

  <!-- tab bar -->
  <custom-tab-bar ref="tabbar"></custom-tab-bar>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from "vue";
import Taro, { useDidShow } from "@tarojs/taro";
import CustomTabBar from "../../components/custom-tab-bar/index.vue";
import API from "../../utils/api";
import Util from "../../utils/util";

export default {
  name: "My",
  components: {
    "custom-tab-bar": CustomTabBar,
  },
  setup() {
    const state = reactive({
      user: null,
      getUserProfileLoading: false,
      unreadCountComment: 0,
      unreadCountMsg: 0,
      unreadCountCert: 0,
      showContactUs: false,
      defaultAvatar: process.env.DEFAULT_AVATAR,
    });

    const tabbar = ref<InstanceType<typeof CustomTabBar>>();
    useDidShow(() => {
      // 初始化获取 token
      state.user = Taro.getStorageSync("user");

      (tabbar.value as any).current = 2;
      updateReadCount();
    });

    onMounted(() => {
      setInterval(() => {
        updateReadCount();
      }, 10 * 1000);
    });

    /**
     * 更新未读数量
     */
    const updateReadCount = () => {
      let unreadCountData = Taro.getStorageSync("unreadCount");
      if (!unreadCountData) {
        unreadCountData = [];
      }
      let unreadCount = 0;
      unreadCountData
        .filter(
          (it) =>
            it.type == 1 ||
            it.type == 2 ||
            it.type == 3 ||
            it.type == 4 ||
            it.type == 5 ||
            it.type == 6
        )
        .forEach((it) => (unreadCount = unreadCount + it.count));
      if (unreadCount > 99) {
        unreadCount = 99;
      }
      try {
        (tabbar.value as any).unreadCount = unreadCount;
      } catch (e) {
        console.log("aaaa", e);
      }
      state.unreadCountComment = 0;
      unreadCountData
        .filter((it) => it.type == 4)
        .forEach(
          (it) =>
            (state.unreadCountComment = state.unreadCountComment + it.count)
        );
      if (state.unreadCountComment > 99) {
        state.unreadCountComment = 99;
      }
      state.unreadCountMsg = 0;
      unreadCountData
        .filter(
          (it) =>
            it.type == 1 ||
            it.type == 2 ||
            it.type == 3 ||
            it.type == 4 ||
            it.type == 5
        )
        .forEach(
          (it) => (state.unreadCountMsg = state.unreadCountMsg + it.count)
        );
      if (state.unreadCountMsg > 99) {
        state.unreadCountMsg = 99;
      }
      state.unreadCountCert = 0;
      unreadCountData
        .filter((it) => it.type == 6)
        .forEach(
          (it) => (state.unreadCountCert = state.unreadCountCert + it.count)
        );
    };

    // 页面跳转相关
    const toMycert = () => {
      Taro.navigateTo({
        url: "/pages/mycert/index",
      });
    };
    const toCollection = () => {
      Taro.navigateTo({
        url: "/pages/collection/index",
      });
    };
    const toFootprint = () => {
      Taro.navigateTo({
        url: "/pages/footprint/index",
      });
    };
    const toMycomment = () => {
      Taro.navigateTo({
        url: "/pages/mycomment/index",
      });
    };
    const toMessages = () => {
      Taro.navigateTo({
        url: "/pages/messages/index",
      });
    };
    const toContactUs = () => {
      state.showContactUs = true;
    };

    // 其他工具函数
    const getUserProfile = () => {
      if (state.getUserProfileLoading) {
        return;
      }
      if (!state.user?.authProfile) {
        state.getUserProfileLoading = true;
        const pLogin = new Promise((resolve, reject) => {
          Taro.login({
            success: function (res) {
              resolve(res.code);
            },
          });
        });
        const pUserProfile = new Promise((resolve, reject) => {
          Taro.getUserProfile({
            // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            desc: "用于完善用户资料",
            success: (profile) => {
              resolve(profile);
            },
          });
        });
        Promise.all([pLogin, pUserProfile]).then(async (values) => {
          API.requestAfterHandle(
            await API.authLogin(
              values[0],
              values[1].encryptedData,
              values[1].iv
            ),
            (data) => {
              Taro.setStorageSync("user", state.user);
              state.user = data;
            }
          );
          state.getUserProfileLoading = false;

          Taro.navigateTo({
            url: "/pages/profile/index",
          });
        });
        return;
      }
      Taro.navigateTo({
        url: "/pages/profile/index",
      });
    };

    return {
      ...toRefs(state),
      tabbar,
      getUserProfile,
      toCollection,
      toFootprint,
      toMycomment,
      toMessages,
      toMycert,
      toContactUs,
      copy: Util.copy,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.background {
  position: absolute;
  top: 0;
  width: 750rpx;
  height: 400rpx;
  // background: linear-gradient(red, orange);
  background: linear-gradient(
    rgba(236, 128, 126, 1) 0%,
    rgba(236, 128, 126, 0.5) 100%
  );
  border-radius: 0 0 80rpx 80rpx;
}

.all {
  padding-left: 30rpx;
  padding-right: 30rpx;
  padding-bottom: 100rpx;
}

.topright {
  position: absolute;
  z-index: 888;
  right: 40rpx;
  top: 40rpx;
  color: #fff;
}

.touxiang {
  // text-align: left;
  padding-top: 80rpx;

  .login,
  .nologin {
    display: flex;
    align-items: center;

    .avatar {
      border-radius: 50%;
      border: #fff 4rpx solid;
    }

    .usename {
      position: relative;
      font-size: 28rpx;
      color: #fff;
      font-weight: 500;
      padding-top: 14rpx;
      margin-left: 20rpx;
    }
  }

  // .nologin {
  //   .avatar {
  //     background-image: url("data:image/svg+xml,%3Csvg t='1676982041730' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='3844' width='64' height='64'%3E%3Cpath d='M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zM213.333 832A298.667 298.667 0 0 1 512 533.333a170.667 170.667 0 1 1 170.667-170.666A170.667 170.667 0 0 1 512 533.333 298.667 298.667 0 0 1 810.667 832z' fill='%23dbdbdb' p-id='3845'%3E%3C/path%3E%3C/svg%3E");
  //     background-color: #fff;
  //   }
  // }

  .vip {
    position: relative;
    font-size: 20rpx;
    display: flex;
    justify-content: space-around;
    padding-top: 14rpx;
    color: #fff;

    .txt {
      background: rgb(43 43 43 / 55%);
      border-radius: 10rpx;
      padding: 4rpx 10rpx;
    }
  }
}

.favorites-footprints {
  position: relative;
  padding-top: 80rpx;
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  font-size: 26rpx;

  .favorites {
    display: flex;
    flex-direction: column;
    align-items: center;

    .num {
      font-size: 30rpx;
    }

    .txt {
      display: flex;
      align-items: center;

      .txt-right {
        padding-left: 8rpx;
      }
    }
  }

  .viewiding-line {
    border-right: #fff 1rpx solid;
    margin: 10rpx 0;
  }

  .footprints {
    display: flex;
    flex-direction: column;
    align-items: center;

    .num {
      font-size: 30rpx;
    }

    .txt {
      display: flex;
      align-items: center;

      .txt-right {
        padding-left: 8rpx;
      }
    }
  }
}

.openvip {
  position: relative;
  margin-top: 30rpx;
  background-color: rgba(0, 0, 0, 50%);
  padding: 30rpx 30rpx;
  display: flex;
  border-radius: 20rpx;
  align-items: center;
  justify-content: space-between;

  .left {
    font-size: 24rpx;
    color: rgb(255, 164, 37);
  }
}

.myorder {
  position: relative;
  margin-top: 30rpx;
  background-color: #fff;
  padding: 20rpx 30rpx;
  border-radius: 20rpx;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      font-size: 30rpx;
      font-weight: 600;
    }

    .right {
      font-size: 22rpx;
      display: flex;
      align-items: center;

      .arrow {
        width: 10rpx;
        height: 10rpx;
        border-top: 1rpx solid #000;
        border-right: 1rpx solid #000;
        transform: rotate(45deg);
      }
    }
  }

  .status {
    padding-top: 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 22rpx;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 40rpx;
        height: 40rpx;
      }
    }
  }
}

.balance {
  position: relative;
  margin-top: 30rpx;
  background-color: #fff;
  padding: 20rpx 30rpx;
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .num {
      font-size: 30rpx;
      font-weight: 600;
    }

    .txt {
      font-size: 26rpx;
    }
  }
}

.menu {
  position: relative;
  margin-top: 80rpx;
  background-color: #fff;
  padding: 20rpx 30rpx;
  border-radius: 20rpx;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      font-size: 30rpx;
      font-weight: 600;
    }
  }

  .unread-count {
    font-size: 20rpx;
    width: 24rpx;
    height: 24rpx;
    line-height: 24rpx;
    background: #f00;
    border-radius: 20rpx;
    color: #fff;
    padding: 4rpx 4rpx;
    text-align: center;
  }
}

.kefu {
  position: relative;
  margin-top: 30rpx;
  background-color: #fff;
  padding: 20rpx 30rpx;
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    padding-bottom: 20rpx;
  }

  .qrcode {
    padding-bottom: 20rpx;
  }

  .weno {
    padding-bottom: 20rpx;
  }

  .btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

.copyright {
  position: relative;
  margin-top: 30rpx;
  padding: 20rpx 0;
  font-size: 20rpx;
  text-align: center;
  line-height: 1.2rem;
}

.nut-popup {
  border-radius: 30rpx;
  overflow: hidden;
}
</style>
