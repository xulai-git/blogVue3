<template>
  <div class="todo">
    <div class="todo-item">
      <input type="text" v-model="newtodo" maxlength="12" @keydown="keydown" placeholder="请输入信息">
      <button @click="addTodo" >添加</button>
    </div>
    <div class="todos" v-show="useTodo.todos.length>0">
      <ul>
        <li v-if="useTodo.filterTodos.length===0">暂无任务</li>
        <li v-for="(todo,index) in useTodo.filterTodos" 
        :key="index"
        class="todo-list"
        :class="{active:todo.isComplete==true}">
          <input type="checkbox" v-model="todo.isComplete" @click="toggleTodo(index)">
          <div class="text"><label>{{todo.text}}</label></div>
          <button @click="deleteTodo(index)">x</button>
        </li>
        <li class="change-list">
          <button @click="showAllTodos">所有</button>
          <button @click="filterCompleteTodo">已完成</button>
          <button @click="filterIsCompleteTodo">未完成</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/useTodoStore';
import {onMounted, ref } from 'vue';

const useTodo = useTodoStore()
const newtodo=ref('')


const addTodo = () => {
  useTodo.addTodos(newtodo.value)
  newtodo.value=''
}
const deleteTodo = (index:number) => {
  useTodo.deleteTodos(index)
}
const keydown = (event:KeyboardEvent) => {
  useTodo.entryAddTodos(event, newtodo.value)
  if(event.key=='Enter') newtodo.value=''
}
const toggleTodo = (index:number) => {
  useTodo.toggleTode(index)
}
const filterCompleteTodo = () => {
  useTodo.filterCompleteTodo()
}
const filterIsCompleteTodo = () => {
  useTodo.filterIsCompleteTodo()
}
const showAllTodos = () => {
  useTodo.showAllTodos()
}
onMounted(()=>useTodo.loadTodosToLocalStorage())
</script>

<style scoped>
.todo{
  width: 500px;
  margin-left: 600px;
}
.todo-item{
  width: 100%;
  height: 50px;
  display: flex;
}
.todo-item input{
 border-radius: 10px;
 font-size: 20px;
}
.todo-item button{
  margin-left: 10px;
  border-radius: 5px;
}
.todos{
  width: 500px;
}
.todos ul{
  padding: 0;
}
.todo-list{
  list-style: none;
  display: flex;
}
.todos .active{
  color: #949494;
	text-decoration: line-through;
}
.todo-list .text{
  width: 240px;
  font-size: 20px;
}
.todo-list button{
  margin-left: 10px;
  width: 27px;
  border-radius: 50%;
}
.change-list{
  width: 300px;
  display: flex;
  justify-content: space-around;
}
.change-list button{
  margin: 10px;
}
</style>