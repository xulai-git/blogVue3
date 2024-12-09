<template>
  <div class="picture-content">
    <ul>
      <li v-for="(picture,index) in usePicture.filterPictures"
      :key="index">
      <RouterLink :to="{name:'PictureDetail',params:{id:picture.id}}">
        <img :src="picture.src" loading="lazy"/>
        <a class="pic-a">{{picture.title}}</a>
      </RouterLink>
      </li>
    </ul>
    <div class="page">
      <button @click="prevPage">上一页</button>
      <a>0{{usePicture.currentIndex}}</a>
      <button @click="nextPage">下一页</button>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { usePictureStore } from '@/stores/usePictureStore';
import { onMounted } from 'vue';
const usePicture = usePictureStore()
const prevPage = () => usePicture.prevPage()
const nextPage=()=>usePicture.nextPage()
onMounted(()=>usePicture.locationpictures())
</script>

<style scoped>
.picture-content{
  margin-left: 330px;
  width: 1000px;
  height: 1000px;
}
ul{
  display:grid;
  grid-template-columns: repeat(2,1fr);/* 创建2列*/
  grid-template-rows: repeat(3,1fr);/*创建3行*/
  gap:6px;
  width: 800px;
  height: 700px;
  overflow: hidden;
}
li{
  list-style: none;
  position: relative;
  height: 230px;
}
img{
  width: 100%;
  height: 100%; 
  z-index: 200;
}
li .pic-a{
  background-color: #fff;
  width: 100%;
  height: 40px;
  position: absolute;
  z-index: 9999;
  bottom: 0;
  left: 0;
  opacity: .5;
  text-align: center;
  line-height: 38px;
  color: black;
}
li:hover .pic-a{
  opacity: 0;
  transition: all .3s;
}
.page{
  margin-left: 370px;
}
.page button{
  margin: 5px;
}
</style>