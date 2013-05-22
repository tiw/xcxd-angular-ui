'use strict';
/**
 * Created with JetBrains PhpStorm.
 * User: wangting
 * Date: 13-5-10
 * Time: 下午3:13
 */
angular.module('ntd.directives').directive('ntdTree', ['$compile', function($compile) {
  return {
    template: '<span ng-transclude></span>',
    transclude: true,
    restrict: 'A',
    scope: {
      node: '='
    },
    link: function postLink(scope, element, attrs) {

    }
  };
}]);