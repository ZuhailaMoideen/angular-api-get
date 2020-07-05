var app = angular.module("sample", ["ngRoute"]);
app.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when("/menu1", {
        templateUrl : "templates/menu1.html" ,
        controller : "PostController"
        
    });
    
    

}]);


  