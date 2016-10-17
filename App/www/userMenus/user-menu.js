var menuPage = {
    // menuPage constructor
    initialize: function(isAdmin) {
        this.isAdmin = isAdmin;
        this.renderView();
    },
    // registers event handlers
    bindEvents: function() {
        $('#reportButton').on('click', this.onReport);
        $('#logoutButton').on('click', this.onLogout);
        if (this.isAdmin){
            $('#reviewReportButton').on('click', this.onReviewReport);
        }
    },
    // event handler for report button
    onReport: function(e) {
        e.preventDefault();
    },
    // event handler for logout button
    onLogout: function(e) {
        e.preventDefault();
        // TODO: probably need to do some cleanup in here, but for now just show login page
        console.log("User logged out.");
        loginPage.initialize();
    },
    // event handler for review report button
    onReviewReport: function(e) {
        e.preventDefault();
    },
    // renders the page and calls bindEvents
    renderView: function() {
        if (this.isAdmin){
            $('#view').load("../userMenus/specialistUserMenu.html", function() {
                menuPage.bindEvents();
            });
        }
        else {
            $('#view').load("../userMenus/normalUserMenu.html", function() {
                menuPage.bindEvents();
            });
        }
    }
};