angular.module('mainApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({templateUrl: '404.html'});
}]);