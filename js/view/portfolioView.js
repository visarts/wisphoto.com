(function() {
  
  angular.module('view.portfolio', [])
    .config(function($routeProvider) {
      $routeProvider
        .when('/portfolio', {
          label: 'Portfolio',
          templateUrl: 'templates/view/portfolioView.tpl.html',
          controller: portfolioViewController
      });
  });
  
  function portfolioViewController($scope, $rootScope) {

    $scope.portfolio = [
      { 
        path: 'images/main_image.jpg', 
        desc: 'Waves pummel the walkway out to the lighthouse in Manitowoc, WI, on the shores of Lake Michigan' 
      },
      { 
        path: 'images/main_slide_2.jpg', 
        desc: 'A persistant plant pushes its way out from the rock walls surrounding Devil\'s Lake, in Baraboo, WI' 
      },
      { 
        path: 'images/main_slide_3.jpg', 
        desc: 'Wildflowers grow alongside a state trail on a summer afternoon near Prescott, WI' 
      },
      { 
        path: 'images/main_slide_4.jpg', 
        desc: 'Train tracks lead off into the distance just north of Manitowoc, WI' 
      },
      {
        path: 'images/slides/slide5.jpg',
        desc: ''
      },
      {
        path: 'images/slides/slide6.jpg',
        desc: ''
      },
      {
        path: 'images/slides/slide7.jpg',
        desc: ''
      },
      {
        path: 'images/slides/slide8.jpg',
        desc: ''
      },
      {
        path: 'images/slides/slide9.jpg',
        desc: ''
      },
      {
        path: 'images/slides/slide10.jpg',
        desc: ''
      },
      {
        path: 'images/slides/slide11.jpg',
        desc: ''
      },
      {
        path: 'images/slides/slide12.jpg',
        desc: ''
      },
    ];

    $scope.displayImg = $scope.portfolio[0];

    function setDisplayImg(index) {
      $scope.displayImg = $scope.portfolio[index];
      $rootScope.$broadcast('changePic');
    }
    
    $scope.setDisplayImg = setDisplayImg;
  }
})();