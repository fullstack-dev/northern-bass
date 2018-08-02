//public routes
var exposed = FlowRouter.group({});

exposed.route('/login', {
	name: 'login',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('Login');
	}
});

 exposed.route('/signup', {
	name: 'signup',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});  


// Private routes
var loggedIn = FlowRouter.group({
    triggersEnter: [
        function () {
            var route;
            if (!(Meteor.loggingIn() || Meteor.userId())) {
                route = FlowRouter.current();
                if (route.route.name !== 'login') {
                    Session.set('redirectAfterLogin', route.path);
                }
                return FlowRouter.go('signup');
            }
        }
    ]
});

loggedIn.route('/', {
	name: 'home',
	triggersEnter: [() => {
	    window.scrollTo(0, 0);
	}],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'MainMenu'});
	}
});

loggedIn.route('/set-times', {
	name: 'set times',
	triggersEnter: [() => {
	    window.scrollTo(0, 0);
	}],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'SetDisplay'});
	}
});

loggedIn.route('/map', {
	name: 'map',
	triggersEnter: [() => {
	    window.scrollTo(0, 0);
	}],
	action: function() {
		GAnalytics.pageview();
		BlazeLayout.render('map');
	}
});

loggedIn.route('/info', {
	name: 'info',
	triggersEnter: [() => {
	    window.scrollTo(0, 0);
	}],	
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Info'});
	}
});

loggedIn.route('/food-and-drink', {
	name: 'food-and-drink',
	triggersEnter: [() => {
	    window.scrollTo(0, 0);
	}],	
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Food'});
	}
});

loggedIn.route('/favourites', {
	name: 'favourites',
	triggersEnter: [() => {
	    window.scrollTo(0, 0);
	}],		
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Favourites'});
	}
});

//loggedIn.route('/logout', {
//    name: 'logout',
//    action: function () {
//        return Meteor.logout(function () {
//            return FlowRouter.go(FlowRouter.path('login'));
//        });
//    }
//})

// Admin Routes
var admin = loggedIn.group({
    prefix: '/admin'
}, {
    triggersEnter: [
        function () {
            if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                return FlowRouter.go(FlowRouter.path('MainMenu'));
            }
        }
    ]
});

// Need to add admin routes here IF NEEDED EG:

//admin.route('/users', {
//    name: 'users',
//    action: function () {
//        return BlazeLayout.render('users');
//    }
//});

// Route not found
FlowRouter.notFound = {
    action: function () {
        return BlazeLayout.render('login');
    }
};

// Redirect after login
//Accounts.onLogin(function () {
//    Meteor.logoutOtherClients()
//    Session.set('loggedIn', true);

//    var redirect = Session.get('redirectAfterLogin');
//   if (redirect != null) {
//       if (redirect !== '/login') {
//            return FlowRouter.go(redirect);
//        }
//    }
//});