<template>
  <div class="review-card">
    <img class="avatar" :src="review.avatar" :alt="review.name" />
    <div class="review-content">
      <h3 class="title">{{ review.title }}</h3>
      <p class="description">{{ review.content }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">

.review-card {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8rpx;
  padding: 16px;
  box-shadow: 0 4rpx 6rpx rgba(0, 0, 0, 0.1);
  margin-bottom: 20rpx;
  max-width: 600rpx; 
  /* font-family: 'Roboto', sans-serif; */
  .avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  object-fit: cover;
}

.review-content {
  display: flex;
  flex-direction: column;
  margin-left: 16rpx;
}

.title {
  font-size: 16rpx;
  font-weight: 500;
  margin: 0;
  margin-bottom: 8rpx;
}


.description {
  font-size: 16rpx;
  margin: 0;
}

}


</style>
