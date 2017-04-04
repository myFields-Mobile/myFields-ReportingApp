/**
 * Create Account
 * @class
 * @classdesc   Allows a user to create a basic user account then go back to the login page.
 */
var createAccountPage = {

    /**
     * Renders the Create Account page
     */
    initialize: function() {
        this.renderView();
    },

    /** 
     * Register the "Create User" and "Back" button handlers
     */
    bindEvents: function() {
        $('#createUser').on('click', this.onCreateUser);
        $('#backButton').on('click', this.onBack);
    },

    /**
     * On "Create User" button push, attempt to create user
     */
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

    /**
     * Goes back to the login page
     */
    onBack: function(e) {
        loginPage.initialize();
    },

    /** 
     * Loads the Create Account page
     */
    renderView: function() {
        $('#view').load("../createAccount/createAccount.html", function(){
            createAccountPage.bindEvents();
        });
    }
};