<!--
Description
@authors Your Name (you@example.org)
@date    2017-11-17 17:16:36
@version 1.0.0
-->
<template>
  <div class="cartcontrol">
    <transition name="move">
       <div class="cart-decrease" v-show="food.count>0" @click="descreaseCart">
         <span class="inner icon-remove_circle_outline"></span>
       </div>
    </transition>
   
    <div class="cart-count" v-show="food.count>0"> {{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import bus from '../../assets/eventBus'
  export default {
    props:{
      food:{
        type:Object
      }
    },
    methods:{
      addCart(event){   
          if(!event._constructed){
            return;
          }
          if(!this.food.count){
            Vue.set(this.food,'count',1)
            this.food.count = 1
          }else{
            this.food.count++;
          }
          bus.$emit('cart.add',event.target)
      },
      descreaseCart(event){
          if(!event._constructed){
            return;
          }
          if(this.food.count){
            this.food.count--
          }
      }
    }
  }
</script>

<style lang="stylus">
  .cartcontrol
    font-size:0
    .cart-decrease,.cart-add
      display:inline-block
      padding:6px
      transition:all 0.4s linear
      &.move-transition
        opacity:1
        transform:translate3d(0,0,0)
      .inner
        display:inline-block
        line-height:24px
        color:rgb(0,160,220)
        font-size:24px
        transition:all 0.4s linear
        transform:rotate(0)
      &.move-enter,&.move-leave-active
        opacity:0
        transform:translate3d(24px,0,0)
        .inner
          transform:rotate(180deg)
    .cart-count
      display:inline-block
      vertical-align:top
      width:12px
      padding-top:6px
      line-height:24px
      text-align:center
      font-size:10px
      color:rgb(147,153,159)
    .cart-add
      display:inline-block
      padding:6px
      line-height:24px
      color:rgb(0,160,220)
      font-size:24px
</style>

