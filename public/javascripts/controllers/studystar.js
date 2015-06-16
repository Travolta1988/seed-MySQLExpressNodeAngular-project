var studystar;

studystar = angular.module('studystar', []);

studystar.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/question' + ':questionId', {
      templateUrl: '/views/sections/answers-container.html',
      controller: 'answersCtrl'
    });
  }
]);

studystar.factory('socket', function($rootScope) {
  var socket;
  socket = io.connect();
  return {
    on: function(eventName, callback) {
      socket.on(eventName, function() {
        var args;
        args = arguments;
        if (!$rootScope.$$phase) {
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        }
      });
    },
    emit: function(eventName, data, callback) {
      socket.emit(eventName, data, function() {
        var args;
        args = arguments;
        if (!$rootScope.$$phase) {
          $rootScope.$apply(function() {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        }
      });
    }
  };
});
