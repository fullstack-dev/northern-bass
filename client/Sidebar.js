Template.Sidebar.events({
    "click #menu-toggle":function(event, template) {
        template.$("#wrapper").toggleClass("toggled");
    },
    "click #navbar-item":function(event, template) {
        template.$("#wrapper").toggleClass("toggled");
    },
    "click #home-btn":function(event, template) {
        template.$("#wrapper").removeClass("toggled");
    },
    "click #menu-close":function(event, template) {
        template.$("#wrapper").removeClass("toggled");
    },
    "click #sidebar-wrapper":function(event, template) {
        template.$("#wrapper").removeClass("toggled");
    }
});