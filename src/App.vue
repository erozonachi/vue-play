<template>
  <div class="container">
    <TodoItem :todos="todos" />
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "app",
  components: {
    TodoItem
  },
  data: () => ({
    todos: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  })
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
