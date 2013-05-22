'use strict';
/**
 * Created with JetBrains PhpStorm.
 * User: wangting
 * Date: 13-4-23
 * Time: 下午4:03
 */
var demoApp = angular.module("demoApp", ['ntd.directives']);
//demoApp()
demoApp
    .controller('ClickoverCtrl', ['$scope', function($scope) {
      $scope.name = 'Nobody';
      $scope.sayHello = function(name) {
        $scope.name = name;
        console.log('say hello');
      }
    }])
    .controller('PieCtrl', ['$scope', function($scope) {

      var data = {"total": 299, "analysis": [
        {"name": "20-30岁", "value": 96},
        {"name": "31-40岁", "value": 26},
        {"name": "41-50岁", "value": 46},
        {"name": "51-60岁", "value": 17}]};
      $scope.ageData = data;
    }]);
