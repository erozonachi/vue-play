<template>
  <div class="container">
    <todo-header title="Awesome Todo App"></todo-header>
    <TodoItem :todos="todos" />
  </div>
</template>

<script>
import uuid from "uuid";
import TodoHeader from "./components/Header";
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "app",
  components: {
    TodoItem,
    "todo-header": TodoHeader
  },
  data: () => ({
    todos: [
      { id: uuid(), text: "Vegetables" },
      { id: uuid(), text: "Cheese" },
      { id: uuid(), text: "Whatever else humans are supposed to eat" }
    ],
    todoText: ""
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
