app.controller('myController',['$scope','$http',function($scope,$http) 
{
//alert("hai");
   

  $scope.data =[];
  getResultPage();

function  getResultPage(){
    $http({
        url : URL + '/api/index.php',
        method : 'GET'
    }).then(function (result) {

        $scope.data = result.data.data;
        
    });
             

}

}]);

