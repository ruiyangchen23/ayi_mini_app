<template>
  <view class="index">
    <scroll-view class="scrool-view" :scroll-y="true" @scrolltolower="lower">
      <!-- <view class="title" style="background-color: #ef8086;">阿姨到我家</view> -->
      <nut-searchbar
        placeholder="找阿姨"
        input-background="#fff"
        v-model="searchParam.keyword"
        @search="search"
        @clear="search"
        style="
          background: linear-gradient(
            rgba(236, 128, 126) 0%,
            rgba(236, 128, 126, 0.8) 100%
          );
        "
      >
        <template v-slot:leftin>
          <nut-icon size="14" name="search2" color="#ef8086"></nut-icon>
        </template>
        <template v-slot:rightin>
          <nut-button type="primary" size="small" @click="search"
            >搜索</nut-button
          >
        </template>
      </nut-searchbar>

      <view class="filter bgc-w">
        <view class="left">
          <view
            class="location left-item"
            @click="() => (servLocationVisible = true)"
          >
            <view class="txt">地区</view>
            <nut-icon
              name="rect-down"
              size="16rpx"
              style="padding-left: 8rpx"
            ></nut-icon>
          </view>
          <view class="age left-item" @click="() => (ageVisible = true)">
            <view class="txt">年龄</view>
            <nut-icon
              name="rect-down"
              size="16rpx"
              style="padding-left: 8rpx"
            ></nut-icon>
          </view>
          <view class="exp left-item" @click="() => (servYearVisible = true)">
            <view class="txt">经验</view>
            <nut-icon
              name="rect-down"
              size="16rpx"
              style="padding-left: 8rpx"
            ></nut-icon>
          </view>
          <view class="rate left-item" @click="() => (rateVisible = true)">
            <view class="txt">评分</view>
            <nut-icon
              name="rect-down"
              size="16rpx"
              style="padding-left: 8rpx"
            ></nut-icon>
          </view>
        </view>
        <view class="right">
          <view class="sort right-item" @click="() => (sortVisible = true)">
            <view class="txt">排序</view>
            <nut-icon
              name="rect-down"
              size="16rpx"
              style="padding-left: 8rpx"
            ></nut-icon>
          </view>
        </view>
      </view>

      <view class="picker-list">
        <nut-popup
          class="picker-item"
          position="bottom"
          :safe-area-inset-bottom=true
          @click-overlay="clickOverlay()"
          :visible="servLocationVisible"
        >
          <view class="container">
            <view class="head">
              <view class="title">地区</view>
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
              <view class="cancel" @click="cancelServLocationVal"
                >清除筛选</view
              >
              <view class="confirm" @click="confirmServLocationVal">确定</view>
            </view>
          </view>
          <view class="zw" @click="clickOverlay()"></view>
        </nut-popup>
        <nut-popup
          class="picker-item"
          position="bottom"
          :safe-area-inset-bottom=true
          @click-overlay="clickOverlay()"
          :visible="ageVisible"
        >
          <view class="container">
            <view class="head">
              <view class="title">年龄</view>
            </view>
            <view class="body">
              <view
                v-for="(it, idx) in ageColumns"
                :key="idx"
                :class="{
                  item: true,
                  active: ageVal == it.value,
                }"
                @click="() => (ageVal = it.value)"
              >
                {{ it.text }}
              </view>
            </view>
            <view class="foot">
              <view class="cancel" @click="cancelAgeVal">清除筛选</view>
              <view class="confirm" @click="confirmAgeVal">确定</view>
            </view>
          </view>
          <view class="zw" @click="clickOverlay()"></view>
        </nut-popup>
        <nut-popup
          class="picker-item"
          position="bottom"
          :safe-area-inset-bottom=true
          @click-overlay="clickOverlay()"
          :visible="servYearVisible"
        >
          <view class="container">
            <view class="head">
              <view class="title">经验</view>
            </view>
            <view class="body">
              <view
                v-for="(it, idx) in servYearColumns"
                :key="idx"
                :class="{
                  item: true,
                  active: servYearVal == it.value,
                }"
                @click="() => (servYearVal = it.value)"
              >
                {{ it.text }}
              </view>
            </view>
            <view class="foot">
              <view class="cancel" @click="cancelServYearVal">清除筛选</view>
              <view class="confirm" @click="confirmServYearVal">确定</view>
            </view>
          </view>
          <view class="zw" @click="clickOverlay()"></view>
        </nut-popup>
        <nut-popup
          class="picker-item"
          position="bottom"
          :safe-area-inset-bottom=true
          @click-overlay="clickOverlay()"
          :visible="rateVisible"
        >
          <view class="container">
            <view class="head">
              <view class="title">评分</view>
            </view>
            <view class="body">
              <view
                v-for="(it, idx) in rateColumns"
                :key="idx"
                :class="{
                  item: true,
                  active: rateVal == it.value,
                }"
                @click="() => (rateVal = it.value)"
              >
                {{ it.text }}
              </view>
            </view>
            <view class="foot">
              <view class="cancel" @click="cancelRateVal">清除筛选</view>
              <view class="confirm" @click="confirmRateVal">确定</view>
            </view>
          </view>
          <view class="zw" @click="clickOverlay()"></view>
        </nut-popup>
        <nut-popup
          class="picker-item"
          position="bottom"
          :safe-area-inset-bottom=true
          @click-overlay="clickOverlay()"
          :visible="sortVisible"
        >
          <view class="container">
            <view class="head">
              <view class="title">排序</view>
            </view>
            <view class="body">
              <view
                v-for="(it, idx) in sortColumns"
                :key="idx"
                :class="{
                  item: true,
                  active: sortVal == it.value,
                }"
                @click="() => (sortVal = it.value)"
              >
                {{ it.text }}
              </view>
            </view>
            <view class="foot">
              <view class="cancel" @click="cancelSortVal">清除排序</view>
              <view class="confirm" @click="confirmSortVal">确定</view>
            </view>
          </view>
          <view class="zw" @click="clickOverlay()"></view>
        </nut-popup>
      </view>

      <view class="list">
        <view
          class="it"
          v-for="(it, idx) in dataList"
          :key="idx"
          @click="toAyidetail(it.id)"
        >
          <view class="left">
            <img class="img" :src="it.avatar" />
          </view>
          <view class="right">
            <view class="top">
              <view class="name">
                {{ it.lastname }}{{ it.firstname || "阿姨" }}
              </view>
              <view class="info">
                <view class="info-it servlocation">{{ it.servLocation }}</view>
                <nut-divider direction="vertical" />
                <view class="info-it servtype">{{ it.servType }}</view>
                <nut-divider direction="vertical" />
                <view class="commentnum">{{ it.commentNum || 0 }}条评价</view>
              </view>
              <view class="rate">
                <nut-rate
                  active-color="#FFC800"
                  v-model="it.rate"
                  icon-size="12"
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
      </view>
      <view v-show="moreLoading" class="footer">
        <nut-divider>加载中 ...</nut-divider>
      </view>
      <view v-show="!hasMore" class="footer">
        <nut-divider>到底啦</nut-divider>
      </view>
    </scroll-view>
  </view>

  <custom-tab-bar ref="tabbar"></custom-tab-bar>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from "vue";
import Taro, { useDidShow } from "@tarojs/taro";
import CustomTabBar from "../../components/custom-tab-bar/index.vue";
import API from "../../utils/api";
import Constants from "../../utils/constants";

const defaultAvatar = process.env.DEFAULT_AVATAR;

export default {
  name: "Index",
  components: {
    "custom-tab-bar": CustomTabBar,
  },
  setup() {
    const state = reactive({
      dataList: [],
      moreLoading: false,
      hasMore: true,
      searchParam: {
        pageNum: 1,
        pageSize: 20,
      },
      searchRes: {},
      servLocationVal: "",
      servLocationValTmp: "",
      servLocationVisible: ref(false),
      servLocationColumns: ref([
        { text: "全部", value: "" },
        ...Constants.locationList(),
      ]),
      ageVal: "",
      ageValTmp: "",
      ageVisible: false,
      ageColumns: [
        { text: "全部", value: "" },
        { text: "30及以下", value: "-30" },
        { text: "30-40", value: "30-40" },
        { text: "40-60", value: "40-60" },
        { text: "60及以上", value: "60-" },
      ],
      servYearVal: "",
      servYearValTmp: "",
      servYearVisible: false,
      servYearColumns: [
        { text: "全部", value: "" },
        { text: "2年及以下", value: "-2" },
        { text: "2-5年", value: "2-5" },
        { text: "5年及以上", value: "5-" },
      ],
      rateVal: "",
      rateValTmp: "",
      rateVisible: false,
      rateColumns: [
        { text: "全部", value: "" },
        { text: "一星", value: "0,1" },
        { text: "二到四星", value: "2,3" },
        { text: "四星及以上", value: "4,5" },
      ],
      sortVal: "",
      sortValTmp: "",
      sortVisible: false,
      sortColumns: [
        { text: "默认", value: "" },
        { text: "评分高到低", value: "rateDesc" },
        { text: "评分低到高", value: "rateAsc" },
        { text: "年龄高到低", value: "ageDesc" },
        { text: "年龄低到高", value: "ageAsc" },
        { text: "工作年限高到低", value: "servYearDesc" },
        { text: "工作年限低到高", value: "servYearAsc" },
      ],
    });
    console.log("im here");
    const bindPickerChange = (e) => {
      console.log(e);
    };

    const tabbar = ref<InstanceType<typeof CustomTabBar>>(null);

    useDidShow(() => {
      (tabbar.value as any).current = 0;
      setTimeout(() => {
        updateUnreadCount();
      }, 50);
      search();
    });

    onMounted(() => {
      setInterval(() => {
        updateUnreadCount();
      }, 10 * 1000);
    });

    const updateUnreadCount = () => {
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
      (tabbar.value as any).unreadCount = unreadCount;
    };

    const toAyidetail = (id) => {
      Taro.navigateTo({
        url: "/pages/aydetail/index?id=" + id,
      });
    };

    const lower = async () => {
      if (!state.hasMore || state.moreLoading) {
        return;
      }
      state.moreLoading = true;
      state.searchParam.pageNum++;
      API.requestAfterHandle(await API.search(state.searchParam), (data) => {
        console.log("lower data",data);
        if (!!data.records && data.records.length > 0) {
          data.records.forEach(it => it.avatar = it.avatar || defaultAvatar)
        }
        state.searchRes = data;
        state.dataList.push(...state.searchRes.records);
        handleAfterSearch();
      });
      state.moreLoading = false;
    };

    const search = async () => {
      state.hasMore = true;
      state.moreLoading = true;
      state.searchParam.pageNum = 1;
      state.searchParam.pageSize = 20;
      console.log("searching");
      API.requestAfterHandle(await API.search(state.searchParam), (data) => {
        console.log("search receive", data);
        if (!!data.records && data.records.length > 0) {
          data.records.forEach(it => it.avatar = it.avatar || defaultAvatar)
        }
        state.searchRes = data;
        state.dataList.splice(0, state.dataList.length);
        state.dataList.push(...state.searchRes.records);
        handleAfterSearch();
      });
      state.moreLoading = false;
    };

    const handleAfterSearch = () => {
      if (state.searchRes.current >= state.searchRes.pages) {
        state.hasMore = false;
      }
    };

    //
    const confirmServLocationVal = () => {
      state.servLocationValTmp = state.servLocationVal;
      state.searchParam.servLocation = state.servLocationVal;
      state.servLocationVisible = false;
      search();
    };
    const cancelServLocationVal = () => {
      state.servLocationVal = "";
      state.servLocationValTmp = "";
      state.searchParam.servLocation = "";
      initFilter();
      state.servLocationVisible = false;
      search();
    };
    //
    const confirmAgeVal = () => {
      state.ageValTmp = state.ageVal;
      const split = state.ageVal.split("-");
      state.searchParam.ageStart = split[0];
      state.searchParam.ageEnd = split[1];
      state.ageVisible = false;
      search();
    };
    const cancelAgeVal = () => {
      state.ageVal = "";
      state.ageValTmp = "";
      state.searchParam.ageStart = "";
      state.searchParam.ageEnd = "";
      initFilter();
      state.ageVisible = false;
      search();
    };
    //
    const confirmServYearVal = () => {
      state.servYearValTmp = state.servYearVal;
      const split = state.servYearVal.split("-");
      state.searchParam.servYearStart = split[0];
      state.searchParam.servYearEnd = split[1];
      state.servYearVisible = false;
      search();
    };
    const cancelServYearVal = () => {
      state.servYearVal = "";
      state.servYearValTmp = "";
      state.searchParam.servYearStart = "";
      state.searchParam.servYearEnd = "";
      initFilter();
      state.servYearVisible = false;
      search();
    };
    //
    const confirmRateVal = () => {
      state.rateValTmp = state.rateVal;
      state.searchParam.rate = state.rateVal
        .split(",")
        .filter((item) => !!item);
      state.rateVisible = false;
      search();
    };
    const cancelRateVal = () => {
      state.rateVal = "";
      state.rateValTmp = "";
      state.searchParam.rate = [];
      initFilter();
      state.rateVisible = false;
      search();
    };
    //
    const confirmSortVal = () => {
      state.sortValTmp = state.sortVal;
      state.searchParam.sort = state.sortVal;
      state.sortVisible = false;
      search();
    };
    const cancelSortVal = () => {
      state.sortVal = "";
      state.sortValTmp = "";
      state.searchParam.sort = "";
      initFilter();
      state.sortVisible = false;
      search();
    };

    const clickOverlay = () => {
      state.servLocationVal = state.servLocationValTmp;
      state.ageVal = state.ageValTmp;
      state.servYearVal = state.servYearValTmp;
      state.rateVal = state.rateValTmp;
      state.sortVal = state.sortValTmp;
      state.servLocationVisible = false;
      state.ageVisible = false;
      state.servYearVisible = false;
      state.rateVisible = false;
      state.sortVisible = false;
    };

    const initFilter = () => {
      state.servLocationVal = "";
      state.servLocationValTmp = "";
      state.searchParam.servLocation = "";

      state.ageVal = "";
      state.ageValTmp = "";
      state.searchParam.ageStart = "";
      state.searchParam.ageEnd = "";

      state.servYearVal = "";
      state.servYearValTmp = "";
      state.searchParam.servYearStart = "";
      state.searchParam.servYearEnd = "";

      state.rateVal = "";
      state.rateValTmp = "";
      state.searchParam.rate = [];

      state.sortVal = "";
      state.sortValTmp = "";
      state.searchParam.sort = "";
    };

    return {
      ...toRefs(state),
      tabbar,
      toAyidetail,
      lower,
      search,
      bindPickerChange,
      confirmServLocationVal,
      confirmAgeVal,
      confirmServYearVal,
      confirmRateVal,
      confirmSortVal,
      cancelServLocationVal,
      cancelAgeVal,
      cancelServYearVal,
      cancelRateVal,
      cancelSortVal,
      clickOverlay,
    };
  },
};
</script>

<style lang="scss">
.index {
  font-size: 28rpx;
  height: 100%;
  padding-bottom: 100rpx;

  .scrool-view {
    height: 100vh;

    .footer {
      padding: 0 100rpx 20rpx 100rpx;
    }
  }

  .title {
    font-size: 32rpx;
    font-weight: 600;
    padding: 20rpx 20rpx;
  }

  .filter {
    display: flex;
    justify-content: space-between;
    font-size: 24rpx;
    padding: 10rpx 40rpx;
    background: linear-gradient(
      rgba(236, 128, 126, 0.8) 0%,
      rgba(236, 128, 126, 0.5) 100%
    );
    // font-weight: 550;
    // color: #fff;

    .left {
      display: flex;

      .left-item {
        padding-left: 20rpx;
        display: flex;
        align-items: center;
        position: relative;

        .txt {
          padding-right: 4rpx;
        }

        .list {
          position: absolute;
          top: 30rpx;
          background: #fff;
          width: 100rpx;
          padding: 20rpx;
          line-height: 1.4rem;
          left: -20rpx;
          box-shadow: 0 0 2rpx 0 #909090;
        }
      }

      :first-child {
        padding-left: 0 !important;
      }
    }

    .right {
      .right-item {
        display: flex;
        align-items: center;
        .txt {
          padding-right: 4rpx;
        }
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20rpx 30rpx;
    padding-bottom: 20rpx;

    .it {
      width: 340rpx;
      // height: 200rpx;
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
          width: 80rpx;
          height: 80rpx;
        }
      }

      .right {
        padding-left: 10rpx;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        font-size: 22rpx;

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
            padding-top: 4rpx;
            font-size: 18rpx;
            align-items: center;

            .info-it {
              padding: 4rpx;
            }

            .servlocation {
            }

            .servType {
              flex: 1;
            }

            :first-child {
              border-left: none;
            }
          }

          .rate {
            padding-top: 4rpx;
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding-top: 4rpx;
          height: 30rpx;

          .tag {
            font-size: 18rpx;
          }
        }
      }
    }
  }
}

.nut-divider.nut-divider-vertical {
  margin: 0 4rpx;
}

.popup-bottom {
  box-shadow: 0px -5px 10px -5px #a7a7a7;
}

.picker-list {
  .picker-item {
    text-align: center;

    .nut-overlay {
      background: rgba(0, 0, 0, 0);
    }

    .nut-popup {
      background-color: inherit;
      .container {
        background-color: #fff;
      }

      .zw {
        height: 100rpx;
      }
    }

    .head {
      font-size: 28rpx;
      font-weight: 600;
      height: 100rpx;
      line-height: 100rpx;
      // padding-top: 10rpx;

      .title {
        padding: 0;
      }
    }

    .body {
      display: flex;
      flex-wrap: wrap;
      height: 530rpx;
      box-sizing: content-box;
      overflow: auto;
      align-content: flex-start;

      .item {
        width: 313rpx;
        font-size: 24rpx;
        line-height: 2rem;
        height: 80rpx;
        line-height: 80rpx;
        margin: 10rpx 30rpx;
        border-radius: 40rpx;
        border: 1rpx solid #ccc;
        padding: 0 20rpx;
        box-sizing: border-box;

        &.active {
          background-color: #ea8382;
          color: #fff;
          box-shadow: 0 0 8rpx 0 #ea8382;
        }
      }
    }

    .foot {
      display: flex;
      width: 100%;
      height: 100rpx;
      line-height: 130rpx;
      box-shadow: 0px -1px 1px 0px #ccc;

      .cancel {
        background-color: #ccc;
        flex: 1;
        height: 80rpx;
        line-height: 80rpx;
        margin: 10rpx 20rpx;
        border-radius: 20rpx;
      }

      .confirm {
        background-color: #ea8382;
        color: #fff;
        flex: 1;
        height: 80rpx;
        line-height: 80rpx;
        margin: 10rpx 20rpx;
        border-radius: 10rpx;
      }
    }
  }
}
</style>
