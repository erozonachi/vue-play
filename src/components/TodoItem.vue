<template>
  <li>{{ todo.text }}</li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
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
