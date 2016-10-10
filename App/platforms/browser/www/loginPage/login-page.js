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
};