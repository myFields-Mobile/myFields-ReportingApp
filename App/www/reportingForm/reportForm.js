var reportForm = {
    // Field used to store location retrieved by Get Location button.
    location: undefined,
    
    // Field used to store crops 
    crops: ["Wheat", "Corn"],

	// reportForm constructor
    initialize: function() {
        this.populateForm();
        this.renderView();
    },

    // Populate form data
    populateForm: function() {
        // Get crops
        $.ajax({
            url: API + "api/crop",
            data: userJWT,
            success: function(data){
                console.log(data);
            }
        })
    },

    // Register event handlers
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

        // TODO: Might want to add some map functionality - can use docs found here: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/index.html#see-where-you-are-on-a-map

        navigator.geolocation.getCurrentPosition(
            function(position){
                reportForm.location = {
                    Latitude: position.coords.latitude,
                    Longitude: position.coords.longitude
                }
                console.log("Successfully got location: " + reportForm.location.Latitude + " , " + reportForm.location.Longitude);
            }, 
            // On failed geolocation.getCurrentPosition, reportForm.location = undefined
            function(error){
                if (error.code == PositionError.PERMISSION_DENIED){
                    console.log("Location permission denied.");
                    alert("App does not have permission to access location. Please check settings.");
                }
                else if (error.code == PositionError.POSITION_UNAVAILABLE){
                    console.log("Unable to connect to location service.");
                    alert("Unable to connect to location service.")
                }
                else {
                    console.log("Failed getting location data: generic error");
                    alert("Failed getting location data.");
                }
                reportForm.location = undefined;
            }
        );
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