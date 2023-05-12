<template>
    <div class="groupon-product-card">
      <div class="product-image-wrapper">
        <img :src="product.image" class="product-image" alt="">
      </div>
      <div class="product-info-wrapper">
        <div class="product-title">{{ product.title }}</div>
        <div class="product-price">{{ product.price }}</div>
      </div>
    </div>
</template>
  
<style lang="scss">
  .groupon-product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 125px;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }
  
  .groupon-product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .product-image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
  }
  
  .product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    height: 25px;
    padding: 12px;
  }
  
  .product-title {
    font-size: 13px;
    font-weight: 500;
    color: #333;
    text-align: center;
    margin-bottom: 8px;
  }
  
  .product-price {
    font-size: 24px;
    font-weight: 500;
    color: #ff5a5f;
    text-align: center;
  }
  
  </style>
  
<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  