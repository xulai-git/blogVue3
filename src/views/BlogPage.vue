<template>
  <div>
    <router-view></router-view>
  </div>
  <div class="text">
    <h1>提示这里主小组件</h1>
  </div>
</template>

<script lang="ts" setup>

</script>

<style  scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.text{
  width: 100px;
  height: 100px;
  background-color: rgb(144, 97, 97);
}
</style>