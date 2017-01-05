angular.module('mainApp', [
  'ngRoute',
  'ngAnimate',
  'ng-breadcrumbs',
  'ui.bootstrap',
  'picardy.fontawesome',
  'view',
  'directive'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({templateUrl: '404.html'});
  }])
  .controller('mainController', ['$scope', 'breadcrumbs', mainController]);

function mainController($scope, breadcrumbs) {
  $scope.breadcrumbs = breadcrumbs;
}