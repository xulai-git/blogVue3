
import HomePage from "@/views/HomePage.vue" 
import TodoPage from "@/views/TodoPage.vue"
import { createRouter, createWebHashHistory } from "vue-router"
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
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router