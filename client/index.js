Meteor.startup(function () {
    sAlert.config({
        effect: 'stackslide',
        position: 'bottom',
        timeout: 3000,
        html: false,
        onRouteClose: false,
        stack: true,
        // or you can pass an object:
        // stack: {
        //     spacing: 10 // in px
        //     limit: 3 // when fourth alert appears all previous ones are cleared
        // }
        offset: 60, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
        onClose: _.noop //
        // examples:
        // onClose: function() {
        //     /* Code here will be executed once the alert closes. */
        // }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 1) {
            $(".menu-container").addClass("scrolling");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".menu-container").removeClass("scrolling");
        }
    });
});

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


$.validator.setDefaults({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        email: {
            required: "You must enter an email address",
            email: "You've entered an invalid email address"
        },
        password: {
            required: "You must enter a password",
            minlength: "Your password must be at least {0} characters"
        }
    }
});

