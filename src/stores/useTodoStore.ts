import { defineStore } from "pinia";
interface todo{
  text: string,
  isComplete:boolean
}

export const useTodoStore = defineStore('useTodo', {
  state: () => ({
    todos: [] as todo[],
    pressedKey: '' as string,
    filterTodos:[] as todo [],//创建一个过滤数组来更新过滤后的todos,原数组不变
  }),
  actions: {
    //存本地数据
    saveTodosToLocalStorage() {
      localStorage.setItem('todos',JSON.stringify(this.todos))
    },
    //拿数据
    loadTodosToLocalStorage() {
      const todos = JSON.parse(localStorage.getItem('todos') || '[]')
      this.todos = todos
      this.filterTodos=todos
    },
    //增加数据
    addTodos(text:string) {
      if(text.trim()){
        this.filterTodos.push({ text, isComplete: false })
        this.filterTodos=this.todos
        this.saveTodosToLocalStorage()
      }
    },
    //删除数据
    deleteTodos(index:number) {
      this.filterTodos.splice(index, 1)
      this.filterTodos=this.todos
      this.saveTodosToLocalStorage()
    },
    //切换任务状态
    toggleTode(index:number) {
      this.filterTodos[index].isComplete = !this.filterTodos[index].isComplete
      this.filterTodos=this.todos
      this.saveTodosToLocalStorage()
    },
    //按键触发
    entryAddTodos(event:KeyboardEvent,text:string) {
      this.pressedKey = event.key
      if(this.pressedKey==='Enter') this.addTodos(text)
    },
    //过滤已完成任务
    filterCompleteTodo() {
      this.filterTodos = this.todos.filter((todo) => todo.isComplete)
      if (this.filterTodos.length > 0) this.saveTodosToLocalStorage()
     
    },
    //过滤未完成任务
    filterIsCompleteTodo() {
      this.filterTodos = this.todos.filter((todo) => !todo.isComplete)
      if (this.filterTodos.length > 0) this.saveTodosToLocalStorage()
    },
    //显示所有任务
    showAllTodos() {
      this.filterTodos=this.todos
    }
    //跳转任务


  }
})