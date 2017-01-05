(function() {
  
  angular.module('view.contact', [])
    .config(function($routeProvider) {
      $routeProvider
        .when('/contact', {
          label: 'Contact',
          templateUrl: 'templates/view/contactView.tpl.html',
          controller: contactViewController
      });
  });
  
  function contactViewController($scope, $http) {
    
    $scope.formData = {};
    $scope.formErrors = {};
    $scope.isLoading = true;

    function processForm() {
      $http({
        method: 'POST',
        url: 'php/contact.php',
        data: $.param($scope.formData),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data) {
        $scope.isLoading = false;
        if(!data.success) {
          $scope.formErrors.name = data.errors.contactName;
          $scope.formErrors.email = data.errors.contactEmail;
          $scope.formErrors.message = data.errors.messageContent;
        } else {
          $scope.message = data.message;
          resetForm();
        }
      });
    }
    
    function resetForm() {
      //$scope.message = undefined;
      $scope.formErrors = {};
      $scope.formData = {};
    }
    
    $scope.processForm = processForm;
    $scope.resetForm = resetForm;
  }
})();