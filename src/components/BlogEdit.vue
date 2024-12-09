<template>
  <div class="post">
    <input type="text" placeholder="请输入文章标题" v-model="title" maxlength="5">
    <input type="text" placeholder="请输入文章内容" v-model="post">
    <button @click="addPost" >添加</button>
    <RouterLink to="/blog">
      <button>返回</button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/useBlogStore';
import { onMounted, ref } from 'vue';
const post = ref('')
const title=ref('')

const useBlog = useBlogStore()

const addPost = () => {
  useBlog.addPost(title.value,post.value)
  post.value = ''
  title.value=''
}
onMounted(()=>useBlog.loadPostTolocalStorage())
</script>

<style scoped>
.post {
  width: 700px;
  height: 500px;
  background-color: aquamarine;
  margin: 50px 400px;
  display: flex;
}
</style>