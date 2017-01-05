angular.module('directive.global.mainHeader', [])
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/mainHeaderDirective.tpl.html',
      controller: mainHeaderController,
    };
  });

function mainHeaderController($scope, $location) {

  /**
    * get the name of the view after the '/' and put it on the scope
    *
   **/
  
  function setActiveNavLocation() {
    var locationArray = $location.url().split('/');
    $scope.currentLocation = locationArray[1];
  }

  $scope.$on('$locationChangeStart', function() {
    setActiveNavLocation();
  });

  setActiveNavLocation();
  
  /**
    * when a user clicks off or clicks a menu item, recollapse the nav
    *
   **/
  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $('.navbar-collapse');               
    var _opened = $navbar.hasClass('in');
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {      
        $navbar.collapse('hide');
    }
});
}
