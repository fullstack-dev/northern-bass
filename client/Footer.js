Template.setTimeFooterNavItem.helpers({
    activeClass: function () {
      // make this re-render on change, even if we don't use var
      var routeName = FlowRouter.getRouteName();
      if (FlowRouter.current().path === this.href) {
        return 'active';
      }
    }
});

Template.mapFooterNavItem.helpers({
    activeClass: function () {
      // make this re-render on change, even if we don't use var
      var routeName = FlowRouter.getRouteName();
      if (FlowRouter.current().path === this.href) {
        return 'active';
      }
    }
});
Template.favFooterNavItem.helpers({
    activeClass: function () {
      // make this re-render on change, even if we don't use var
      var routeName = FlowRouter.getRouteName();
      if (FlowRouter.current().path === this.href) {
        return 'active';
      }
    }
});

Template.infoFooterNavItem.helpers({
    activeClass: function () {
      // make this re-render on change, even if we don't use var
      var routeName = FlowRouter.getRouteName();
      if (FlowRouter.current().path === this.href) {
        return 'active';
      }
    }
});