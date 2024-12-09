<template>
  <div class="search">
    <input type="text" placeholder="请输入搜索城市" v-model="newCity">
    <button @click="setCity(newCity)">搜索</button>
  </div>
  <div class="table">
    <h2>{{weather?.city}}</h2>
    <ul v-if="weather?.data?.length">
      <li v-for="city in weather?.data">
        <a v-if="isWeather">{{city.date}}</a>
        <a v-if="isWeather">{{ city.week}}</a>
        <a v-if="isWeather">温度为{{city.tem }}°</a> 
        <a v-if="isWeather">天气{{city.wea}}</a>
        <a v-else-if="useWeather.error">{{useWeather.error}}</a>
        <a v-else>加载中...</a> 
      </li>
    </ul> 
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/useWeatherStore';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
const newCity=ref('')//获取搜获城市名称
const useWeather = useWeatherStore()
const { weather,city } = storeToRefs(useWeather)//解构不丢失响应性数据
const isWeather = computed(() => !!weather.value.city)

const setCity = (city: string) => {
  useWeather.fetchWeather(city)
  newCity.value = '' 
}
onMounted(() =>useWeather.fetchWeather(city.value))
</script>

<style scoped>
.table{
  width: 1000px;
  height: 200px;
  display: flex;
}
ul{
  display: flex;
}
li{
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
</style>