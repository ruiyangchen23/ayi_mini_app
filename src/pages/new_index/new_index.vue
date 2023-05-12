<template>
<view>
  <ReviewCardList :reviews="sampleReviewList" />
</view>  

<!-- <view class="card-container_col">
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
          <view class="card-title">陈阿姨</view>
        </view>
        <view class="card-section">
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
          <view class="card-title">陈阿姨</view>
        </view>
        <view class="card-section">
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
      <AtAvatar 
        circle
        size='small'
        image='https://dummyimage.com/80x80/000/fff'
        >
      </AtAvatar>
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
 -->
<custom-tab-bar ref="tabbar"></custom-tab-bar>
</template>

<script lang="ts">
import CustomTabBar from "../../components/custom-tab-bar/index.vue";
import 'taro-ui-vue3/dist/style/components/button.scss'

import { AtButton, AtCard, AtAvatar } from 'taro-ui-vue3/lib'

import 'taro-ui-vue3/dist/style/components/button.scss'
import "taro-ui-vue3/dist/style/components/card.scss";
import ReviewCard from './review_card.vue';
import ReviewCardList from './review_card_list.vue';

export default {
  name: "My",
  components: {
    "custom-tab-bar": CustomTabBar,
    AtButton,
    AtCard,
    AtAvatar,
    ReviewCard,
    ReviewCardList},
  
  data() {
    return {
      sampleReviewList: [
          {
            avatar: 'https://dummyimage.com/80x80/000/fff',
            title: '张三',
            content: '这是一个很棒的产品，我非常喜欢！',
          },
          {
            avatar: 'https://dummyimage.com/80x80/000/fff',
            title: '张三',
            content: '这是一个很棒的产品，我非常喜欢！',
          },
          {
            avatar: 'https://dummyimage.com/80x80/000/fff',
            title: '张三',
            content: '这是一个很棒的产品，我非常喜欢！',
          },
          {
            avatar: 'https://dummyimage.com/80x80/000/fff',
            title: '张三',
            content: '这是一个很棒的产品，我非常喜欢！',
          },

        ],
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

</style>
