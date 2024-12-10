import { defineStore } from "pinia";

interface item{
  id: number,
  title: string,
  src: string,
  price:number
}
interface cartshop{
  name: string,
  quantity: number,
  price:number,
}
export const useShopStore = defineStore('useShop', {
  state: () => ({
    items: [] as item[],
    filterItems: [] as item[],
    total: 0,//当前购物车的总价格
    number: 1,//默认添加购物车商品数量
    cartData:[] as cartshop[]//购物车数据
  }),
  actions: {
    loadShops() {
      this.items = [
        { id: 0, title: '小米 15', src: './phone/1.jpg', price:4999 },
        { id: 1, title: '三星 w25', src: './phone/2.jpg', price:6999 },
        { id: 2, title: '苹果 16', src: './phone/3.jpg' , price:5999},
        { id: 3, title: 'oppo Find', src: './phone/4.jpg', price:4599 },
        { id: 4, title: '华为 pura70pro', src: './phone/5.jpg', price:7999 },
        { id: 5, title: '荣耀 Magic7', src: './phone/6.jpg', price:4999 },
        { id: 6, title: '苹果 15', src: './phone/7.jpg', price:4999 },
        { id: 7, title: 'vivo x200', src: './phone/8.jpg', price:3999 },
        { id: 8, title: '华为pura70', src: './phone/9.jpg', price:6999 },
        { id: 9, title: '小米 MIX', src: './phone/10.jpg', price:5899 },
        { id: 10, title: '三星 w25', src: './phone/11.jpg',  price:6999},
        { id: 11, title: '一加 13', src: './phone/12.jpg',  price:4499},
        { id: 12, title: '荣耀 Magic7pro', src: './phone/13.jpg', price:5599 },  
      ]
      this.filterItems=this.items
    },
    //搜索商品
    searchShop(item:string) {
      this.filterItems = this.items.filter(e => {
        return  e.title.includes(item)//查询是否包含对应的字符串
      })
    },
    //全部商品
    allShop() {
      this.filterItems = this.items
    },
   
    //增加购物车里的数量 --------笨蛋，直接在数组里面添加一个单价不就行了？
    addNumber(index: number) { 
      const item=this.items.find(e=>e.title===this.cartData[index].name)//找到商品单价
      if (item) {//防止item未定义
        this.cartData[index].quantity++
        this.cartData[index].price += item?.price
        this.tosaveCartData()
      }
    },
    //减少购物车里的数量
    reduceNumber(index:number) {
      const item=this.items.find(e=>e.title===this.cartData[index].name)
      if (this.cartData[index].quantity > 0 && item) {
        this.cartData[index].quantity--
        this.cartData[index].price -= item?.price
        this.tosaveCartData()
      }
      if(this.cartData[index].quantity==0)this.reduceCartData(index)//当数量为0时，自动移除商品
    },
    //存储本地购物车中的数据
    tosaveCartData() {
      localStorage.setItem('cartData',JSON.stringify(this.cartData))
    },
    //取数据
    loadCartData() {
      const data = JSON.parse(localStorage.getItem('cartData') || '[]')
      this.cartData=data
    },
    //添加购物车数据
    addCartData(index: number) {
      //同种商品只会增加数量
      const changeCartData=this.cartData.find(e=>e.name===this.filterItems[index].title)//获取重复的对象,从过滤后的数组中搜值
      if (changeCartData) {
        changeCartData.quantity++
        changeCartData.price+=this.filterItems[index].price
      } else {
        this.cartData.push({
          name: this.filterItems[index].title,
          quantity: this.number,
          price: this.filterItems[index].price,
        })
      }
      this.tosaveCartData()
    },
    //删除购物车数据
    reduceCartData(index:number) {
      this.cartData.splice(index, 1)
      this.tosaveCartData()
    }
  }
})