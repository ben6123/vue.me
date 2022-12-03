export default {
  template: `
  <section v-show="assignments.length ">
        <h2 class="font-bold mb-2">{{title}}</h2>

    <ul>
        <Assignment v-for="assignment in assignments":key="assignment.id"></Assignment>
    </ul>
    
  </section>
  `,
  props: {
    assignments: Array,
    title: String,
  },
};