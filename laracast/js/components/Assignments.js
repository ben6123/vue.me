import AssignmentList from "./AssignmentList.js";
export default {
  components: {
    AssignmentList,
  },
  template: `
  <section class="space-y-6">
<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

<AssignmentList :assignments="filters.Completed" title="Completed"></AssignmentList>
</section>
`,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter 4", complete: false, id: 2 },
        { name: "Turn in Assignment", complete: false, id: 3 },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        Completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },
};
