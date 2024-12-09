import { defineStore } from "pinia";

interface picture{
  id:number,
  title: string,
  src:string,
}
export const usePictureStore = defineStore('usePicture', {
  state: () => ({
    pictures: [] as picture[],
    currentIndex: 1,//当前显示图片页码
    firtsIndex:0,//当前列表第一张图片索引
    number:6,//每页显示图片个数
    filterPictures:[]as picture[],
  }),
  actions: {
    locationpictures() {
      this.pictures = [
        { id:0, title: '战双帕弥什', src: '/image/17.png' },
        { id:1, title: '战双帕弥什', src: '/image/8.png' },
        { id:2, title: '战双帕弥什', src: '/image/9.jpg' },
        { id:3, title: '战双帕弥什', src: '/image/10.png'},
        { id:4, title: '战双帕弥什', src: '/image/11.png'},
        { id:5, title:'战双帕弥什',  src:'/image/12.png' },
        { id:6, title:'战双帕弥什',  src:'/image/13.jpg' },
        { id:7, title: '战双帕弥什', src: '/image/14.jpg' },
        { id:8, title: '战双帕弥什', src: '/image/15.png' },
        { id:9, title: '战双帕弥什', src: '/image/16.jpg' },
        { id:10, title: '战双帕弥什', src: '/image/18.png' },
        { id:11, title: '战双帕弥什', src: '/image/19.png' },
        { id:12, title:'战双帕弥什',  src:'/image/20.png' },
      ]
      this.filterPictures = this.pictures
      this.setFilterPicture(this.firtsIndex)
    },
    //根据当前页数，判断加载图片
    setFilterPicture(index:number) {
      this.filterPictures=this.pictures.slice(index,index+this.number)
    },
    //下一页
    nextPage() {
      if (this.currentIndex*this.number<this.pictures.length) {
        this.currentIndex++
        this.firtsIndex += this.number
        this.setFilterPicture(this.firtsIndex)
      }//判断列表至少有一张图片
      
    },
    //上一页
    prevPage() {
      if (this.currentIndex > 1) {
        this.currentIndex--
        this.firtsIndex -= this.number
        this.setFilterPicture(this.firtsIndex)
      } 
    },
    //点击详情页
    detailPicture() {
      
    }
  }
})