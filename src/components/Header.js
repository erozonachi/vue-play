import Vue from "vue";

export default Vue.component("todo-header", {
  props: {
    title: String
  },
  template: `
    <div class="header">
      <h1>{{title}}</h1>
    </div>
  `
});
