(function() {
  
  angular.module('view.frontPage', [])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          label: 'Home',
          templateUrl: 'templates/view/frontPageView.tpl.html',
          controller: frontPageViewController
      });
  });
  
  function frontPageViewController($scope, $location) {

    function openContact() {
      $location.path('/contact');
    }
    
    $scope.openContact = openContact;
  }
})();