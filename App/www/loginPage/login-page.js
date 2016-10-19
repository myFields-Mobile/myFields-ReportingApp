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
        $.ajax({
            url: API + "api/authenticate",
            data: JSON.stringify({
                email: $('#emailBox').val(),
                password: $('#pwBox').val()
            }),
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
        // If authentication was successful
        var success = false;
        // If user is admin/agent
        var admin = false;

        //Testing stuff (everything inside here gets replaced with API logic)
        if ($('#emailBox').val() == "admin" && $('#pwBox').val() == "password"){
            success = true;
            admin = true;
        }
        else if ($('#emailBox').val() == "user" && $('#pwBox').val() == "password"){
            success = true;
            admin = false;
        }
        //End of testing stuff
        if (success){
            console.log('User logged in.');
            menuPage.initialize(admin);
        }
        else {
            console.log("Failed login attempt. User: " + $('#emailBox').val() + " at " + Date());
            alert("Unrecognized username or password. Please try again.");
        }
        */
    },

    renderView: function() {
        $('#view').load("../loginPage/login-page.html", function(){
            loginPage.bindEvents();
        });
    }
};