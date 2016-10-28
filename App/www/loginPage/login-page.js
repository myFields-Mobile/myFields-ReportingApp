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
            success: function() {
                console.log('User logged in.');
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
        /*
        // TODO: remove testing stuff
        // TODO: might need to get user data (more than just successful login) from database
        */
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