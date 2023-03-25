<template>
  <view>
    <button
      class="avatar-wrapper"
      open-type="chooseAvatar"
      @chooseavatar="onChooseAvatar"
    >
      <image class="avatar" :src="avatarUrl"></image>
    </button>
    <view class="form">
      <nut-cell-group>
        <nut-cell title="昵称">
          <nut-input
            type="nickname"
            class="weui-input"
            placeholder="请输入昵称"
            v-model="form.nickname"
          />
        </nut-cell>
      </nut-cell-group>
      <view @click="submit" class="submit">
        <view class="submit nut-button--primary">提交</view>
      </view>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import API from "../../utils/api";
import Taro from "@tarojs/taro";

const defaultAvatar = process.env.DEFAULT_AVATAR;

export default {
  name: "Profile",
  components: {},
  setup() {
    const state = reactive({
      avatarUrl: "",
      form: {
        avatar: "",
        nickname: "",
      },
      uploadUrl: process.env.REQ_BASE_URL + "/simple/file/upload",
    });

    onMounted(() => {
      const user = Taro.getStorageSync("user");
      if (user) {
        state.avatarUrl = user.avatar || defaultAvatar;
        state.form.avatar = user.avatar || defaultAvatar;
        state.form.nickname = user.nickname;
      }
    });

    const onChooseAvatar = (e) => {
      console.log("e", e);
      const { avatarUrl } = e.mpEvent.detail;
      state.avatarUrl = avatarUrl;
    };

    const submit = async (e) => {
      console.log("state.avatarUrl", state.avatarUrl);
      Taro.showLoading({
        title: "提交中",
        mask: true,
      });

      if (
        /^((http|https):\/\/tmp\/)|(wxfile:\/\/tmp_).+$/.test(state.avatarUrl)
      ) {
        // 上传图片
        Taro.uploadFile({
          url: state.uploadUrl,
          filePath: state.avatarUrl,
          name: "file",
          success: async (res) => {
            console.log("res", res);
            const data = res.data;
            state.form.avatar = JSON.parse(data).data;
            save();
          },
        });
      } else {
        state.form.avatar = state.avatarUrl;
        save();
      }
    };

    const save = async () => {
      console.log("save", state.form);
      const saveProfileRes1 = API.requestAfterHandle(
        await API.saveProfile(state.form)
      );
      Taro.hideLoading();
      if (saveProfileRes1.msg == "ok") {
        Taro.showLoading({
          title: "加载中",
          mask: true,
        });
        API.login(() => {
          Taro.hideLoading();
          Taro.showToast({
            title: "保存成功",
            icon: "success",
            mask: true,
            duration: 2000,
          });
          setTimeout(() => {
            Taro.switchTab({
              url: "/pages/my/index",
            });
          }, 2000);
        });
      }
    };

    return {
      ...toRefs(state),
      onChooseAvatar,
      submit,
    };
  },
};
</script>

<style lang="scss">
.avatar-wrapper {
  padding: 0;
  width: 56px !important;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.avatar {
  display: block;
  width: 56px;
  height: 56px;
}

.container {
  display: flex;
}

.form {
  padding: 0 30rpx;
}

.submit {
  text-align: center;
  height: 70rpx;
  line-height: 70rpx;
  border-radius: 20rpx;
}
</style>
