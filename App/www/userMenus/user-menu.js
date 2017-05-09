/**
 * Menu Page
 * @class 
 * @classdesc   Will have various buttons for making a report, contacting App owners/help, resources, logging out,
 * and (for specialists) reviewing a report.
 */
var menuPage = {

    /**
     * Renders the Menu Page page
     */
    initialize: function(isAdmin) {
        this.isAdmin = isAdmin;
        this.renderView();
    },

    /**
     * Registers the event handlers
     */
    bindEvents: function() {
        $('#reportButton').on('click', this.onReport);
        $('#logoutButton').on('click', this.onLogout);
        if (this.isAdmin){
            $('#reviewReportButton').on('click', this.onReviewReport);
        }
        $('#helpLink').on('click', this.onHelp);
    },

    /**
     * Event handler for report button - goes to the Report Form page
     */
    onReport: function(e) {
        e.preventDefault();
        reportForm.initialize();
    },

    /**
     * Event handler for logout button - logs the user out and goes back to login page
     */
    onLogout: function(e) {
        e.preventDefault();
        loggedInUser = undefined;
        // TODO: probably need to do some cleanup in here, but for now just show login page
        console.log("User logged out.");
        loginPage.initialize();
    },

    /**
     * Event handler for review report button - allows agent/specialist/researcher to review reports
     */
    onReviewReport: function(e) {
        e.preventDefault();
    },

    /**
     * Event handler for help link - goes to "Contact Us" page
     */
    onHelp: function(){
        contactUs.initialize();
    },

    /**
     * Renders the page and calls bindEvents
     */
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