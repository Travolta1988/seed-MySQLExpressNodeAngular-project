seed.controller('headerCtrl', function($scope, $rootScope, socket) {
  socket.emit('call', function() {});
  socket.on('userInfo', function(data) {
    $rootScope.name = data[0].username;
    return $rootScope.avatar = '../images/avatar.png';
  });
});
