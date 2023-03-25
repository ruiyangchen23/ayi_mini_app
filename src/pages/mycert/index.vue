<template>
  <view v-if="submitData" class="aycert">
    <view class="row">
      <view class="title">1) 姓 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.lastname.pattern.test(submitData.lastname)
        "
        class="err"
        >{{ submitDataValidator.lastname.msg }}</view
      > -->
      <view class="content">
        <!-- <nut-input v-model="submitData.lastname" placeholder="请输入姓氏" /> -->
        {{ submitData.lastname }}
      </view>
    </view>
    <view class="row">
      <view class="title">2) 名 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.firstname.pattern.test(submitData.firstname)
        "
        class="err"
        >{{ submitDataValidator.firstname.msg }}</view
      > -->
      <view class="content">
        <!-- <nut-input v-model="submitData.firstname" placeholder="请输入名字" /> -->
        {{ submitData.firstname }}
      </view>
    </view>
    <view class="row">
      <view class="title">3) 出生年份 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.age.pattern.test(submitData.age)
        "
        class="err"
        >{{ submitDataValidator.age.msg }}</view
      > -->
      <view class="content">
        <!-- <nut-input v-model="submitData.age" placeholder="请输入年龄" /> -->
        {{ submitData.birthDate }}
      </view>
    </view>
    <view class="row">
      <view class="title">3) 家乡 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.hometown.pattern.test(submitData.hometown)
        "
        class="err"
        >{{ submitDataValidator.hometown.msg }}</view
      > -->
      <view class="content">
        <!-- <nut-cell
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
        </nut-picker> -->
        {{ submitData.hometown }}
      </view>
    </view>
    <view class="row">
      <view class="title">4) 服务地区 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.servLocation.pattern.test(
            submitData.servLocation
          )
        "
        class="err"
        >{{ submitDataValidator.servLocation.msg }}</view
      >
      -->
      <view class="content">
        <!--  <nut-cell
          :title="submitData.servLocation || '服务地区'"
          @click="
            () => {
              servLocationShow = true;
            }
          "
        ></nut-cell> -->
        <!-- <nut-picker
          v-model="servLocationArr"
          v-model:visible="servLocationShow"
          :columns="servLocationColumns"
          title="服务地区"
          @confirm="servLocationConfirm"
        >
        </nut-picker> -->
        {{ submitData.servLocation }}
      </view>
    </view>
    <view class="row">
      <view class="title">5) 服务起始年份 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.servYear.pattern.test(
            submitData.servYear
          )
        "
        class="err"
        >{{ submitDataValidator.servYear.msg }}</view
      > -->
      <view class="content">
        <!-- <nut-input v-model="submitData.servYear" placeholder="请输入服务年限" /> -->
        {{ submitData.servStartYear }}
      </view>
    </view>
    <view class="row">
      <view class="title">6) 服务类型 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.servType.pattern.test(
            submitData.servType
          )
        "
        class="err"
        >{{ submitDataValidator.servType.msg }}</view
      > -->
      <view class="content">
        <!-- <nut-cell
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
        </nut-picker> -->
        {{ submitData.servType }}
      </view>
    </view>
    <view class="row">
      <view class="title">7) 自我介绍 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.info.pattern.test(
            submitData.info
          )
        "
        class="err"
        >{{ submitDataValidator.info.msg }}</view
      > -->
      <view class="content">
        <!-- <nut-textarea v-model="submitData.info" limit-show max-length="200" /> -->
        {{ submitData.info }}
      </view>
    </view>
    <view class="row">
      <view class="title">8) 图片展示</view>
      <!-- <view class="desc descc-h">
        单张图片大小不能大于5M
      </view> -->
      <view class="content">
        <!-- <nut-uploader
          :url="uploadUrl"
          v-model:file-list="imgsList"
          maximum="3"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="imgsSuccess"
        ></nut-uploader> -->
        <img
          v-for="(it, idx) in submitData.imgsList"
          :key="idx"
          :src="it"
          class="img"
        />
      </view>
    </view>
    <view class="row">
      <view class="title">9) 身份证 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.idnum.pattern.test(
            submitData.idnum
          )
        "
        class="err"
        >{{ submitDataValidator.idnum.msg }}</view
      > -->
      <!-- <view class="content">
        <nut-input
          v-model="submitData.idnum"
          placeholder="请输入阿姨的身份证号码"
        />
      </view> -->
      {{ submitData.idnum }}
    </view>
    <view class="row">
      <view class="title">10) 身份证照片</view>
      <!-- <view class="desc descc-h">
        单张图片大小不能大于5M
      </view> -->
      <view class="content">
        <!-- <nut-uploader
          :url="uploadUrl"
          v-model:file-list="idnumImgsList"
          maximum="2"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="idnumImgsSuccess"
        ></nut-uploader> -->
        <view
          v-if="idnumImgs && idnumImgs.length > 0"
          @click="showIdnumImgs"
          class="showIdnumImgs"
        >
          显示身份证图片
        </view>
        <view v-else>无</view>
      </view>
    </view>
    <view class="row">
      <view class="title">11) 联系方式 <view class="require">*</view></view>
      <!-- <view
        v-show="
          readySubmit &&
          !submitDataValidator.contact.pattern.test(submitData.mobile) &&
          !submitDataValidator.contact.pattern.test(submitData.wxcode) &&
          wxqrcodeList.length < 1
        "
        class="err"
      >
        {{ submitDataValidator.contact.msg }}
      </view> -->
      <view class="content">
        <view class="sub-row">
          <view class="sub-title">11.1) 手机号码</view>
          <view class="sub-content">
            <!-- <nut-input v-model="submitData.mobile" placeholder="手机号码" /> -->
            {{ submitData.mobile }}
          </view>
        </view>
        <view class="sub-row">
          <view class="sub-title">11.2) 微信号</view>
          <view class="sub-content">
            <!-- <nut-input v-model="submitData.wxcode" placeholder="微信号" /> -->
            {{ submitData.wxcode }}
          </view>
        </view>
        <view class="sub-row">
          <view class="sub-title">11.3) 微信二维码</view>
          <!-- <view class="desc descc-h">
            单张图片大小不能大于5M
          </view> -->
          <view class="sub-content">
            <!-- <nut-uploader
              :url="uploadUrl"
              maximum="1"
              v-model:file-list="wxqrcodeList"
              :headers="uploadHeaders"
              :with-credentials="true"
              :maximize="uploadMaximize"
              @success="wxqrcodeSuccess"
            ></nut-uploader> -->
            <img class="img" :src="submitData.wxqrcode" />
          </view>
        </view>
      </view>
    </view>
    <view class="row">
      <view class="title">12) 上传头像</view>
      <!-- <view class="desc descc-h">
        单张图片大小不能大于5M
      </view> -->
      <view class="content">
        <!-- <nut-uploader
          :url="uploadUrl"
          v-model:file-list="avatarList"
          maximum="1"
          :headers="uploadHeaders"
          :with-credentials="true"
          :maximize="uploadMaximize"
          @success="avatarSuccess"
        ></nut-uploader> -->
        <img class="img" :src="submitData.avatar" />
      </view>
    </view>
    <nut-watermark
      v-if="submitData.approvalStatus == 0"
      class="mark1"
      z-index="1"
      content="待审核"
    ></nut-watermark>
    <nut-watermark
      v-if="submitData.approvalStatus == 1"
      class="mark1"
      z-index="1"
      content="审核通过"
    ></nut-watermark>
    <view
      v-if="submitData.approvalStatus == 1"
      class="row btn"
      @click="toAycert"
    >
      <view class="submit nut-button--primary">修改信息</view>
    </view>
    <nut-watermark
      v-if="submitData.approvalStatus == 2"
      class="mark1"
      z-index="1"
      content="审核不通过，需修改后重新提交"
    ></nut-watermark>
    <view
      v-if="submitData.approvalStatus == 2"
      class="row btn"
      @click="toAycert"
    >
      <view class="submit nut-button--primary">更正信息</view>
    </view>
  </view>
  <view v-else class="aycert no-cert">
    <view class="txt">暂无注册信息</view>
    <view class="btn" @click="toAycert1">快去注册吧</view>
  </view>

  <nut-popup v-model:visible="idnumImgsVisiable" class="imgs-popup">
    <swiper indicator-dots="true" style="width: 600rpx; height: 600rpx">
      <swiper-item v-for="(it, idx) in idnumImgs" :key="idx">
        <img
          style="width: 100%; height: 100%; border-radius: 30rpx"
          :src="it"
        />
      </swiper-item>
    </swiper>
  </nut-popup>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import Taro from "@tarojs/taro";
import API from "../../utils/api";

export default {
  components: {},
  setup() {
    const state = reactive({
      $instance: null,
      user: null,
      submitData: null,
      readySubmit: false,
      getUserProfileLoading: false,
      idnumImgsVisiable: false,
      idnumImgs: [],
      idnumImgPrefix: process.env.REQ_BASE_URL + "/simple/my/certIdnumImgs/",
    });

    onMounted(async () => {
      state.user = Taro.getStorageSync("user");
      const myCertRes1 = API.requestAfterHandle(await API.myCert());
      if (myCertRes1.msg == "ok") {
        state.submitData = myCertRes1.data;
        if (state.submitData) {
          state.submitData.imgsList = state.submitData.imgs
            ? state.submitData.imgs.split(",")
            : [];
          if (state.submitData.idnumImgs) {
            const idnumImgs = state.submitData.idnumImgs
              .split(",")
              .map(
                (it) =>
                  state.idnumImgPrefix + it.substring(it.lastIndexOf("/") + 1)
              );
            for (let i = 0; i < idnumImgs.length; i++) {
              API.downloadImg(idnumImgs[i]).then(
                (res) => (state.idnumImgs[i] = res.tempFilePath)
              );
            }
          }
        }
      }

      API.requestAfterHandle(await API.readAll("6"));
      API.requestAfterHandle(await API.countUnread(), (data) => {
        Taro.setStorageSync("unreadCount", data || []);
      });
    });

    const toAycert = () => {
      Taro.navigateTo({
        url: "/pages/aycert/index?certId=" + state.submitData?.id,
      });
    };

    const toAycert1 = () => {
      Taro.redirectTo({
        url: "/pages/aycert/index?type=注册",
      });
    };

    const showIdnumImgs = () => {
      state.idnumImgsVisiable = true;
    };

    return {
      ...toRefs(state),
      toAycert,
      toAycert1,
      showIdnumImgs,
    };
  },
};
</script>

<style lang="scss">
.aycert {
  margin: 0 30rpx 30rpx 30rpx;
  padding-bottom: 30rpx;

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

      .img {
        width: 120rpx;
        height: 120rpx;
      }
    }

    &.btn {
      background: rgba($color: #000000, $alpha: 0);
      padding: 0;

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

  &.no-cert {
    margin-top: 30rpx;
    text-align: center;

    .txt {
      height: 300rpx;
      line-height: 300rpx;
      font-size: 26rpx;
      color: #ccc;
      background-color: #fff;
      border-radius: 30rpx;
    }

    .btn {
      margin-top: 30rpx;
      height: 70rpx;
      line-height: 70rpx;
      background-color: #ee8283;
      font-size: 28rpx;
      color: #fff;
      border-radius: 30rpx;
    }
  }
}

.nut-popup {
  border-radius: 30rpx;
  overflow: hidden;
}

.showIdnumImgs {
  background-color: #ee8283;
  padding: 8rpx 16rpx;
  font-size: 22rpx;
  color: #fff;
  border-radius: 6rpx;
  display: inline;
}
</style>
