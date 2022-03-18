(function(){
  'use strict';

  angular.module('DIApp', [])
.controller('DIController', DIController);
function DIController($scope, $filter, $injector){
  $scope.name = "Ash";
  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
  console.log($injector.annotate(DIController));
}

console.log(DIController.toString());

})();

/*(function(){'use strict';angular.module('DIApp',[]).controller('DIController',DIController);function DIController($scope,$filter,$injector){$scope.name="Ash";$scope.upper=function(){var upCase=$filter('uppercase');$scope.name=upCase($scope.name)};console.log($injector.annotate(DIController))}
console.log(DIController.toString())})()*/
