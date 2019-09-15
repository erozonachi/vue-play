<template>
  <div class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  props: {
    title: String
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border-radius: 8px 0;
  background-color: teal;
  color: azure;
  padding: 10px 0;
}
</style>
