var reportForm = {
    // Field used to store location retrieved by Get Location button.
    location: undefined,

	// reportForm constructor
    initialize: function() {
        this.renderView();
        this.populateForm();
    },

    // Populate form data
    populateForm: function(cb) {
    	var cropDefault = ["Alfalfa", "Wheat", "Corn" "Cotton"];
    	var cropSelection = document.getElementById('cropDropdown');
    	for (var option in cropSelection)
    	{
    		cropSelection.remove(option);
    	}

    	for (var i=0; i < arthropodDefault.length; i++)
    	{
    		var opt = document.createElement('option');
    		opt.innerHTML = cropDefault[i];
    		opt.value = cropDefault[i];
    		cropSelection.appendChild(opt);
    	}
    	
        // Get crops
        $.ajax({
            url: API + "api/crop",
            data: userJWT,
            success: function(data){
                var cropSelection = document.getElementById('cropDropdown'); //$('#crop');
                for (var option in cropSelection)
                {
                    cropSelection.remove(option);
                }

                for (var i = 0; i < data.length; i++)
                {
                    if(data[i].active){
                        var opt = document.createElement('option');
                        opt.innerHTML = data[i].name;
                        opt.value = data[i].name;
                        cropSelection.appendChild(opt);
                    }
                }
            }
        });

        // Messing around with arthropod population - will need databse call
        var arthropodDefault = ["Ants", "Aphids", "Bees and Wasps", "Beetles", "Caterpillars", "Flies",
                            "Grasshoppers", "Grubs", "Maggots", "Mites", "Moths", "Pillbugs",
                            "Stink Bugs", "True Bugs"];
        var arthropodSelection = document.getElementById('arthropodDropdown');
        for (var option in arthropodSelection)
        {
            arthropodSelection.remove(option);
        }
        for (var i = 0; i < arthropodDefault.length; i++)
        {
            var opt = document.createElement('option');
            opt.innerHTML = arthropodDefault[i];
            opt.value = arthropodDefault[i];
            arthropodSelection.appendChild(opt);
        }

        // Set up for disease population - DO NOT DELETE
        // $.ajax({
        //     url: API + "api/disease",
        //     data: userJWT,
        //     success: function(data){
        //         var diseaseSelection = document.getElementById('diseaseDropdown');
        //         for (var option in diseaseSelection)
        //         {
        //             diseaseSelection.remove(option);
        //         }

        //         for (var i = 0; i < data.length; i++)
        //         {
        //             if(data[i].active){
        //                 var opt = document.createElement('option');
        //                 opt.innerHTML = data[i].name;
        //                 opt.value = data[i].name;
        //                 diseaseSelection.appendChild(opt);
        //             }
        //         }
        //     }
        // });

        // Set up for weed population - DO NOT DELETE
        // $.ajax({
        //     url: API + "api/weed",
        //     data: userJWT,
        //     success: function(data){
        //         var weedSelection = document.getElementById('weedDropdown');
        //         for (var option in weedSelection)
        //         {
        //             weedSelection.remove(option);
        //         }

        //         for (var i = 0; i < data.length; i++)
        //         {
        //             if(data[i].active){
        //                 var opt = document.createElement('option');
        //                 opt.innerHTML = data[i].name;
        //                 opt.value = data[i].name;
        //                 weedSelection.appendChild(opt);
        //             }
        //         }
        //     }
        // });
    },

    // Register event handlers
    bindEvents: function() {
        $('#addDiseaseButton').on('click', this.addDisease);
        $('#addWeedButton').on('click', this.addWeed);
        $('#addArthropodButton').on('click', this.addArthropod);
        $('#pictureButton').on('click', this.onPicture);
        $('#locationButton').on('click', this.onLocation);
        $('#helpLink').on('click', this.onHelp);
    	$('#submitButton').on('click', this.onSubmit);
    },

    // TODO: Populate crop options based on database info
    // TODO: Populate arthropod options based on database info
    // TODO: Populate disease options based on database info
    // TODO: Populate weed options based on database info
    
    /**
     * Adds an arthropod dropdown when the button "Add another athropod" is clicked
     */
    addArthropod: function(){
        var newDiseaseDropdown = document.getElementById('arthropodDropdown').cloneNode(true);
        document.getElementById('arthropodSelection').appendChild(newDiseaseDropdown);
    },

    /**
     * Adds an disease dropdown when the button "Add another disease" is clicked
     */
    addDisease: function(){
        var newDiseaseDropdown = document.getElementById('diseaseDropdown').cloneNode(true);
        document.getElementById('diseaseSelection').appendChild(newDiseaseDropdown);
    },

    /**
     * Adds an weed dropdown when the button "Add another weed" is clicked
     */
    addWeed: function(){
        var newDiseaseDropdown = document.getElementById('weedDropdown').cloneNode(true);
        document.getElementById('weedSelection').appendChild(newDiseaseDropdown);
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

    /**
     * Event handler for when the "Submit" button is hit. Gets the information
     * and sends stores it to a table on the database
     */
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
            reportForm.populateForm();
            reportForm.bindEvents();
        });
    }
};