// Global variable for authenticated user's JWT token
var userJWT;
// Global variable to store currently logged in user
var loggedInUser;

var loginPage = {
    // LoginPage constructor
    initialize: function() {
        this.renderView();
    },
    // Register submit button event handler
    bindEvents: function() {
        $('#loginButton').on('click', this.onLogin);
        $('#createAccount').on('click', this.onCreateAccount);
    },
    // On Submit button push
    onLogin: function(e) {
        e.preventDefault();
        // Call to authentication API goes here
        $.ajax({
            url: API + "api/authenticate",
            data: {
                email: $('#emailBox').val(),
                password: $('#pwBox').val()
            },
            success: function(data) {
                userJWT = data.token;
                // On successful authentication, get the authenticated user
                $.ajax({
                    url: API + "api/user/me",
                    data: {
                        token: userJWT
                    },
                    success: function(data) {
                        console.log(data.firstName + " " + data.lastName + " logged in.");
                        loggedInUser = data;
                    }
                })
                menuPage.initialize(false);
            },
            error: function(error) {
                console.log(error);
                console.log("Failed login attempt. User: " + $('#emailBox').val() + " at " + Date());
                alert("Unrecognized username or password. Please try again.");
            },
            method: "POST",
            dataType: "json"
        })
        // TODO: remove testing stuff
    },

    onCreateAccount: function(e){
        createAccountPage.initialize();
    },

    renderView: function() {
        $('#view').load("../loginPage/login-page.html", function(){
            loginPage.bindEvents();
        });
    }
};