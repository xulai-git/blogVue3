<template>
  <div class="search">
    <input type="text" name="serach-item" placeholder="请输入商品名称" v-model="newItem">
    <button @click="searchShop(newItem)">搜索</button>
    <button @click="allShop">全部商品</button>
  </div>
  <div class="shops" >
    <ul>
      <li class="shop-item" 
      v-if="useShop.filterItems.length"
      v-for="(item,index) in useShop.filterItems"
      :key="index"
      >
      <RouterLink :to="{name:'shopdetail',params:{id:item.id}}">
      <img :src="item.src" loading="lazy">
      <a>{{item.title}}</a>
      <a>{{item.price}}</a>
      </RouterLink>
      <button @click="addCarData(index)">+</button>
      </li>
      <li v-else>暂未搜索到商品</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useShopStore } from '@/stores/useShopStore';
import { onMounted, ref } from 'vue';

const useShop = useShopStore()
const newItem=ref('')

const searchShop = (item:string) => {
  useShop.searchShop(item)
  newItem.value=''
}
const addCarData=(index:number)=>useShop.addCartData(index)
const allShop=()=>useShop.allShop()
onMounted(()=>useShop.loadShops())
</script>

<style scoped>
.shops{
  width: 600px;
  height: 1000px;
  margin-left: 400px;
}
ul{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(7,1fr);
  list-style: none;
  grid-row-gap: 10px;
  grid-column-gap: 25px;
}
.shop-item{
  width: 100%;

}
img{
  width: 100%;
}
.shop-item a{
  color: black;
  display: block;
  width: 100%;
  text-align: center;
  text-decoration-line: none;
}
</style>