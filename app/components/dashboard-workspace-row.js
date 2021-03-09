Encompass.DashboardWorkspaceRowComponent = Ember.Component.extend({
  tagName: "",
  myAssignment: null,
  myClass: null,

  didReceiveAttrs: function () {
    this.singleAssignment();
    this.singleClass().then((results) => {
      this.set('myClass', results);
    });
  },

  singleAssignment() {
    if (this.linkedAssignments && this.workspace && this.assignments) {
      const assingmentId = this.linkedAssignments[this.workspace.id];
      const assignment = this.assignments.find((a) => {
        return a.id === assingmentId;
      });
      this.myAssignment = assignment;
    }
  },
  singleClass() {
        return this.store
          .findAll('section')
          .then(data => {
            const singleGivenClass = this.assignment.get('section');

            const myFoundClass = data.find(myClass => myClass.id === singleGivenClass.content.id);
            const classIdObj = {};
            classIdObj.classId = myFoundClass.id;

            if(myFoundClass.data.name) {
              classIdObj.className = myFoundClass.data.name;
            }

            console.log(myFoundClass);
            this.set('myClass', classIdObj);
            console.log(classIdObj);
            return myFoundClass;
          });
  }
});
