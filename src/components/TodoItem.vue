<template>
  <div class="content" v-if="todos.length">
    <div v-for="todo of todos" :key="todo.id">{{ todo.text }}</div>
  </div>
  <div class="content" v-else>No todo found</div>
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
.content {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
}
.content div {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto 0px;
  padding: 10px;
  border-bottom: 1px solid dimgray;
  color: teal;
  font-size: 120%;
  font-weight: 400;
}
</style>
