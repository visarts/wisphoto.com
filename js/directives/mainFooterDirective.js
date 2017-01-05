angular.module('directive.global.mainFooter', [])
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/mainFooterDirective.tpl.html',
      controller: mainFooterController,
    };
  });

function mainFooterController($scope, $location) {

  $scope.isHome = true;

  $scope.$on('$locationChangeStart', function() {
    if($location.url() === '/') {
      $scope.isHome = true;
    } else {
      $scope.isHome = false;
    }
  });
}
