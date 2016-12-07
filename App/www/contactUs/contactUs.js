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

    /**
     * Loads the Contact Us page 
     */
    renderView: function() {
        $('#view').load("../contactUs/contactUs.html");
    }
}