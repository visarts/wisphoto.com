angular.module('service.httpService', [])
  .factory('httpService', httpService);

function httpService($http) {

  function get(url) {
    return $http.get(url);
  }

  function post(url) {
    
  }

  return {
    get: get,
    post: post
  };
}
