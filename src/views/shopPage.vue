<template>
  <div>
   <RouterView></RouterView>
  </div>
  <div class="cart">
    <button @click="changeCart">购物车</button>
    <div class="cart-content" v-show="isCart">
      <ul>
        <li v-if="useShop.cartData.length>0" 
        v-for="(item,index) in useShop.cartData"
        :key="index"
        >
          <a>{{item.name}}</a>
          <button @click="reduce(index)">-</button>
          <a>数量：{{item.quantity}}</a>
          <button @click="add(index)">+</button>
          <a>价格：{{item.price}}</a>
          <button @click="reduceCartData(index)">x</button>
        </li>
        <li v-else>购物车是空的</li>
      </ul>
      <div class="foot">
        总价格：{{ totalPrice }}
        <button>去结算</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useShopStore } from '@/stores/useShopStore';

const useShop=useShopStore()
const isCart = ref(false)
const changeCart = () => {
  isCart.value = !isCart.value
  
}
const totalPrice = computed(() => {
  return  useShop.cartData.reduce((sum, item) => {
    return sum + item.price
  },0)
})
const reduceCartData = (index: number) => useShop.reduceCartData(index)
const add = (index: number) => useShop.addNumber(index)
const reduce=(index:number)=>useShop.reduceNumber(index)
onMounted(()=>useShop.loadCartData())
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.cart{
  width: 400px;
  height: 500px;
  position: fixed;
  top:150px;
  right: 100px;
}
.cart-content{
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
ul{
  list-style: none;
}
li{
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(92, 89, 95);
  align-items: center;
}
li a{
  width: 110px;
}
li button{
  width: 20px;
  height: 20px;
}
</style>