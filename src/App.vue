<template>
  <div class="header">
    <h1>欢迎来到我的博客！</h1>
  </div>
  <div class="nav">
    <li><RouterLink to="/">首页</RouterLink></li>
    <li><RouterLink to="/todo">功能页面</RouterLink></li>
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

</style>
