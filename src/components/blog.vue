<template>
  <div class="header">
    <div class="post-title">
      <ul>
        <li>文章标题</li>
        <li v-for="(post,index) in useBlog.filterPosts" :key="index" 
        @click="detailed(index)" 
        :class="{ active: post.isRead == true }">
          <a>{{post.title}}</a>
          <button @click="removePost(index)" class="delete-but">x</button>
        </li>
      </ul>
    </div>
    <div class="post-text">
      <div v-if="useBlog.filterPosts.length>0">{{useBlog.filterPosts[useBlog.currentIndex]?.text}}</div>
      <a v-else>暂无文章</a>
    </div>
    <div class="function">
      <RouterLink to="/blog/blogedit">
        <button class="edit">管理文章</button>
      </RouterLink>
      <button @click="allPosts">所有文章</button>
      <button @click="isReadPosts">未查看文章</button>
      <button @click="readPosts">已查看文章</button>
      <button class="comment-btn" @click="changeComment">评论</button>
    </div>
  </div>
  <div class="comment" v-show="isActive===true">

  </div>
</template>

<script lang="ts" setup>
import { useBlogStore } from '@/stores/useBlogStore';
import { onMounted, ref } from 'vue';
const useBlog = useBlogStore()
const isActive = ref(false)

const detailed = (index:number) => {
  useBlog.detailedPost(index)
  if(useBlog.posts[index].isRead===false)useBlog.togglePost(index)
}
const removePost = (index:number) => {
  useBlog.removePost(index)
}
const changeComment=()=>isActive.value=!isActive.value
const allPosts = () => useBlog.allPosts()
const readPosts = () => useBlog.filterRead()
const isReadPosts=()=>useBlog.filterIsRead()


onMounted(() => {
  useBlog.loadPostTolocalStorage()
  useBlog.loadCurrentIndex()
})
</script>

<style scoped>
.header{
  width: 700px;
  height: 500px;
  margin: 50px 400px 0 400px;
  display: flex;
}
a{
  text-decoration-line: none;
  color: black;
}
ul{
  display: flex;
  flex-direction: column;
  margin-left: -40px;

}
li{
  list-style: none;
  position: relative;
  height: 40px;
  margin-left: 10px;
  line-height: 40px;
}
.delete-but{
  position: absolute;
  right: 0;
  top:10px;
}
.header .post-title{
  width: 150px;
  height: auto;
  background-color: cornsilk;
}
.header .post-text{
  width: 550px;
  background-color: wheat;
  font-size: 15px;
}
.function{
  width: 100px;
}
.function button{
  height: 50px;
  width: 100%;
}
.active{
  text-decoration-line: line-through;
}
.comment{
  width: 700px;
  height: 200px;
  margin-left: 400px;
  background-color: bisque;
}
.post-text div{
  width: 100%;
  height: 100%;
  margin: 20px;
}
</style>