(function () {
'use strict';
angular.module('lunchChecker', [])

.controller('foodItemValidator', function ($scope) {

  $scope.displayResult = function () {
    if ($scope.foodItemList == "" | $scope.foodItemList == null){
      $scope.message = "Please enter data first";
    }else {
    var foodItemsCount = getFoodItemsCount($scope.foodItemList);
    if (foodItemsCount <= 3){
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  }
  };
  $scope.clearOutputResult = function (){
    $scope.message = "";

  }
  function getFoodItemsCount(string){
    var words = string.split(",");
    var count = 0 ;
    for (var i=0;i<words.length;i++) {
      if ( !words[i] == ""){
        count += 1;
      }
    }
    return count;
  };
});

})();
