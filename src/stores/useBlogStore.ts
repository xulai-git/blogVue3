import { defineStore } from "pinia";

interface post{
  title: string,
  text: string,
  isRead: boolean,
  id:number,
}
export const useBlogStore = defineStore('useBlog', {
  state: () => ({
    posts: [] as post[],
    filterPosts: [] as post[],
    currentIndex: 0,//当前文章的索引
    id:0
  }),
  actions: {
    //本地保存数据
    savePostTolocalStorage() {
      localStorage.setItem('posts', JSON.stringify(this.posts))
    },
    //本地提取数据
    loadPostTolocalStorage() {
      const posts = JSON.parse(localStorage.getItem('posts') || '[]')
      if (Array.isArray(posts)) {
        this.posts = posts
        this.filterPosts=posts
      } else {
        this.posts=[]
      }
    },
    //本地保存当前索引
    saveCurrentIndex() {
      localStorage.setItem('currentIndex',JSON.stringify(this.currentIndex))
    },
    //本地提取当前索引
    loadCurrentIndex() {
      const index = JSON.parse(localStorage.getItem('currentIndex') || '0')
      this.currentIndex=index
    },
    //添加文章
    addPost(title:string,text:string) {
      if(text.trim()&&title.trim()){
        this.posts.push({ title, text, isRead: false, id: Date.now() }) 
        this.filterPosts = [...this.posts]
        this.savePostTolocalStorage()
      }
    },
    //删除文章
    removePost(index:number) {
      this.posts.splice(index, 1)
      this.filterPosts = [...this.posts]
      this.savePostTolocalStorage()
    },
    //点击详情页面
    detailedPost(index:number) {
      this.currentIndex = index
      this.saveCurrentIndex()
    },
    //切换阅读状态
    togglePost(index:number) {
      this.posts[index].isRead = !this.posts[index].isRead
      this.filterPosts = [...this.posts]
      this.savePostTolocalStorage()
    },
    //过滤未阅读文章
    filterIsRead(){
      this.filterPosts = this.posts.filter((item) => !item.isRead)
      this.savePostTolocalStorage()
    },
    //过滤已阅读文章
    filterRead() {
      this.filterPosts = this.posts.filter((item) => item.isRead)
      this.savePostTolocalStorage()
    },
    //所有文章
    allPosts() {
      this.filterPosts=this.posts
    }
  }
})