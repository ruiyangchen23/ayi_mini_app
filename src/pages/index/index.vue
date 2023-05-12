<template>
  <view class="index">
    <scroll-view class="scroll-view" :scroll-y="true" @scrolltolower="lower">
      <!-- <view class="title" style="background-color: #ef8086;">阿姨到我家</view> -->

      <nut-searchbar class="searchbar1"
        placeholder="找阿姨"
        input-background="#fff"
        v-model="searchParam.keyword"
        @search="search"
        @clear="search"
        style="
          background-color: aliceblue;
        "
      >
        <template v-slot:leftin>
          <nut-icon size="30" name="search2" color="#ef8086"></nut-icon>
        </template>
        <template v-slot:rightin>
          <nut-button type="primary" size="small" @click="search"
            >搜索</nut-button
          >
        </template>
      </nut-searchbar>
      <!-- <div className={classes.unnamed4}>查看更多</div> -->
      <div className={subtitle_1}>雇主评价
        <div className={classes.unnamed4}>查看更多</div>
      </div>
      <button className={classes.primaryButton3}>
        <div className={classes.unnamed6}>写评价</div>
      </button>

      <div className={classes.scroll-container}>
        <div className={classes.rectangle2}>
          <img src="https://img2.baidu.com/it/u=42789776,984461484&fm=253&fmt=auto&app=138&f=JPG?w=500&h=666" className={classes.avatarImage60}>
          <div className={classes.review1}>
            我很遗憾地说，我曾经雇佣的一位月嫂的服务并不尽如人意。她的名字是张丽华，但是她的服务并没有达到我的期望……
          </div>
          <div className={classes.time_loc}>1小时前 | 上海</div>
          <div className={classes.ayi_name}>张丽华</div>
          <div className={classes.stars}>
            <nut-rate active-color="#FFC800"
                    icon-size="10"
                    spacing="2"
                    />
          </div>
        </div>
        <div className={classes.rectangle2}>
          <img src="https://img2.baidu.com/it/u=42789776,984461484&fm=253&fmt=auto&app=138&f=JPG?w=500&h=666" className={classes.avatarImage60}>
          <div className={classes.review1}>
            我很遗憾地说，
          </div>
          <div className={classes.time_loc}>1小时前 | 上海</div>
          <div className={classes.ayi_name}>张丽华</div>
          <div className={classes.stars}>
            <nut-rate active-color="#FFC800"
                    icon-size="10"
                    spacing="2"
                    ></nut-rate>
          </div>
        </div>

        <div className={classes.rectangle2}>
          <img src="https://img2.baidu.com/it/u=42789776,984461484&fm=253&fmt=auto&app=138&f=JPG?w=500&h=666" className={classes.avatarImage60}>

          <div className={classes.review1}>
            我很遗憾地说，我曾经雇佣的一位月嫂的服务并不尽如人意。她的名字是张丽华，但是她的服务并没有达到我的期望……
          </div>
          <div className={classes.time_loc}>1小时前 | 上海</div>
          <div className={classes.ayi_name}>张丽华</div>
          <div className={classes.stars}>
            <nut-rate active-color="#FFC800"
                    icon-size="12"
                    spacing="2"
                    ></nut-rate>
          </div>
        </div>
      </div>
      <!-- <view class="subtitle-bar">
        <h2 class="page-title">阿姨评价</h2>
        <div class="title-right"> 查看更多 </div>
      </view> -->
      <view>
        <div class="scroll-container">
          <div class="product-card-wrapper">
            <groupon-product-card v-for="product in sampleReviewList" :key="product.id" :product="product"></groupon-product-card>
          </div>
        </div>
        </view>  
      <view class="subtitle-bar">
        <div class="page-title">同城阿姨</div>
        <div class="title-right"> 查看更多 </div>
      </view>
      <view>
        <div class="scroll-container">
          <div class="product-card-wrapper">
            <groupon-product-card v-for="ayi in sampleAyiList" :key="ayi.id" :product="ayi"></groupon-product-card>
          </div>
        </div> 
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
// import ReviewCard from "../new_index/review_card.vue"
// import ReviewCardList from "../new_index/review_card_list.vue"
import GrouponProductCard from './card.vue';

const defaultAvatar = process.env.DEFAULT_AVATAR;

export default {
  name: "Index",
  components: {
    "custom-tab-bar": CustomTabBar,
    // ReviewCard,
    // ReviewCardList,
    GrouponProductCard
  },
  setup() {
    const state = reactive({
      dataList: [],
      moreLoading: false,
      hasMore: true,
      searchParam: {
        pageNum: 1,
        pageSize: 20,
        keyword: "",
      },
      searchRes: {},
      servLocationVal: "",
      servLocationValTmp: "",
      servLocationVisible: ref(false),
      servLocationColumns: ref([
        { text: "全部", value: "" },
        ...Constants.locationList(),
      ]),
      sampleReviewList: [
      {
          id: 1,
          image: 'https://picsum.photos/id/1/300/250',
          title: '商品1',
          price: '¥99.00'
      },
        {
          id: 2,
          image: 'https://picsum.photos/id/2/300/250',
          title: '商品2',
          price: '¥199.00'
        },
        {
          id: 3,
          image: 'https://picsum.photos/id/3/300/250',
          title: '商品3',
          price: '¥299.00'
        },
        {
          id: 4,
          image: 'https://picsum.photos/id/1/300/250',
          title: '商品4',
          price: '¥192.00'
        },
        {
          id: 5,
          image: 'https://picsum.photos/id/1/300/250',
          title: '商品1',
          price: '¥99.00'
        },
      ],
      sampleAyiList: [
      {
          id: 1,
          image: 'https://picsum.photos/id/1/300/250',
          title: '商品1',
          price: '¥99.00'
      },
        {
          id: 2,
          image: 'https://picsum.photos/id/2/300/250',
          title: '商品2',
          price: '¥199.00'
        },
        {
          id: 3,
          image: 'https://picsum.photos/id/3/300/250',
          title: '商品3',
          price: '¥299.00'
        },
        {
          id: 4,
          image: 'https://picsum.photos/id/1/300/250',
          title: '商品4',
          price: '¥192.00'
        },
        {
          id: 5,
          image: 'https://picsum.photos/id/1/300/250',
          title: '商品1',
          price: '¥99.00'
        },
        ],

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

  .scroll-view {
    height: 100vh;

    .footer {
      padding: 0 100rpx 20rpx 100rpx;
    }
    position: relative;
  }
  .title-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    color: rgb(0, 0, 0);
    height: 60px;
    font-size: 24px;
    
  }
  .title {
    font-size: 32rpx;
    font-weight: 800;
    padding: 20rpx 20rpx;
  }

  .subtitle-bar {
    display: flex;
    justify-content: left;
    align-items: left;
    background-color: #f5f5f5;
    color: rgb(0, 0, 0);
    height: 30px;
    font-size: 15px;
    margin-top: 10px;
    margin-left: 10px;
    font-family: "黑体", sans-serif;
    .page-title {
      display: flex;
      align-items: center;
      flex-grow: 1; 
    }
    .title-right {
      display: flex;
      align-items: center;
    }
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
          background: #f5f5f5;
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
      background: #f5f5f5;
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
.product-card-wrapper{
  display: flex;
  flex-wrap: nowrap;
}
.groupon-product-card {
  border-radius: 10px;
  width: 200rpx;  
  margin-right: 16px; /* 在商品卡片之间添加 margin-right，使商品卡片之间有间距 */
}

.scroll-container {
  display: flex;
  position: relative;
  left: 0px;
  top: 0px;
  align-items: flex-start;
  overflow-x: scroll; /* 设置 overflow-x 属性为 auto，使容器可以横向滚动 */
  scrollbar-width: none; /* 隐藏滚动条 */
  -ms-overflow-style: none; /* 隐藏滚动条 */
  padding: 10px;
}
.unnamed4 {
  color: #000;
  font-size: 13px;
  font-family: Hiragino Maru Gothic Pro, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', 'Liberation Sans', sans-serif;
  text-decoration: underline;
  position: relative;
  // left: 315px;
  // top: 150px;
  // width: 60px;
  // height: 22px;
  flex-direction: column;
}
.primaryButton3 {
  position: relative;
  left: -140px;
  // // right: 15px;
  // top: 15px;
  width: 89px;
  height: 25px;
  // place-content: center;
  // align-items: center;
  padding: 0 16px;
  border-radius: 5px;
  background-color: #e18683;
  overflow: hidden;
  .unnamed6 {
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
      'Liberation Sans', sans-serif;
    width: min-content;
    height: min-content;
    white-space: nowrap;
    flex-direction: column;
  }

}

.unnamed4 {
  color: #000;
  font-size: 13px;
  font-family: Hiragino Maru Gothic Pro, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', 'Liberation Sans', sans-serif;
  text-decoration: underline;
  // position: relative;
  // left: 315px;
  // top: 120px;
  float: right;
  width: 60px;
  height: 22px;
  flex-direction: column;
}

.subtitle_1 {
  color: #000;
  font-size: 20px;
  font-family: Hiragino Maru Gothic Pro, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', 'Liberation Sans', sans-serif;
  position: relative;
  // left: 20px;
  // top: 143px;
  // width: 106px;
  // height: 22px;
  flex-direction: column;
}

// .scroll_new {
//   position: relative;
//   left: 20px;
//   top: 0px;
//   width: 357px;
//   height: 140px;
//   align-items: flex-start;
//   overflow-x: scroll;
//   // overflow-y: hidden;
// }

.rectangle2 {
  display: grid;
  position: relative;
  // left: 225px;
  // top: 0;
  width: 200px;
  height: 140px;
  outline: solid 1px #000;
  outline-offset: -1px;
  color: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin-right: 16px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  grid-template-areas: 
  "a a b b b"
  "a a d d ."
  "c c c c c"
  "c c c c c"
  "e e e e e";

}

.review1 {
  grid-area: c;
  color: #000;
  font-size: 10px;
  font-family: Hiragino Kaku Gothic ProN, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', 'Liberation Sans', sans-serif;
  // position: relative;
  overflow: hidden;
  // left: 249px;
  // top: 69px;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.ayi_name {
  grid-area: b;
  color: #000;
  font-size: 14px;
  font-family: Hiragino Kaku Gothic StdN, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', 'Liberation Sans', sans-serif;
  // position: static;
  // left: 302px;
  // top: 21px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  flex-direction: column;
}
.stars {
  grid-area: d;
  // position: relative;
  // left: 301px;
  // top: 45px;  
  width: 100%;
  height: 100%;
}

.time_loc {
  grid-area: e;
  color: #808284;
  font-size: 10px;
  font-family: Hiragino Kaku Gothic ProN, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', 'Liberation Sans', sans-serif;
  width: 100%;
  height: 100%;
}

.icon {
  width: 100%;
  height: 100%;
}

.avatarImage60 {
  grid-area: a;
  // position: rlative;
  // left: 248px;
  // top: 13px;
  width: 44px;
  height: 48px;
  overflow: hidden;
  // background-image:/* webpackIgnore: true */ url('/src/assets/avatarImage60.jpg');
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
        background-color: #f5f5f5;
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
          background-color: #f5f5f5;
          color: #fff;
          box-shadow: 0 0 8rpx 0 #f5f5f5;
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
        background-color: #f5f5f5;
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
