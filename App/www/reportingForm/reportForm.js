var reportForm = {
	// reportForm constructor
    initialize: function() {
        this.renderView();
    },
    // Register submit button to event handler
    bindEvents: function() {
    	$('#submitButton').on('click', this.onSubmit);
    },

    // TODO: Populate crop options based on database info
    // TODO: Populate arthropod options based on database info
    // TODO: Populate disease options based on database info
    // TODO: Populate weed options based on database info

    // TODO: Add functionality for making another dropdown for diseases
    // TODO: Add functionality for making another dropdown for weeds

    onSubmit: function(e){
    	e.PreventDefault();

    	// get selected crop
    	var c = document.getElementById("crop");
    	var crop = c.options[c.selectedIndex].text;

    	// get selected arthropod
    	var a = document.getElementById("arthropod");
    	var arthropod = a.options[a.selectedIndex].text;

    	// TODO: get multiple diseases (potentially make a loop and add diseases to a string/array?)
    	// TODO: get mutliple weeds (potentially make a loop and add weeds to a string/array?)

    	var comment = document.getElementById("comment");

    	// TODO: location
    	// TODO: images

    	// TODO: Figure out how to format information and where to submit
    },


    renderView: function() {
        $('#view').load("../form/reportForm.html", function(){
            reportForm.bindEvents();
        });
    }
};