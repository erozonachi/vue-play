<template>
  <ul>
    <TodoItem v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id" />
  </ul>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "app",
  components: {
    TodoItem
  },
  data: () => ({
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  })
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
