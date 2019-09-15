import Vue from "vue";

export default Vue.component("todo-footer", {
  props: {
    value: String
  },
  template: `
    <div class="footer">
      <form @submit.prevent="$emit(addTodoItem)">
        <input type="text" :value="value" @input="value = $event.target.value" />
        <button type="submit">Add</button>
      </form>
    </div>
  `
});
