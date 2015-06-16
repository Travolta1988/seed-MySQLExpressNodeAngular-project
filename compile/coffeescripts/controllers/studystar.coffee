studystar = angular.module('studystar', [])

studystar.config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider.when('/question'+':questionId',
      templateUrl: '/views/sections/answers-container.html',
      controller: 'answersCtrl'
    )
    return
]



studystar.factory 'socket', ($rootScope) ->
  socket = io.connect()
  {
    on: (eventName, callback) ->
      socket.on eventName, ->
        args = arguments
        if !$rootScope.$$phase
          $rootScope.$apply ->
            callback.apply socket, args
            return
        return
      return
    emit: (eventName, data, callback) ->
      socket.emit eventName, data, ->
        args = arguments
        if !$rootScope.$$phase
          $rootScope.$apply ->
            if callback
              callback.apply socket, args
            return
        return
      return
  }
