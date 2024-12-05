import { defineStore } from "pinia";

interface Images{
  id: number,
  title: string,
  src:string
}
export const useImageStore = defineStore('useImage', {
  state: () => ({
    images: [] as Images[] ,//存储图片数组
    currentIndex: 0,//当前照片索引
    timer:0,//计时器
  }),
  actions: {
    //本地照片
    loadImages() {
      this.images = [
        { id: 0, title: 'Image 0', src: '/image/1.jpeg' },
        { id: 1, title: 'Image 1', src: '/image/2.jpeg' },
        { id: 2, title: 'Image 2', src: '/image/3.jpeg' },
        { id: 3, title: 'Image 3', src: '/image/4.jpeg' },
        { id: 4, title: 'Image 4', src: '/image/5.jpeg' },
      ]
    },
    //点击下一张
    nextImage() {
      this.currentIndex++
      if(this.currentIndex==this.images.length) this.currentIndex=0
    },
    //点击上一张
    prevImage() {
      this.currentIndex--
      if(this.currentIndex==-1) this.currentIndex=this.images.length-1
    },
    //计时器carousel轮播
    carousel() {
      this.timer=setInterval(this.nextImage,2000)
    },
    //暂停计时器
    stopCarousel() {
      clearInterval(this.timer)
    },
    //移入暂停
    mouseOver() {
      this.stopCarousel()
    },
    //移出继续
    mouseLeave() {
      this.carousel()
    },
    //点击跳转
    getToImage(index:number) {
      this.currentIndex=index
    }
  }
  
})