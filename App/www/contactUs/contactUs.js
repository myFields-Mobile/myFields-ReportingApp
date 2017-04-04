/**
 * The Contact Us page
 * @class
 * @classdesc   Allows a user to contact app owners/admins
 */
var contactUs = {

	/**
     * Renders the Contact Us page
     */
    initialize: function(){
        this.renderView();
    },

<<<<<<< HEAD
<<<<<<< HEAD
    /**
     * Loads the Contact Us page 
     */
=======
=======
>>>>>>> origin/master
    bindEvents: function() {
    	$('#submit').on('click', this.onSubmit);
    	$('#cancel').on('click', this.onCancel);
    },


    onCancel: function() {
    	console.log("cancel clicked");
    	// TODO: change false to user.isAdmin
    	menuPage.initialize(false);
    },

    onSubmit: function() {
    	// TODO: make this do actual things
    	menuPage.initialize(false);
    },

<<<<<<< HEAD
>>>>>>> origin/master
=======
>>>>>>> origin/master
    renderView: function() {
        $('#view').load("../contactUs/contactUs.html", function(){
        	contactUs.bindEvents();
        });
    }
}