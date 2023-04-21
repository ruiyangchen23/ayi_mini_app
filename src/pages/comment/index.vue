
<template>
  <view class="comment">
    <view v-if="formItems[0].show" class="row">
      <view class="title"
        >{{ formItems[0].num }}) 姓 <view class="require">*</view></view
      >
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.lastname.pattern.test(submitData.lastname)
        "
        class="err"
        >{{ submitDataValidator.lastname.msg }}</view
      >
      <view class="content">
        <nut-input
          v-model="submitData.lastname"
          placeholder="请输入阿姨的姓氏"
          :disabled="!!submitData.ayId"
        />
      </view>
    </view>
    <view v-if="formItems[1].show" class="row">
      <view class="title"
        >{{ formItems[1].num }}) 名 <view class="require">*</view></view
      >
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.firstname.pattern.test(submitData.firstname)
        "
        class="err"
        >{{ submitDataValidator.firstname.msg }}</view
      >
      <view class="content">
        <nut-input
          v-model="submitData.firstname"
          placeholder="请输入阿姨的名字"
          :disabled="!!submitData.ayId"
        />
      </view>
    </view>
    <view v-if="formItems[2].show" class="row">
      <view class="title"
        >{{ formItems[2].num }}) 家乡 <view class="require">*</view></view
      >
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
              !!submitData.ayId ? null : (hometownShow = true);
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
    <view v-if="formItems[3].show" class="row">
      <view class="title"
        >{{ formItems[3].num }}) 服务地区 <view class="require">*</view></view
      >
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
        <nut-popup
          class="picker-item"
          position="bottom"
          :visible="servLocationVisible"
        >
          <view class="head">
            <view class="title">服务地区</view>
          </view>
          <view class="body">
            <view
              v-for="(it, idx) in servLocationColumns"
              :key="idx"
              :class="{
                item: true,
                active: servLocationVal == it.value,
              }"
              @click="() => (servLocationVal = it.value)"
            >
              {{ it.text }}
            </view>
          </view>
          <view class="foot">
            <view class="cancel" @click="cancelServLocationVal">取消</view>
            <view class="confirm" @click="servLocationConfirm">确定</view>
          </view>
        </nut-popup>
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
    <view v-if="formItems[4].show" class="row">
      <view class="title">{{ formItems[4].num }}) 阿姨的联系方式</view>
      <view class="content">
        <view class="sub-row">
          <view class="sub-title">{{ formItems[4].num }}.1) 手机号码</view>
          <view class="sub-content">
            <nut-input v-model="submitData.mobile" placeholder="手机号码" />
          </view>
        </view>
        <view class="sub-row">
          <view class="sub-title">{{ formItems[4].num }}.2) 微信号</view>
          <view class="sub-content">
            <nut-input v-model="submitData.wxcode" placeholder="微信号" />
          </view>
        </view>
        <view class="sub-row">
          <view class="sub-title">{{ formItems[4].num }}.3) 微信二维码</view>
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
    <view v-if="formItems[5].show" class="row">
      <view class="title"
        >{{ formItems[5].num }}) 服务类型 <view class="require">*</view></view
      >
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
    <view v-if="formItems[6].show" class="row">
      <view class="title"
        >{{ formItems[6].num }}) 评分 <view class="require">*</view></view
      >
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.rate.pattern.test(submitData.rate + '')
        "
        class="err"
        >{{ submitDataValidator.rate.msg }}</view
      >
      <view class="content">
        <nut-rate
          active-color="#FFC800"
          v-model="submitData.rate"
          icon-size="18"
          spacing="10"
        />
      </view>
    </view>
    <view v-if="formItems[7].show" class="row">
      <view class="title"
        >{{ formItems[7].num }}) 评价内容 <view class="require">*</view></view
      >
      <view
        v-show="
          readySubmit &&
          !submitDataValidator.commentContent.pattern.test(
            submitData.commentContent
          )
        "
        class="err"
        >{{ submitDataValidator.commentContent.msg }}</view
      >
      <view class="content">
        <nut-textarea
          v-model="submitData.commentContent"
          limit-show
          max-length="200"
        />
      </view>
    </view>
    <view v-if="formItems[8].show" class="row">
      <view class="title">{{ formItems[8].num }}) 图片分享</view>
      <view class="desc descc-h">如阿姨服务日常等</view>
      <view class="desc descc-h"> 单张图片大小不能大于5M </view>
      <view class="content">
        <nut-uploader
          :url="uploadUrl"
          v-model:file-list="imgList"
          maximum="3"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="imgSuccess"
        ></nut-uploader>
      </view>
    </view>
    <view v-if="formItems[9].show" class="row">
      <view class="title">{{ formItems[9].num }}) 雇佣开始时间</view>
      <view class="content">
        <nut-cell
          :title="submitData.servStartTime || '雇佣开始时间'"
          @click="() => (servStartTimeShow = true)"
        ></nut-cell>
        <nut-datepicker
          v-model="servStartTime"
          title="雇佣开始时间"
          type="date"
          v-model:visible="servStartTimeShow"
          :min-date="servMinDate"
          :max-date="servMaxDate"
          @confirm="servStartTimeConfirm"
        ></nut-datepicker>
      </view>
    </view>
    <view v-if="formItems[10].show" class="row">
      <view class="title">{{ formItems[10].num }}) 雇佣结束时间</view>
      <view class="content">
        <nut-cell
          :title="submitData.servEndTime || '雇佣结束时间'"
          @click="() => (servEndTimeShow = true)"
        ></nut-cell>
        <nut-datepicker
          v-model="servEndTime"
          title="雇佣结束时间"
          type="date"
          v-model:visible="servEndTimeShow"
          :min-date="servMinDate"
          :max-date="servMaxDate"
          @confirm="servEndTimeConfirm"
        ></nut-datepicker>
      </view>
    </view>
    <view v-if="formItems[11].show" class="row">
      <view class="title">{{ formItems[11].num }}) 佣金情况</view>
      <view class="content">
        <nut-input placeholder="如10000/月" v-model="submitData.payamountTxt" />
        
      </view>
    </view>
    <!-- <view class="row">
      <view class="title">13) 雇佣证明</view>
      <view class="desc descc-h"> 单张图片大小不能大于5M </view>
      <view class="content">
        <nut-uploader
          :url="uploadUrl"
          v-model:file-list="hireProveImgsList"
          maximum="3"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="hireProveImgsSuccess"
        ></nut-uploader>
      </view>
    </view> -->
    <view v-if="formItems[12].show" class="row">
      <view class="title">{{ formItems[12].num }}) 您的联系方式</view>
      <view class="desc descc-h">
        <!-- We will use this email address to verify your identity if youwant to
        update/delete the review in the futre. We may alsocontact this email if
        we need more information regardingproof of employment. -->
        <!-- 如果您未来希望删除或更改您的评论，我们会通过该邮箱来验证您的身份。 -->
      </view>
      <view class="content">
        <nut-input
          placeholder="如: 手机号、微信号、电子邮箱等"
          v-model="submitData.email"
        />
        <!-- <nut-button type="primary" v-on:click="getUserProfile">点击按钮</nut-button> -->
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
  methods: {
    async getUserProfile() {
      try {
        const res = await Taro.getUserProfile({ desc: '用于完善会员资料' });
        console.log(res.userInfo);
        // 在这里处理获取到的用户个人资料
      } catch (error) {
        console.error(error);
      }
    }
  },
  setup() {
    const state = reactive({
      // $instance: null,
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
      servStartTime: null,
      servEndTimeShow: false,
      servEndTime: null,
      uploadUrl: process.env.REQ_BASE_URL + "/simple/file/upload",
      uploadHeaders: { "miniapp-token": "" },
      uploadMaximize: 1024 * 1024 * 5,
      imgList: reactive([]),
      // hireProveImgsList: reactive([]),
      wxqrcodeList: reactive([]),
      submitData: {
        id: "",
        ayId: "",
        lastname: "",
        firstname: "",
        hometown: "北京",
        servLocation: "北京",
        mobile: "",
        wxcode: "",
        wxqrcode: "",
        servType: "月嫂",
        rate: 5,
        commentContent: "",
        imgs: "",
        servStartTime: null,
        servEndTime: null,
        // hireProveImgs: "",
        payamountTxt: "",
        email: "",
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
        servLocation: {
          pattern: /\S+/,
          msg: "请选择服务地区",
        },
        servType: {
          pattern: /\S+/,
          msg: "请选择服务类型",
        },
        rate: {
          pattern: /^[12345]$/,
          msg: "请打分",
        },
        commentContent: {
          pattern: /\S+/,
          msg: "请录入评价内容",
        },
      },
      readySubmit: false,
      getUserProfileLoading: false,
      servMinDate: new Date(2000, 0, 1),
      servMaxDate: new Date(),
      formItems: [
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
        {
          show: true,
          num: 1,
        },
      ],
    });

    onMounted(async () => {

      state.$instance = Taro.getCurrentInstance();
      state.submitData.id = state.$instance.router.params.id;
      if (state.submitData.id) {
        API.requestAfterHandle(
          await API.commentDetail(state.submitData.id),
          (data) => {
            state.submitData = data;
            if (state.submitData.servType) {
              state.servTypeArr = [state.submitData.servType];
            }
            if (state.submitData.servLocation) {
              state.servLocationArr = [state.submitData.servLocation];
            }
            if (state.submitData.hometown) {
              state.hometownArr = [state.submitData.hometown];
            }
            if (state.submitData.servStartTime) {
              const servStartTime = new Date(state.submitData.servStartTime);
              state.servStartTime = Util.splitDate(servStartTime);
              state.submitData.servStartTime = Util.formatDate(servStartTime);
            }
            if (state.submitData.servEndTime) {
              const servEndTime = new Date(state.submitData.servEndTime);
              state.servEndTime = Util.splitDate(servEndTime);
              state.submitData.servEndTime = Util.formatDate(servEndTime);
            }
            if (state.submitData.wxqrcode) {
              state.wxqrcodeList.push(
                ...Util.splitImgs(state.submitData.wxqrcode)
              );
            }
            if (state.submitData.imgs) {
              state.imgList.push(...Util.splitImgs(state.submitData.wxqrcode));
            }
            // if (state.submitData.hireProveImgs) {
            //   state.hireProveImgsList.push(...Util.splitImgs(state.submitData.hireProveImgs));
            // }
          }
        );
      } else {
        state.submitData.ayId = state.$instance.router.params.ayId;
        if (state.submitData.ayId) {
          // 渲染阿姨数据
          API.requestAfterHandle(
            await API.ayDetail(state.submitData.ayId),
            (data) => {
              state.submitData.ayId = data.id;
              state.submitData.lastname = data.lastname;
              state.submitData.firstname = data.firstname;
              state.submitData.hometown = data.hometown;
            }
          );
        }
      }
      state.user = Taro.getStorageSync("user");
      state.uploadHeaders["miniapp-token"] = state.user?.token;

      // 如果有阿姨ID，则隐藏某些输入框
      if (state.submitData.ayId) {
        state.formItems[3].show = false;
        state.formItems[4].show = false;
      }
      let num = 1;
      for (let i = 0; i < state.formItems.length; i++) {
        if (state.formItems[i].show) {
          state.formItems[i].num = num++;
        }
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
    const servStartTimeConfirm = (e) => {
      state.submitData.servStartTime =
        e.selectedValue[0] +
        "-" +
        e.selectedValue[1] +
        "-" +
        e.selectedValue[2];
    };
    const servEndTimeConfirm = (e) => {
      state.submitData.servEndTime =
        e.selectedValue[0] +
        "-" +
        e.selectedValue[1] +
        "-" +
        e.selectedValue[2];
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
      if (
        state.formItems[3].show &&
        !state.submitDataValidator.servLocation.pattern.test(
          state.submitData.servLocation
        )
      ) {
        submitWarning(state.submitDataValidator.servLocation.msg);
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
      if (
        !state.submitDataValidator.rate.pattern.test(state.submitData.rate + "")
      ) {
        submitWarning(state.submitDataValidator.rate.msg);
        return false;
      }
      if (
        !state.submitDataValidator.commentContent.pattern.test(
          state.submitData.commentContent
        )
      ) {
        submitWarning(state.submitDataValidator.commentContent.msg);
        return false;
      }
      // 填充 & 校验
      if (state.wxqrcodeList.length > 0) {
        if (
          state.wxqrcodeList.filter((item) => item.status != "success").length >
          0
        ) {
          submitWarning("微信二维码未上传成功，请重试");
          return false;
        }
        state.submitData.wxqrcode = state.wxqrcodeList[0].url;
      }
      if (state.imgList.length > 0) {
        if (
          state.imgList.filter((item) => item.status != "success").length > 0
        ) {
          submitWarning("图片未上传成功，请重试");
          return false;
        }
        state.submitData.imgs = state.imgList.map((item) => item.url).join(",");
      }
      // if (state.hireProveImgsList.length > 0) {
      //   if (
      //     state.hireProveImgsList.filter((item) => item.status != "success")
      //       .length > 0
      //   ) {
      //     submitWarning("雇佣证明未上传成功，请重试");
      //     return false;
      //   }
      //   state.submitData.hireProveImgs = state.hireProveImgsList
      //     .map((item) => item.url)
      //     .join(",");
      // }
      // 校验
      console.log("提交数据：", state.submitData);
      Taro.showLoading({
        title: "提交中",
        mask: true,
      });
      const commentRes1 = API.requestAfterHandle(
        await API.comment(state.submitData)
      );
      Taro.hideLoading();
      if (commentRes1.msg == "ok") {
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

    const imgSuccess = (e) => {
      state.imgList[state.imgList.length - 1].url = JSON.parse(
        e.responseText.data
      ).data;
    };
    // const hireProveImgsSuccess = (e) => {
    //   state.hireProveImgsList[state.hireProveImgsList.length - 1].url =
    //     JSON.parse(e.responseText.data).data;
    // };
    const wxqrcodeSuccess = (e) => {
      state.wxqrcodeList[state.wxqrcodeList.length - 1].url = JSON.parse(
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
      Promise.all([pLogin, pUserProfile]).then(async (values) => {
        API.requestAfterHandle(
          await API.authLogin(values[0], values[1].encryptedData, values[1].iv),
          (data) => {
            Taro.setStorageSync("user", state.user);
            state.user = data;
          }
        );
        state.getUserProfileLoading = false;
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
      servStartTimeConfirm,
      servEndTimeConfirm,
      imgSuccess,
      // hireProveImgsSuccess,
      wxqrcodeSuccess,
    };
  },
};


</script>

<style lang="scss">
.comment {
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


