<template>
  <div class="picture">
    <img v-if="picture?.src" :src="picture.src"/>
  </div>
  <div class="foot">
    <RouterLink to="/picture"><button>返回</button></RouterLink>
  </div>
</template>

<script setup lang="ts">
import { usePictureStore } from '@/stores/usePictureStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const usepicture = usePictureStore()
const route=useRoute()//获取路由参数
const picture = ref()


onMounted(() => {
  const pictureId = +route.params.id
  picture.value = usepicture.pictures.find(pic => pic.id === pictureId)
})
</script>

<style scoped>
.picture{
  width: 800px;
  margin-left:370px;
}
img{
  width: 100%;
}
.foot{
  margin-left: 700px;
}
button{
  width: 100px;
  height: 30px;
}
</style>