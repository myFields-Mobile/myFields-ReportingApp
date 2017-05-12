/**
 * Report Form
 * @class
 * @classdesc   Allows a user to select their afflicted crop, one or more pests, one or more diseases, one or more weeds, give comments,
 * upload location, and upload picture(s). The report will be submitted as a JSON to our AppData table.
 */
var reportForm = {

    /** 
     * Field used to store location retrieved by "Get Location" button 
     */
    location: undefined,

	/**
     * Renders the Report Form page
     */
    initialize: function() {
        this.renderView();
    },

    /**
     * Populate the form data - gets options for fields from the database and populates the fields
     */
    populateForm: function(cb) {
    	var cropDefault = ["Alfalfa", "Wheat", "Corn", "Cotton"];
    	var cropSelection = document.getElementById('cropDropdown');
    	for (var option in cropSelection)
    	{
    		cropSelection.remove(option);
    	}

    	for (var i = 0; i < cropDefault.length; i++)
    	{
    		var opt = document.createElement('option');
    		opt.innerHTML = cropDefault[i];
    		opt.value = cropDefault[i];
    		cropSelection.appendChild(opt);
    	}

    	// TODO: Make sure this works
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

        // Messing around with arthropod population - will need database call
        var arthropodDefault = ["Ants", "Aphids", "Bees and Wasps", "Beetles", "Caterpillars", "Flies",
                            "Grasshoppers", "Grubs", "Maggots", "Mites", "Moths", "Pillbugs",
                            "Stink Bugs", "True Bugs"];
        var arthropodSelection = document.getElementById('arthropodDropdown');
        for (var option in arthropodSelection)
        {
            arthropodSelection.remove(option);
        }

        // Need a None option for all dropdowns except crop
        var noneOption = document.createElement('option');
        noneOption.innerHTML = 'None';
        noneOption.value = 'None';
        arthropodSelection.appendChild(noneOption);

        // TODO: Switch this out with database call
        // Append options for real arthropod selection
        for (var i = 0; i < arthropodDefault.length; i++)
        {
            var opt = document.createElement('option');
            opt.innerHTML = arthropodDefault[i];
            opt.value = arthropodDefault[i];
            arthropodSelection.appendChild(opt);
        }

        // TODO: Uncomment the following and make sure database calls work

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
        //
        //         diseaseSelection.appendChild(noneOption);
        //
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
        //
        //         weedSelection.appendChild(noneOption)
        //
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

    /**
     * Registers the event handlers
     */
    bindEvents: function() {
        $('#addDiseaseButton').on('click', this.addDisease);
        $('#addWeedButton').on('click', this.addWeed);
        $('#addArthropodButton').on('click', this.addArthropod);
        $('#pictureButton').on('click', this.onPicture);
        $('#locationButton').on('click', this.onLocation);
        $('#helpLink').on('click', this.onHelp);
    	$('#submitButton').on('click', this.onSubmit);
        $('#cancelButton').on('click', this.onCancel);
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

    /**
     * Allows the user to upload a picture when "Add picture" is clicked
     */
    onPicture: function(){

    },

    onCancel: function(){
        // TODO: change false to user.isAdmin
        menuPage.initialize(false);
    },

    /**
     * Event handler for get location
     */
    onLocation: function(){

        // TODO: Might want to add some map functionality - can use docs found here: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/index.html#see-where-you-are-on-a-map

        navigator.geolocation.getCurrentPosition(
            function(position){
                reportForm.location = {
                    Latitude: position.coords.latitude,
                    Longitude: position.coords.longitude
                };
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
     * and stores it to a table ("AppData") on the database
     */
    onSubmit: function(e){
    	e.PreventDefault();

        if (location == undefined){
            alert("Please capture GPS location before submitting.");
        }

        // Get single crop
    	var c = document.getElementById("cropDropdown");
    	var crop = c.options[c.selectedIndex].text;

        // Get arthropod(s), if any
        var a = document.getElementsByName("arthropodDropdown");
        var arthropods = new Array();
        for (var i = 0; i < a.length; i++){
            if (a[i].value != 'None')
            {
                arthropods.push(a[i].value)
            }
        }
        arthropods = arthropods.join(", ");

        // Get disease(s), if any
        var dis = document.getElementsByName("diseaseDropdown");
        var diseases = new Array();
        for (var i = 0; i < dis.length; i++){
            if (dis[i].value != 'None')
            {
                diseases.push(dis[i].value);
            }
        }
        diseases = diseases.join(", ");

        // Get weed(s), if any
        var w = document.getElementsByName("weedDropdown");
        var weeds = new Array();
        for (var i = 0; i < w.length; i++){
            if (w[i].value != 'None')
            {
                weeds.push(w[i].value);
            }
        }
        weeds = weeds.join(", ");

    	var comment = document.getElementById("comment").value;

        /*
            TODO: Figure out which post method to use to upload blob to Azure and get url to image (myFields-API/routes/
            images/images.js)
            Use the appropriate ajax call to call the chosen post method
         */
        var imageUrl = "";
        $.ajax({
            url: API + "api/images/uploadImage",
            data: {
                storageAccount: "myfieldsstorage",
                storageKey: "1sVFgFK7vKNXoxpCzeVGDjBaU99NCUtUYhX2HGtKeAzgycZcW3enLxMe6dh7c/uW5qiWKga3vtClWP5Cx70HGg==",
                container: "myfields-reporting",
                image: ""
            },
            success: function(data){
                imageUrl = data;
            }
        });

        // $.ajax({
        //     url: API + "api/images/addBlob",
        //     data: {
        //         container: "myfields-reporting",
        //         filename: ""
        //     },
        //     succes: function(data){
        //
        //     }
        // });


        // Create the string for the json then change it into a json object
        var json = '{ "field_info" : [' +
                '{ "Crop":"' + crop + '", ' +
                '"Arthropods":"' + arthropods + '", ' +
                '"Diseases":"' + diseases + '", ' +
                '"Weeds":"' + weeds + '", ' +
                '"Comment":"' + comment + '"} ]} ';
        // json = JSON.parse(json);

        // TODO: Submit form to server
        $.ajax({
            url: API + 'api/appdata/create',
            data: {
                token: userJWT,
                jsondata: json,
                image: imageUrl,
                longitude: reportForm.location.Longitude.toString(),
                latitude: reportForm.location.Latitude.toString()
            }

        });
    },

    /**
     * Load the Report Form page
     */

    onHelp: function(){
        contactUs.initialize();
    },

    renderView: function() {
        $('#view').load("../reportingForm/reportForm.html", function(){
            reportForm.bindEvents();
            reportForm.populateForm();
        });
    }
};