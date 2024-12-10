<template>
  <div class="header">
    <h1>欢迎来到我的博客！</h1>
  </div>
  <div class="nav">
    <li><RouterLink to="/" active-class="active">首页</RouterLink></li>
    <li><RouterLink to="/todo" active-class="active">Todo</RouterLink></li>
    <li><RouterLink to="/blog" active-class="active">Blog</RouterLink></li>
    <li><RouterLink to="/picture" active-class="active">Picture</RouterLink></li>
    <li><RouterLink to="/weather" active-class="active">Wearher</RouterLink></li>
    <li><RouterLink to="/shop" active-class="active">Shops</RouterLink></li>
  </div>
  <RouterView></RouterView>
</template>

<script setup lang="ts">


</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header{
  text-align: center;
}
.nav{
  display: flex;
  margin: 20px 500px;
}
.nav li{
  list-style: none;
  margin-left: 10px;
}
a{
  text-decoration-line: none;
  color: black;
}
a:hover{
  color: coral;
}
.nav .active{
  color: coral;
}
</style>
