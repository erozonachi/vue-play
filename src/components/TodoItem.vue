<template v-if="todos.length">
  <ul>
    <li v-for="todo of todos" :key="todo.id">{{ todo.text }}</li>
  </ul>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todos: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
