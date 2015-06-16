var seed;

seed = angular.module('seed', []);

seed.factory('socket', function($rootScope) {
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
