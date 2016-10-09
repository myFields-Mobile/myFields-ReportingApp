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