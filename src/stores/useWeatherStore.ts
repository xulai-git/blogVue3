import axios from "axios";
import { defineStore } from "pinia";
interface weatherData{
  city: string,
  data?: Array<{
    day: string,
    date: string,
    week: string,
    tem: string,
    wea:string
  }>
}
export const useWeatherStore = defineStore('useWeather', {
  state: () => ({
    city: '温州',//默认城市
    error: '' as string,
    weather: {
      city: '',
      data:[],
    } as weatherData
  }),
  actions: {
    //七日天气
    async fetchWeather(city:string) {
      const url=`http://gfeljm.tianqiapi.com/api?unescape=1&version=v91&appid=68825816&appsecret=3BvQsizm&ext=&city=${city}`
      try {
        const response = await axios.get(url)
        this.weather=response.data
      } catch (error) {
        this.error='无法获取天气数据'
      }
    },
    //判断用户输入错误城市
    setCity(city:string) {
      // if(city===){
      //   this.city = city
      //   this.fetchWeather(this.city)
      // }
    }
   
  }
})