Template.userIcon.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go('login');
    },
    'click #login-btn': function(event){
        event.preventDefault();  
        FlowRouter.go('login');
  }
});
