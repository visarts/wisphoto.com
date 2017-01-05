angular.module('directive.global.breadcrumbs', [])
  .directive('breadcrumbs', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/breadcrumbsDirective.tpl.html'
    };
});
