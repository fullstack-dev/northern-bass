Template.Signup.events({
    'submit form': function(event){
        event.preventDefault();
    },
    'click #login-btn': function(event){
        event.preventDefault();
        FlowRouter.go('login');
    }
});

Template.Signup.onRendered(function(){
    var validator = $('.signup-form').validate({
        submitHandler: function(event){
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            Accounts.createUser({
                email: email,
                password: password
            }, function(error){
                if(error){
                    if(error.reason == "Email already exists."){
                        validator.showErrors({
                            email: "That email already belongs to a registered user."   
                        });
                    }
                } else {
                    FlowRouter.go('home');
                }
            });
        }
    });
});