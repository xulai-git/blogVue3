<template>
  <div class="images">
    <div class="images-item">
      <img v-if="currentImage" :src="currentImage.src">
      <button class="left-button" @click="prevImage" @mouseenter="mouseOver" @mouseleave="mouseLeave"><</button>
      <button class="right-button" @click="nextImage" @mouseenter="mouseOver" @mouseleave="mouseLeave">></button>
      <div class="dot-container">
        <span v-for="(dot,index) in useImage.images" 
        :class="['dot',{active:index==useImage.currentIndex}]"
        @click="getToImage(index)"
        ></span>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { useImageStore } from '@/stores/useImageStore';
import { computed, onMounted, onUnmounted } from 'vue';
const useImage = useImageStore()
const currentImage = computed(() => useImage.images[useImage.currentIndex])

const getToImage=(index:number)=>useImage.getToImage(index)
const prevImage = () => useImage.prevImage()
const nextImage = () => useImage.nextImage()
const mouseOver = () => useImage.mouseOver()
const mouseLeave =() => useImage.mouseLeave()

onMounted(() => {
  useImage.loadImages();
  useImage.carousel()
})
onUnmounted(()=>useImage.stopCarousel())//卸载组件

</script>

<style>
.images{
  width: 500px;
  height: 350px;
}
.images-item{
  margin-left: 500px;
  width: 500px;
  height: 350px;
  position: relative;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.left-button{
  position: absolute;
  z-index: 9992;
  left:0;
  top:50%;
  opacity: .5;
  height: 40px;
  transform: translate(-50%, -50%); 
}
.right-button{
  position: absolute;
  z-index: 9992;
  right: 0;
  top: 50%;
  opacity: .5;
  height: 40px;
  transform: translate(50%, -50%); 
}
.dot-container{
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  z-index: 9991;
}
.dot{
  background-color: rgb(186, 184, 184);
  margin-left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}
.dot-container .active{
  background-color: black;
}
</style>