/** Global variable for authenticated user's JWT token */
var oauthToken;
var oauthTokenSecret;

/** Global variable to store currently logged in user */
var loggedInUser;


/**
 * Login
 * @class
 * @classdesc Allows a user to enter username and password, which is authenticated using the database, or create an account.
 */
var loginPage = {

    /**
     * Renders the login page
     */
    initialize: function() {
        this.renderView();
    },

    /** Event handler for "Submit" button */
    bindEvents: function() {
        $('#loginButton').on('click', this.onLogin);
        $('#createAccount').on('click', this.onCreateAccount);
    },

    /** 
     * On "Submit" button push, opens an in-app-browser for the user to log in using Oauth
     * If successful, gets the authenticated user and goes to home page.
     */
    onLogin: function(e) {
        e.preventDefault();
        var browser = window.open(API + "api/authenticate", '_blank', 'location=yes');

        // TODO: capture token and token secret after user logs in

        /*
        $.ajax({
            url: API + "api/authenticate",
            data: {
                email: $('#emailBox').val(),
                password: $('#pwBox').val()
            },
            success: function(data, status, xhr) {
                console.log(xhr.getAllResponseHeaders());
                //userJWT = data.token;

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
                });
                // TODO: change this to user.isAdmin
                menuPage.initialize(false);
            },
            error: function(error) {
                console.log(error);
                console.log("Failed login attempt. User: " + $('#emailBox').val() + " at " + Date());
                alert("Unrecognized username or password. Please try again.");
            },
            rejectUnauthorized: false,
            method: "GET",
            dataType: "json"
        })
        */
        // TODO: remove testing stuff
    },

    /**
     * Initializes the create account page
     */
    onCreateAccount: function(e){
        createAccountPage.initialize();
    },

    /**
     * Loads the login page
     */
    renderView: function() {
        $('#view').load("../loginPage/login-page.html", function(){
            loginPage.bindEvents();
        });
    }
};