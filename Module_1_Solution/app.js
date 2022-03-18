(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.message = "";
  $scope.items ="" ;
  $scope.color = "";
  $scope.check = function () {
    var arr = $scope.items;
    var strarr = arr.split(",");
    var size = strarr.length;
    for(var i in strarr){
      if(strarr[i] == "")
      {
        size--;
      }
  }
    var msg = "Total number of Items is:"+size+"     ";
    if(size == 0){
      $scope.message = "Please enter data first";
      $scope.color = "red";
    }
    else if (size <= 3) {
      $scope.message = msg+"Enjoy!";
      $scope.color = "green";
    }
    else if(size > 3){
        $scope.message = msg+"Too much!";
        $scope.color = "green";
    }
  }
}
})();
