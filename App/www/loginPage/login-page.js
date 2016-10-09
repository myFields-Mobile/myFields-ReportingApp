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
