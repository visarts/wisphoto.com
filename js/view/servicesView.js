(function() {
  
  angular.module('view.services', [])
    .config(function($routeProvider) {
      $routeProvider
        .when('/services', {
          label: 'Services',
          templateUrl: 'templates/view/servicesView.tpl.html',
          controller: servicesViewController
      });
  });
  
  function servicesViewController($scope) {
    
    
  }
})();