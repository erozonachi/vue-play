<template>
  <div class="container">
    <TodoHeader :title="title" />
    <TodoItem :todos="todos" />
    <TodoFooter v-model="todoText" v-on:add-item="addNewTodo"></TodoFooter>
  </div>
</template>

<script>
import uuid from "uuid";
import TodoHeader from "./components/Header.vue";
import TodoItem from "./components/TodoItem.vue";
import TodoFooter from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    TodoItem,
    TodoHeader,
    TodoFooter
  },
  data: () => ({
    todos: [
      { id: uuid(), text: "Buy Vegetables" },
      { id: uuid(), text: "Purchase cheese from the stores" },
      { id: uuid(), text: "Buy Whatever else humans are supposed to eat" }
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
        this.todoText = "";
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
