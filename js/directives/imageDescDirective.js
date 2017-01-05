angular.module('directive.global.imageDesc', [])
  .directive('imageDesc', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/directives/imageDescDirective.tpl.html',
      scope: {
        imgSrc: '@url'
      }
    };
  });
