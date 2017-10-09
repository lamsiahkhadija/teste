var app = angular.module("myApp",[]);

 app.controller( "myCtr",function ($scope){
/*$scope.names=['sara','tamtam','nouha'];*/

$scope.friends = [{name:'sara', desc:'ingeneir'},
                    { name:'nouha', desc:'tech'},
                    { name:'fati', desc:'etudiante'}];

$scope.clicme=function(name,desc){
   $scope.updatename = name;
   $scope.updatedesc = desc;


}
                });




