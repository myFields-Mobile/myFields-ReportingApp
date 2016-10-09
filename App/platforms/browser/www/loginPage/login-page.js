<<<<<<< HEAD
var LoginPage = function(){
    var loginPage = {
        self: null,
        initialize: function() {
            self = this;
            this.bindEvents();
            self.renderView();
        },
        // Register submit button event handler
        bindEvents: function() {
            $('.button').on('click', this.onSubmit)
        },
        // On Submit button push
        onSubmit: function(e) {
            e.preventDefault();
            // Call to authentication API goes here
        },

        renderView: function() {
            $("#view").load("./loginPage/login-page-template.html", function(data) {
                $('#view').html(data);
            });
        }
    }
    loginPage.initialize();
    return loginPage;
}

LoginPage();
=======
var loginPage = {
    // LoginPage constructor
    initialize: function() {
        this.bindEvents();
    },
    // Register submit button event handler
    bindEvents: function() {
        $('.button').on('click', this.onSubmit)
    },
    // On Submit button push
    onSubmit: function(e) {
        e.preventDefault();
        // Call to authentication API goes here
    },

    renderView: function() {
        document.getElementByID("view").innerHTML='<object type="text/html" data="login-page-template.html"></object>';
    }
};

loginPage.initialize();
>>>>>>> got the login page to show,
