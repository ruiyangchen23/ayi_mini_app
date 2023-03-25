<template>
  <view class="aycert">
    <view class="row">
      <view class="title">1) 姓 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.lastname.pattern.test(submitData.lastname)
        "
        class="err"
        >{{ submitDataValidator.lastname.msg }}</view
      >
      <view class="content">
        <nut-input v-model="submitData.lastname" placeholder="请输入姓氏" />
      </view>
    </view>
    <view class="row">
      <view class="title">2) 名 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.firstname.pattern.test(submitData.firstname)
        "
        class="err"
        >{{ submitDataValidator.firstname.msg }}</view
      >
      <view class="content">
        <nut-input v-model="submitData.firstname" placeholder="请输入名字" />
      </view>
    </view>
    <view class="row">
      <view class="title">3) 出生年份 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.birthDate.pattern.test(submitData.birthDate)
        "
        class="err"
        >{{ submitDataValidator.birthDate.msg }}</view
      >
      <view class="content">
        <nut-input
          v-model="submitData.birthDate"
          placeholder="请输入出生年份，例如1900"
        />
      </view>
    </view>
    <view class="row">
      <view class="title">4) 家乡 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.hometown.pattern.test(submitData.hometown)
        "
        class="err"
        >{{ submitDataValidator.hometown.msg }}</view
      >
      <view class="content">
        <nut-cell
          :title="submitData.hometown || '家乡'"
          @click="
            () => {
              hometownShow = true;
            }
          "
        ></nut-cell>
        <nut-picker
          v-model="hometownArr"
          v-model:visible="hometownShow"
          :columns="servLocationColumns"
          title="家乡"
          @confirm="hometownConfirm"
        >
        </nut-picker>
      </view>
    </view>
    <view class="row">
      <view class="title">5) 服务地区 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.servLocation.pattern.test(
            submitData.servLocation
          )
        "
        class="err"
        >{{ submitDataValidator.servLocation.msg }}</view
      >
      <view class="content">
        <nut-cell
          :title="submitData.servLocation || '服务地区'"
          @click="
            () => {
              servLocationShow = true;
            }
          "
        ></nut-cell>
        <nut-picker
          v-model="servLocationArr"
          v-model:visible="servLocationShow"
          :columns="servLocationColumns"
          title="服务地区"
          @confirm="servLocationConfirm"
        >
        </nut-picker>
      </view>
    </view>
    <view class="row">
      <view class="title">6) 服务起始年份 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.servStartYear.pattern.test(
            submitData.servStartYear
          )
        "
        class="err"
        >{{ submitDataValidator.servStartYear.msg }}</view
      >
      <view class="content">
        <nut-input
          v-model="submitData.servStartYear"
          placeholder="请输入服务起始年份"
        />
      </view>
    </view>
    <view class="row">
      <view class="title">7) 服务类型 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.servType.pattern.test(submitData.servType)
        "
        class="err"
        >{{ submitDataValidator.servType.msg }}</view
      >
      <view class="content">
        <nut-cell
          :title="submitData.servType || '服务类型'"
          @click="
            () => {
              servTypeShow = true;
            }
          "
        ></nut-cell>
        <nut-picker
          v-model="servTypeArr"
          v-model:visible="servTypeShow"
          :columns="servTypeColumns"
          title="服务类型"
          @confirm="servTypeConfirm"
        >
        </nut-picker>
      </view>
    </view>
    <view class="row">
      <view class="title">8) 自我介绍 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit && !submitDataValidator.info.pattern.test(submitData.info)
        "
        class="err"
        >{{ submitDataValidator.info.msg }}</view
      >
      <view class="content">
        <nut-textarea v-model="submitData.info" limit-show max-length="200" />
      </view>
    </view>
    <view class="row">
      <view class="title">9) 图片展示</view>
      <view class="desc descc-h">如相关证书、服务日常等</view>
      <view class="desc descc-h"> 单张图片大小不能大于5M </view>
      <view class="content">
        <nut-uploader
          :url="uploadUrl"
          v-model:file-list="imgsList"
          maximum="3"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="imgsSuccess"
        ></nut-uploader>
      </view>
    </view>
    <view class="row">
      <view class="title">10) 实名认证 <view class="require">*</view></view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.idnum.pattern.test(submitData.idnum)
        "
        class="err"
        >{{ submitDataValidator.idnum.msg }}</view
      >
      <view class="content">
        <nut-input
          v-model="submitData.idnum"
          placeholder="请输入阿姨的身份证号码"
        />
      </view>
    </view>
    <view class="row">
      <view class="title">11) 身份证照片</view>
      <view class="desc descc-h"> 单张图片大小不能大于5M </view>
      <view class="content">
        <!-- <nut-uploader
          :url="privateUploadUrl"
          v-model:file-list="idnumImgsList"
          maximum="2"
          multiple
          list-type="list"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="idnumImgsSuccess"
        >
          <nut-button type="success" size="small">上传身份证</nut-button>
        </nut-uploader> -->
        <nut-uploader
          :url="privateUploadUrl"
          v-model:file-list="idnumImgsList"
          maximum="2"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="idnumImgsSuccess"
        ></nut-uploader>
      </view>
    </view>
    <view class="row">
      <view class="title">12) 联系方式 <view class="require">*</view></view>
      <view class="desc descc-h">请至少填写一种</view>
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.contact.pattern.test(submitData.mobile) &&
          !submitDataValidator.contact.pattern.test(submitData.wxcode) &&
          wxqrcodeList.length < 1
        "
        class="err"
      >
        {{ submitDataValidator.contact.msg }}
      </view>
      <view class="content">
        <view class="sub-row">
          <view class="sub-title">12.1) 手机号码</view>
          <view class="sub-content">
            <nut-input v-model="submitData.mobile" placeholder="手机号码" />
          </view>
        </view>
        <view class="sub-row">
          <view class="sub-title">12.2) 微信号</view>
          <view class="sub-content">
            <nut-input v-model="submitData.wxcode" placeholder="微信号" />
          </view>
        </view>
        <view class="sub-row">
          <view class="sub-title">12.3) 微信二维码</view>
          <view class="desc descc-h"> 单张图片大小不能大于5M </view>
          <view class="sub-content">
            <nut-uploader
              :url="uploadUrl"
              maximum="1"
              v-model:file-list="wxqrcodeList"
              :headers="uploadHeaders"
              :with-credentials="true"
              :maximize="uploadMaximize"
              @success="wxqrcodeSuccess"
            ></nut-uploader>
          </view>
        </view>
      </view>
    </view>
    <view class="row">
      <view class="title">13) 上传头像</view>
      <view class="desc descc-h"> 单张图片大小不能大于5M </view>
      <view class="content">
        <nut-uploader
          :url="uploadUrl"
          v-model:file-list="avatarList"
          maximum="1"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="avatarSuccess"
        ></nut-uploader>
      </view>
    </view>
    <view class="row btn" @click="submit">
      <view class="submit nut-button--primary">提交</view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from "vue";
import Taro from "@tarojs/taro";
import API from "../../utils/api";
import Constants from "../../utils/constants";
import Util from "../../utils/util";

export default {
  name: "Comment",
  components: {},
  setup() {
    const state = reactive({
      $instance: null,
      user: null,
      servTypeColumns: ref(Constants.servTypeList()),
      servTypeShow: false,
      servTypeArr: ["月嫂"],
      servLocationColumns: ref(Constants.locationList()),
      servLocationShow: false,
      servLocationArr: ["北京"],
      hometownShow: false,
      hometownArr: ["北京"],
      servStartTimeShow: false,
      servEndTimeShow: false,
      uploadUrl: process.env.REQ_BASE_URL + "/simple/file/upload",
      privateUploadUrl:
        process.env.REQ_BASE_URL + "/simple/file/private-upload",
      uploadHeaders: { "miniapp-token": "" },
      uploadMaximize: 1024 * 1024 * 5,
      wxqrcodeList: reactive([]),
      imgsList: reactive([]),
      idnumImgsList: reactive([]),
      avatarList: reactive([]),
      submitData: {
        ayId: "",
        lastname: "",
        firstname: "",
        hometown: "北京",
        age: "",
        birthDate: "",
        servLocation: "北京",
        // servYear: null,
        servStartYear: "",
        servType: "月嫂",
        mobile: "",
        wxcode: "",
        wxqrcode: "",
        info: "",
        imgs: "",
        idnum: "",
        idnumImgs: "",
        avatar: "",
        type: "",
      },
      submitDataValidator: {
        lastname: {
          pattern: /\S+/,
          msg: "请输入姓氏",
        },
        firstname: {
          pattern: /\S+/,
          msg: "请输入名字",
        },
        hometown: {
          pattern: /\S+/,
          msg: "请选择家乡",
        },
        // age: {
        //   pattern: /^[1-9]+[0-9]*$/,
        //   msg: "请填写年龄",
        // },
        birthDate: {
          pattern: /^\d{4}$/,
          msg: "请填写正确的出生年份",
        },
        // servYear: {
        //   pattern: /\S+/,
        //   msg: "请选择服务年限",
        // },
        servStartYear: {
          pattern: /^\d{4}$/,
          msg: "请选择服务起始年份",
        },
        servLocation: {
          pattern: /\S+/,
          msg: "请选择服务地区",
        },
        servType: {
          pattern: /\S+/,
          msg: "请选择服务类型",
        },
        contact: {
          pattern: /\S+/,
          msg: "请至少填写一种联系方式",
        },
        info: {
          pattern: /\S+/,
          msg: "请填写自我介绍",
        },
        idnum: {
          pattern:
            /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
          msg: "请填写实名认证信息",
        },
      },
      readySubmit: false,
      getUserProfileLoading: false,
    });

    onMounted(() => {
      state.user = Taro.getStorageSync("user");
      state.uploadHeaders["miniapp-token"] = state.user.token;
      state.$instance = Taro.getCurrentInstance();
      state.submitData.ayId = state.$instance.router.params.id;
      state.submitData.type = state.$instance.router.params.type;
      const certId = state.$instance.router.params.certId;
      if (certId) {
        API.myCert().then((myCertRes) => {
          API.requestAfterHandle(myCertRes, (data) => {
            Object.assign(state.submitData, data);
            // state.submitData.id = certId;
            state.submitData.idnumImgs = "";
            if (state.submitData.servType) {
              state.servTypeArr = [state.submitData.servType];
            }
            if (state.submitData.servLocation) {
              state.servLocationArr = [state.submitData.servLocation];
            }
            if (state.submitData.hometown) {
              state.hometownArr = [state.submitData.hometown];
            }
            if (state.submitData.wxqrcode) {
              state.wxqrcodeList.push(
                ...Util.splitImgs(state.submitData.wxqrcode)
              );
            }
            if (state.submitData.imgs) {
              state.imgsList.push(...Util.splitImgs(state.submitData.imgs));
            }
            if (state.submitData.avatar) {
              state.avatarList.push(...Util.splitImgs(state.submitData.avatar));
            }
          });
        });
        return;
      }
    });

    const servTypeConfirm = (e) => {
      state.submitData.servType = e.selectedValue[0];
    };
    const servLocationConfirm = (e) => {
      state.submitData.servLocation = e.selectedValue[0];
    };
    const hometownConfirm = (e) => {
      state.submitData.hometown = e.selectedValue[0];
    };

    const submit = async () => {
      if (!getProfile()) return false;
      state.readySubmit = true;
      if (
        !state.submitDataValidator.lastname.pattern.test(
          state.submitData.lastname
        )
      ) {
        submitWarning(state.submitDataValidator.lastname.msg);
        return false;
      }
      if (
        !state.submitDataValidator.firstname.pattern.test(
          state.submitData.firstname
        )
      ) {
        submitWarning(state.submitDataValidator.firstname.msg);
        return false;
      }
      if (
        !state.submitDataValidator.hometown.pattern.test(
          state.submitData.hometown
        )
      ) {
        submitWarning(state.submitDataValidator.hometown.msg);
        return false;
      }
      // if (!state.submitDataValidator.age.pattern.test(state.submitData.age)) {
      //   submitWarning(state.submitDataValidator.age.msg);
      //   return false;
      // }
      if (
        !state.submitDataValidator.birthDate.pattern.test(
          state.submitData.birthDate
        )
      ) {
        submitWarning(state.submitDataValidator.birthDate.msg);
        return false;
      }
      if (
        !state.submitDataValidator.servLocation.pattern.test(
          state.submitData.servLocation
        )
      ) {
        submitWarning(state.submitDataValidator.servLocation.msg);
        return false;
      }
      if (
        !state.submitDataValidator.contact.pattern.test(
          state.submitData.mobile
        ) &&
        !state.submitDataValidator.contact.pattern.test(
          state.submitData.wxcode
        ) &&
        state.wxqrcodeList.length < 1
      ) {
        submitWarning(state.submitDataValidator.contact.msg);
        return false;
      }
      if (
        !state.submitDataValidator.servStartYear.pattern.test(
          state.submitData.servStartYear
        )
      ) {
        submitWarning(state.submitDataValidator.servStartYear.msg);
        return false;
      }
      if (
        !state.submitDataValidator.servType.pattern.test(
          state.submitData.servType
        )
      ) {
        submitWarning(state.submitDataValidator.servType.msg);
        return false;
      }
      if (!state.submitDataValidator.idnum.pattern.test(state.submitData.idnum))
        return false;
      // 填充 & 校验
      if (state.wxqrcodeList.length > 0) {
        if (
          state.wxqrcodeList.filter((item) => item.status != "success").length >
          0
        ) {
          submitWarning("微信二维码未上传成功，请重试");
          return;
        }
        state.submitData.wxqrcode = state.wxqrcodeList[0].url;
      }
      if (state.imgsList.length > 0) {
        if (
          state.imgsList.filter((item) => item.status != "success").length > 0
        ) {
          submitWarning("图片未上传成功，请重试");
          return;
        }
        state.submitData.imgs = state.imgsList
          .map((item) => item.url)
          .join(",");
      }
      if (state.idnumImgsList.length > 0) {
        if (
          state.idnumImgsList.filter((item) => item.status != "success")
            .length > 0
        ) {
          submitWarning("身份证图片未上传成功，请重试");
          return;
        }
        state.submitData.idnumImgs = state.idnumImgsList
          .map((item) => item.privateUrl)
          .join(",");
      }
      if (state.avatarList.length > 0) {
        if (
          state.avatarList.filter((item) => item.status != "success").length > 0
        ) {
          submitWarning("头像未上传成功，请重试");
          return;
        }
        state.submitData.avatar = state.avatarList
          .map((item) => item.url)
          .join(",");
      }
      // 验证手机号码格式
      if (state.submitData.mobile) {
        if (!/^\d{11}$/.test(state.submitData.mobile)) {
          submitWarning("请输入正确的手机号码");
          return;
        }
      }
      // 校验
      console.log("提交数据：", state.submitData);
      Taro.showLoading({
        title: "提交中",
        mask: true,
      });
      const res = API.requestAfterHandle(await API.cert(state.submitData));
      if (res.msg != "ok") {
        // Taro.showToast({
        //   title: res.msg,
        //   icon: "error",
        //   duration: 2000,
        //   mask: true,
        // });
        return false;
      } else {
        Taro.hideLoading();
        Taro.showToast({
          title: "提交成功",
          icon: "success",
          duration: 2000,
          mask: true,
        });
        setTimeout(() => {
          Taro.switchTab({
            url: "/pages/index/index",
          });
        }, 2000);
      }
    };

    const wxqrcodeSuccess = (e) => {
      state.wxqrcodeList[state.wxqrcodeList.length - 1].url = JSON.parse(
        e.responseText.data
      ).data;
    };
    const imgsSuccess = (e) => {
      state.imgsList[state.imgsList.length - 1].url = JSON.parse(
        e.responseText.data
      ).data;
    };
    const idnumImgsSuccess = (e) => {
      state.idnumImgsList[state.idnumImgsList.length - 1].privateUrl =
        JSON.parse(e.responseText.data).data;
    };
    const avatarSuccess = (e) => {
      state.avatarList[state.avatarList.length - 1].url = JSON.parse(
        e.responseText.data
      ).data;
    };

    const getProfile = () => {
      if (state.user?.authProfile) {
        return true;
      }
      if (state.getUserProfileLoading) {
        return false;
      }
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
      Promise.all([pLogin, pUserProfile]).then((values) => {
        API.authLogin(values[0], values[1].encryptedData, values[1].iv).then(
          (authLoginRes) => {
            API.requestAfterHandle(authLoginRes, (data) => {
              Taro.setStorageSync("user", data);
              state.user = data;
            });
            state.getUserProfileLoading = false;
          }
        );
      });
      return false;
    };

    const submitWarning = (txt) => {
      Taro.showToast({
        title: txt,
        icon: "error",
        duration: 1500,
      });
    };

    return {
      ...toRefs(state),
      submit,
      servTypeConfirm,
      servLocationConfirm,
      hometownConfirm,
      wxqrcodeSuccess,
      imgsSuccess,
      idnumImgsSuccess,
      avatarSuccess,
    };
  },
};
</script>

<style lang="scss">
.aycert {
  margin: 0 30rpx 30rpx 30rpx;

  .row {
    margin-top: 30rpx;
    background: #fff;
    border-radius: 20rpx;
    padding: 20rpx;

    .title {
      font-size: 28rpx;
      line-height: 1.2rem;
      display: flex;

      .require {
        color: red;
        padding-left: 6rpx;
      }
    }

    .desc {
      font-size: 20rpx;
      line-height: 0.8rem;
      margin-top: 10rpx;
    }

    .err {
      font-size: 20rpx;
      line-height: 0.8rem;
      margin-top: 10rpx;
      color: red;
    }

    .content {
      padding-top: 20rpx;

      .nut-textarea,
      .nut-input {
        padding: 0;
      }

      .sub-row {
        padding: 20rpx;
        .sub-title {
          font-size: 24rpx;
        }
        .sub-content {
          padding-top: 10rpx;
        }
      }
    }

    &.btn {
      background: rgba($color: #000000, $alpha: 0);
      padding: 0 0 20rpx 0;

      .submit {
        font-size: 28rpx;
        // background: #1d6308;
        border-radius: 20rpx;
        text-align: center;
        height: 70rpx;
        line-height: 70rpx;
        // color: #fff;
      }
    }
  }
}
</style>
