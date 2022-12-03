import AssignmentList from "./AssignmentList.js";
export default {
  components: {
    AssignmentList,
  },
  template: `
<assignmentList :assignments="inProgressAssignments" title="In Progress"></assignmentList>

<assignmentList :assignments="computedAssignments" title="Completed"></assignmentList>
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
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },
    computedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },
  },
};
