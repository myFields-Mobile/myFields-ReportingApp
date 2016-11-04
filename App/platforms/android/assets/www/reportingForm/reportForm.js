var reportForm = {
	// reportForm constructor
    initialize: function() {
        this.renderView();
    },
    // Register submit button to event handler
    bindEvents: function() {
        $('#addDiseaseButton').on('click', this.addDisease);
        $('#addWeedButton').on('click', this.addWeed)
    	$('#submitButton').on('click', this.onSubmit);
    },

    // TODO: Populate crop options based on database info
    // TODO: Populate arthropod options based on database info
    // TODO: Populate disease options based on database info
    // TODO: Populate weed options based on database info
    

    // TODO: Add functionality for making another dropdown for diseases
    addDisease: function(){
        // Get the main Div in which all the other divs will be added
        //var newDropDownArea = document.getElementById('newDropDownArea');

        // Create a new div for holding text and button input elements
        //var newDiv = document.createElement('div');

        // Create a new text input
        //var newDropdown = document.createElement('select');

        //newDropdownOption = document.createElement("option");
        //newDropdownOption.value = "value1";
        //newDropdownOption.text = "option 1";

        //newDropdown.add(newDropdownOption);

        // Create buttons for creating and removing inputs
        //var newAddButton = document.createElement('input');
        //newAddButton.type = "button";
        //newAddButton.value = " + ";

        // Append new text input to the newDiv
        //newDiv.appendChild(newDropdown);

        // Append new button inputs to the newDiv
        //newDiv.appendChild(newAddButton);

        // Append newDiv input to the newDropDownArea div
        //newDropDownArea.appendChild(newDiv);

        // Add a handler to button for deleting the newDiv from the newDropDownArea
        //newAddButton.onclick = addNew;
        var newDiseaseDropdown = document.getElementById('diseaseDropdown').cloneNode(true);
        document.getElementById('diseaseArea').appendChild(newDiseaseDropdown);
    },

    // TODO: Add functionality for making another dropdown for weeds
    addWeed: function(){

    },

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
        $('#view').load("../reportingForm/reportForm.html", function(){
            reportForm.bindEvents();
        });
    }
};