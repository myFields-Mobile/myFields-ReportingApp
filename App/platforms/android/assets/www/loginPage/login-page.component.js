angular.
module('loginPage').
component('loginPage', {
    templateURL: 'loginPage/login-page-template.html', 
    controller:("LoginController", ['$scope', function($Scope) {
        $scope.master={};

        // Update occurs on click of log in button
        $scope.update = function(login){
            $scope.master = angular.copy(login);
            // Business logic for logging in
        }
    }])
});