seed.controller 'headerCtrl', ($scope, $rootScope, socket) ->
  socket.emit 'call', () ->
    return

  socket.on 'userInfo', (data) ->
    $rootScope.name = data[0].username
    $rootScope.avatar = '../images/avatar.png'
  return