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
    bindEvents: function() {
    	$('#submit').on('click', {comment: document.getElementById("comment").value}, this.onSubmit);
    	$('#cancel').on('click', this.onCancel);
    },


    onCancel: function() {
    	console.log("cancel clicked");
    	// TODO: change false to user.isAdmin
    	menuPage.initialize(false);
    },

    onSubmit: function(event) {
    	// TODO: make this do actual things
        var json = '{ "userComments" : [' +
                '"app":"myFields Mobile"' +
                '"user":"' + '' +
                '"comment":"' +  event.data.comment + '"' +
            '} ]}';
    	menuPage.initialize(false);
    },

    renderView: function() {
        $('#view').load("../contactUs/contactUs.html", function(){
        	contactUs.bindEvents();
        });
    }
}