var contactUs = {

    initialize: function(){
        this.renderView();
    },

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

    renderView: function() {
        $('#view').load("../contactUs/contactUs.html", function(){
        	contactUs.bindEvents();
        });
    }
}