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
        console.log("IN RENDERVIEW");
        document.getElementById("view").innerHTML='<object type="text/html" data="../loginPage/login-page-template.html"></object>';
    }
<<<<<<< HEAD
};

loginPage.initialize();
>>>>>>> got the login page to show,
=======
};
>>>>>>> got login page to load from loginpage.js instead of index.js; added jquery
