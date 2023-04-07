<template>
  <!-- html5 语义化 -->
  <main>
    <h1>Todos</h1>
    <div class="prog">
      <progress
        :max="todoStore.todos.length"
        :value="todoStore.completedTodos.length"
      ></progress>
      <p>
        <b>{{ todoStore.completedTodos.length }}</b> out of
        <b>{{ todoStore.todos.length }}</b>
      </p>
    </div>
    <ul class="todos" v-for="todo in todoStore.todos" :key="todo.id">
      <li class="todo">
        <input
          type="checkbox"
          name="isCompleted"
          :id="todo.id"
          :checked="todo.isComplete"
          @change="todoStore.toggleTodo(todo.id)"
        />
        <label
          :for="todo.id"
          :class="todo.isComplete ? 'completed' : 'incomplete'"
        >
          {{ todo.text }}
        </label>
      </li>
    </ul>
    <form class="addForm" @submit.prevent="addTodo">
      <label for="add">Add todo</label>
      <div class="sl">
        <input type="text" name="add" id="add" v-model="currentTodoInp" />
        <button type="submit">Add</button>
      </div>
    </form>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTodoStore } from "../store/todos";
// import { useProductStore } from '../store/products'

let currentTodoInp = ref("");
const todoStore = useTodoStore();
todoStore.initFromLocalStorage(); // 从localStorage 拿出来并更新到store中
// const productStore = useProductStore()
// todoStore.addTodo("十天后面试")
// productStore.fetchAll()

const addTodo = () => {
  const text = currentTodoInp.value;
  currentTodoInp.value = "";

  if (text.trim() !== "") {
    // 去除前后空格
    todoStore.addTodo(text);
  }
};
</script>

<style scoped>
.completed {
  color: hsl(245, 20%, 76%);
  text-decoration: line-through;
}
</style>
