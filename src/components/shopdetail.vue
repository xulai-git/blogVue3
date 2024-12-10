<template>
  <div class="shop">
    <RouterLink to="/shop"><button>返回</button></RouterLink>
    <div class="item">
      <img v-if="item?.src" :src="item.src">
      <a v-if="item?.title">{{item.title}}</a>
      <h2 v-if="item?.price">{{item.price}}</h2>
      <button @click="addCarData(index)">加入购物车</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShopStore } from '@/stores/useShopStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const useShop = useShopStore()
const route = useRoute()
const item = ref()
const index=ref()
const addCarData=(index:number)=>useShop.addCartData(index)

onMounted(() => {
  const itemId = +route.params.id
  index.value=useShop.items.findIndex(e=>e.id===itemId)//获取对应数组的索引
  item.value=useShop.items.find(e=>e.id===itemId)//搜索对应的唯一id
})
</script>

<style scoped>
.shop{
  width: 500px;
  margin-left: 500px;
}
.item{
  display: flex;
  flex-direction: column;
}
img{
  width: 100%;
}
</style>