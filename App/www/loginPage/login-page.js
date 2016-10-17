var loginPage = {
    // LoginPage constructor
    initialize: function() {
        this.renderView();
    },
    // Register submit button event handler
    bindEvents: function() {
        $('#loginButton').on('click', this.onLogin);
    },
    // On Submit button push
    onLogin: function(e) {
        e.preventDefault();
        // Call to authentication API goes here

        // If authentication was successful
        var success = false;

        //Testing stuff
        if ($('#emailBox').val() == "true" && $('#pwBox').val() == "true"){
            success = true;
        }
        if (success){
            $('#view').load("../loginPage/TestPages/successfulLoginTest.html");
        }
        else {
            alert("Unrecognized username or password. Please try again.");
        }
    },

    renderView: function() {
        $('#view').load("../loginPage/login-page.html", function(){
            loginPage.bindEvents();
        });
    }
};