// Routes different events to different views
angular.
    module('myFieldsReporting').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/loginPage', {
                    template: 'loginPage/login-page-template.html'
                }).
                otherwise('/loginPage');
        }]);