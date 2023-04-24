<template>
<view class="card-container_col">
  <view class="card-container_row" style="margin-top: -120px">
    <view>
      <AtCard
        title='个人名片'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        :custom-style="{ title: { fontSize: '15px' , height: '15px' } }"
      >
      <view class="card-header">
        <image class="card-avatar" 
          src="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png" 
          height="150px"  
        />
      </view>
      <view class="card-body">
        <view class="card-info">
          <!-- <view class="card-name">张三</view> -->
          <view class="card-title">陈阿姨</view>
          <!-- <view class="card-phone">联系电话:1234567890</view> -->
        </view>
        <view class="card-section">
          <!-- <view class="card-section-title">个人介绍</view> -->
          <view class="card-section-content">
            本人热爱前端开发,熟悉JavaScript、Vue.js等前端框架,有多年Web开发经验。
          </view>
        </view>
      </view>
      </AtCard>

    </view>
    <view>
        <AtCard
        title='个人名片'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        :custom-style="{ title: { fontSize: '15px' , height: '15px' } }"
      >
      <view class="card-header">
        <image class="card-avatar" 
          src="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png" 
          height="150px"  
        />
      </view>
      <view class="card-body">
        <view class="card-info">
          <!-- <view class="card-name">张三</view> -->
          <view class="card-title">陈阿姨</view>
          <!-- <view class="card-phone">联系电话:1234567890</view> -->
        </view>
        <view class="card-section">
          <!-- <view class="card-section-title">个人介绍</view> -->
          <view class="card-section-content">
            本人热爱前端开发,熟悉JavaScript、Vue.js等前端框架,有多年Web开发经验。
          </view>
        </view>
      </view>
    </AtCard>

    </view>
  </view>

  <view>
    <AtCard class = "heyyo">
    <view class="comment-container" >
      <!-- Comment avatar -->
      <AtAvatar 
        circle
        size='small'
        image='https://dummyimage.com/80x80/000/fff'
        >
      </AtAvatar>
      <!-- Comment content -->
      <view class="comment-content">
        <text class="comment-user">阿里古拉：</text>
        <text class="comment-text">这是一条评论内容凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数</text>
      </view>
    </view>
  </AtCard>
  </view>
  <View className='join_container'>
  <text classname='title2'>你好</text>
  
  </View>
</view>

<custom-tab-bar ref="tabbar"></custom-tab-bar>
</template>

<script lang="ts">
import CustomTabBar from "../../components/custom-tab-bar/index.vue";
import 'taro-ui-vue3/dist/style/components/button.scss'

import { AtButton, AtCard, AtAvatar } from 'taro-ui-vue3/lib'

import 'taro-ui-vue3/dist/style/components/button.scss'
import "taro-ui-vue3/dist/style/components/card.scss";

export default {
  name: "My",
  components: {
    "custom-tab-bar": CustomTabBar,
    AtButton,
    AtCard,
    AtAvatar  },
  
  data() {
    return {
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: false,
      isAutoplay: false,
      hasIndicatorDots: true,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180',
      ],
      titleStyle: {
        fontSize: '14px',
        color: '#333'
      },
      titlestyle2:{
        title: {
          display: 'none',
        }
      },
      contentStyle: {
        fontSize: '12px',
        color: '#666'
      }

    }
  },
  computed: {
    cardStyle() {
      return {
        title: this.titleStyle,
        content: this.contentStyle
      }
    }
  },

  setup() {
    
  }

}

</script>
<style lang="scss">
.ayi_card{
  display: flex;
}
// .panel__content {
//   .btn-item {
//     margin-bottom: 20px;

//     &:last-child {
//       margin-bottom: 0;
//       &:first-child {
//         margin-left: 0;
//       }
//     }
//   }
// }

.at-card__header {
  height: 15px;
  line-height: 15px;
}

.heyyo {
  .title {
    display : none;
  }
}
// .card-container_col {
//   // display: flex;
//   // justify-content: center;
//   // align-items: center;
//   // flex-wrap: wrap;
//   display: flex;
//   flex-wrap: wrap;
// }
.card-container_row {
  display: flex;
  // justify-content: center;
  // align-items: center;
  // // height: 100vh;
  // background-color: #ffffff;
  // transform: scale(0.5);
  // transform-origin: left top;
  // width: 200%;
  // height: 200%;
  overflow-x: scroll;
  white-space: nowrap;

  // margin-bottom: 10px;
}
.card-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 16px;
}

.card-header {
  display: flex;
  align-items: center;
}

.comment-container {
  display: flex;
  align-items: center;
}

.comment-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment-content {
  flex: 1;
}

.comment-user {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.comment-text {
  font-size: 14px;
  color: #666;
}

</style>
