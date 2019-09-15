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
</Script>
