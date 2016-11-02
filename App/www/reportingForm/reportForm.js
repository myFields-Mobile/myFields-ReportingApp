var reportForm = {
    // Field used to store location retrieved by Get Location button.
    location: undefined,
	// reportForm constructor
    initialize: function() {
        this.renderView();
    },
    // Register submit button to event handler
    bindEvents: function() {
        $('#addDiseaseButton').on('click', this.addDisease);
        $('#addWeedButton').on('click', this.addWeed);
        $('#pictureButton').on('click', this.onPicture);
        $('#locationButton').on('click', this.onLocation);
        $('#helpLink').on('click', this.onHelp);
    	$('#submitButton').on('click', this.onSubmit);
    },

    // TODO: Populate crop options based on database info
    // TODO: Populate arthropod options based on database info
    // TODO: Populate disease options based on database info
    // TODO: Populate weed options based on database info
    

    // TODO: Add functionality for making another dropdown for diseases
    addDisease: function(){

    },

    // TODO: Add functionality for making another dropdown for weeds
    addWeed: function(){

    },

    onPicture: function(){

    },
    // Event handler for get location
    onLocation: function(){
        navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationFailure);
        console.log(reportForm.location);
    },

    // On successful geolocation.getCurrentPosition, store the location data in reportForm.location
    getLocationSuccess: function(position){
        reportForm.location = {
            Latitude: position.coords.latitude,
            Longitude: position.coords.Llongitude
        }
    },

    // On failed geolocation.getCurrentPosition, reportForm.location = undefined
    getLocationFailure: function(){
        alert("Failed getting location data.");
        reportForm.location = undefined;
    },

    // Event handler for submit button
    onSubmit: function(e){
    	e.PreventDefault();

        if (location == undefined){
            alert("Please capture GPS location before submitting.");
        }

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