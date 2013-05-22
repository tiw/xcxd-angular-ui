'use strict';
/**
 * button with a confirm pop window
 * User: wangting
 * Date: 13-4-23
 * Time: 下午3:29
 */

angular.module('ntd.directives').directive('ntdConfirmButton', ['$compile', function($compile) {
  return {
    template: '<span ng-transclude></span>',
    transclude: true,
    restrict: 'A',
    scope: {
      okFn: '@'
    },
    link: function postLink(scope, element, attrs) {
      var isCalled;
      scope.confirm = function() {
        if (!isCalled) {
          eval('scope.$parent.' + scope.okFn);
          isCalled = true;
        }
      };
      $(element).clickover({
        global: true,
        title: attrs.content,
        auto_close: 5 * 1000,
        placement: attrs.placement,
        html: true,
        content: '<div class="poppy btn-toolbar">' +
            '<button data-dismiss="clickover" class="btn">取消</button>' +
            '<button data-dismiss="clickover" class="btn btn-primary" ng-click="confirm()">确定</button>' +
            '</div>'
      }).on('shown', function() {
            var poppy = $('.poppy', $(element).parent())[0];
            $compile($(poppy).contents())(scope);
          });
    }
  };
}]);
