<template>
    <div class="review-card-list">
      <div class="scroll-container">
        <ReviewCard
          v-for="(review, index) in reviews"
          :key="index"
          :review="review"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ReviewCard from "./review_card.vue";
  
  export default {
    components: {
      ReviewCard,
    },
    props: {
      reviews: {
        type: Array,
        required: true,
      },
    },
  };
</script>
  
<style lang="scss">
.review-card-list {
 width: 100%;
}

.scroll-container {
display: flex;
overflow-x: auto;
padding-bottom: 20px;
white-space: nowrap;
}

.review-card + .review-card {
margin-left: 20px;
}
</style>
  