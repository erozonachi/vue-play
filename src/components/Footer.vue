<template>
  <div class="footer">
    <form @submit.prevent="$emit('add-item')">
      <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["value"]
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border-radius: 8px 0;
  background-color: teal;
  padding: 10px;
}
.footer form {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
}
.footer form input,
.footer form button {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: azure;
  color: teal;
  font-size: 120%;
}
input {
  width: 80%;
}
button {
  width: 15%;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}
</style>
