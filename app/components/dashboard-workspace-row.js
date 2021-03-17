Encompass.DashboardWorkspaceRowComponent = Ember.Component.extend({
  tagName: "",
  myAssignment: null,

  didReceiveAttrs: function () {
    this.singleAssignment();
  },

  singleAssignment() {

    if (this.linkedAssignments && this.workspace && this.assignments) {
      const assingmentId = this.linkedAssignments[this.workspace.id];
      const assignment = this.assignments.find((a) => {
        return a.id === assingmentId;
      });

      this.myAssignment = assignment;
      console.log('single assignment',this.myAssignment);
    }
  },
});
