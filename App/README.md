# myFields-ReportingApp

A mobile application to be used by researchers/agents at myFields, part of Kansas State's Research and Extension office, and farmers who are a part of myFields. Farmers can use the application to upload information about crop problems (such as weeds, diseases, and arthropods), and that data can be verified and used by myFields researchers/agents to track the spread of crop diseases, weeds, etc.

This application interacts with the myFields API (https://github.com/myFields-Mobile/myFields-API) to run. The API uses Microsoft Azure. Contact Brian McCornack (mccornac AT ksu.edu) for access.

**PLEASE NOTE THAT THIS APPLICATION IS UNDER ACTIVE DEVELOPMENT AND IS NOT YET READY FOR GENERAL USE.**
As we resolve issues with the API, we will add in more API calls and functionality to this application.

## Usage Model:

The project is run and built using Apache Cordova. The API for this project needs to up and running for this application to work. For information on setting up and using the API, please see https://github.com/myFields-Mobile/myFields-API/blob/master/README.md 

## Testing:

Currently, the testing for this application is done through the tests for the API, which is done using Mocha. Documentation for running the API tests can be found in the API's README.

## Continuing Work:

The first priority is finishing authentication with the API and making sure it is usable. After that is done, the following issues in the code can be resolved:

    0. Overall, back/cancel buttons need to be added to the pages. Some pages have them but not all.
    1. contactUs.js
        i. onCancel
            - Make sure authentication is working and change false to user.isAdmin
        ii. onSubmit
            - Get information from contactUs.html and organize into json. Figure out where to submit 
                to server and do so.
    2. login-page.js
        i. DOUBLE CHECK
    3. reportForm.js
        i. populateForm
            - Get list of crops from database and change the values in the crop dropdown in 
                reportForm.html
            - Get list of arthropods from database and change values in arthropod dropdown in 
                reportForm.html
            - Uncomment the disease and weed populations sections and make sure the database calls to 
                get those values are correct
            - For arthropods, weeds, and diseases, make sure the first option for each dropdown is "None" 
                since a user doesn't have to select all three
        ii. onCancel
            - Make sure authentication is working and change false to user.isAdmin
        iii. onLocation
            - Possibly add some map functionality so users can select position on map
        iv. onSubmit
            - There are currently two different image upload post methods set up in the API but neither 
                works. Whichever one is chosen and fixed, use the appropriate ajax call.
            - Submit form to server
    4. reportForm.html
        i. Potentially add a "Contact Us" button that does what the help button does and change the Help 
            button to a tips/FAQ page
    6. user-menu.js
        i. onLogout
            - Potential cleanup
    7. normalUserMenu.html and specialistUserMenu.html
        i. Potentially add a “Contact Us” button that does what the Help button does and change the Help 
            button to a tips/faq page
    8. There needs to be an interface available where myFields specialists/agents/researchers can view crop 
        reports and later approve those reports


## Reference Links:
* Apache Cordova Documentation: https://cordova.apache.org/docs/en/latest/