<template>
  <div class="container">
    <TodoHeader :title="title" />
    <TodoItem :todos="todos" />
    <todo-footer v-model="todoText" @addTodoItem="addNewTodo"></todo-footer>
  </div>
</template>

<script>
import uuid from "uuid";
import TodoHeader from "./components/Header.vue";
import TodoItem from "./components/TodoItem.vue";
import TodoFooter from "./components/Footer";

export default {
  name: "app",
  components: {
    TodoItem,
    TodoHeader,
    "todo-footer": TodoFooter
  },
  data: () => ({
    todos: [
      { id: uuid(), text: "Vegetables" },
      { id: uuid(), text: "Cheese" },
      { id: uuid(), text: "Whatever else humans are supposed to eat" }
    ],
    todoText: "",
    title: "Awesome Todo App"
  }),
  methods: {
    addNewTodo: function() {
      if (this.todoText) {
        this.todos = this.todos.concat([
          {
            id: uuid(),
            text: this.todoText
          }
        ]);
      }
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
}
</style>
