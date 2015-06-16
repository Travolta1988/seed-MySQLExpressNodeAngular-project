studystar.controller('headerCtrl', function($scope, $rootScope, socket) {
  socket.emit('call', function(data) {});
  socket.on('userInfo', function(data) {
    $rootScope.name = data[0].username;
    $rootScope.status = data[0].user_status;
    $rootScope.engagement = data[0].engagement_points;
    $rootScope.teamwork = data[0].teamwork_points;
    $rootScope.activity = data[0].activity_points;
    if (data[0].user_avatar === null || data[0].user_avatar === void 0 || data[0].user_avatar === '') {
      return $rootScope.avatar = '../images/avatar.png';
    } else {
      return $rootScope.avatar = data[0].user_avatar;
    }
  });
});
