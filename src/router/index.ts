
import HomePage from "@/views/HomePage.vue" 
import TodoPage from "@/views/TodoPage.vue"
import BlogPage from "@/views/BlogPage.vue"
import blog from "@/components/blog.vue"
import BlogEdit from "@/components/BlogEdit.vue"
import PicturePage from "@/views/PicturePage.vue"
import PictureDetail from "@/components/PictureDetail.vue"
import Picture from "@/components/Picture.vue"
import Weather from "@/components/Weather.vue"
import WeatherPage from "@/views/WeatherPage.vue"
import shopPage from "@/views/shopPage.vue"
import shops from "@/components/shops.vue"
import shopdetail from "@/components/shopdetail.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Shops from "@/components/shops.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component:HomePage,
  },
  {
    path: '/todo',
    name: 'Todo',
    component:TodoPage,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    children: [
      {
        path: 'blogedit',//这里使用相对路径,而不是 '/blogedit'
        name: 'BlogEdit',
        component:BlogEdit,
      },
      {
        path: '',//表示默认子路劲
        name: 'Post',
        component:blog
      }
      
    ]
  },
  {
    path: '/picture',
    name: 'Picture',
    component: PicturePage,
    children: [
      {
        path: '',
        name: 'Pictures',
        component:Picture
      },
      {
        path: 'pictureDetail/:id',//动态路由，：id将匹配图片id
        name: 'PictureDetail',
        component:PictureDetail,
      }
      
    ]
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherPage,
    children: [
      {
        path: '',
        name: 'weatherDisplay',
        component:Weather,
      },
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: shopPage,
    children: [
      {
        path: '',
        name: 'shops',
        component:shops
      },
      {
        path: 'shopdetail/:id',
        name: 'shopdetail',
        component:shopdetail
      }
    ]
  }
  
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router