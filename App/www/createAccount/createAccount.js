var createAccountPage = {
    // LoginPage constructor
    initialize: function() {
        this.renderView();
    },
    // Register submit button event handler
    bindEvents: function() {
        $('#createUser').on('click', this.onCreateUser);
        $('#backButton').on('click', this.onBack);
    },
    // On Submit button push
    onCreateUser: function(e) {
        e.preventDefault();
        console.log("Attempting to create User");
        // Call to create user
        // TODO: should probably do some input validation here
        $.ajax({
            url: API + "api/user/create",
            data: {
                email: $('#emailBox').val(),
                password: $('#pwBox').val(),
                firstName: $('#firstNameBox').val(),
                lastName: $('#lastNameBox').val(),
                phone: $('#phoneNumberBox').val()
            },
            success: function() {
                console.log('User created.');
                loginPage.initialize();
            },
            error: function(error) {
                console.log(error);
            },
            method: "POST",
            dataType: "json"
        })
    },
    // Goes back to login page
    onBack: function(e) {
        loginPage.initialize();
    },

    renderView: function() {
        $('#view').load("../createAccount/createAccount.html", function(){
            createAccountPage.bindEvents();
        });
    }
};