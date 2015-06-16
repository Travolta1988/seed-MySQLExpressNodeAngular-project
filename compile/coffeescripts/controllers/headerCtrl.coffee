studystar.controller 'headerCtrl', ($scope, $rootScope, socket) ->
  socket.emit 'call', (data) ->
    return

  socket.on 'userInfo', (data) ->
    $rootScope.name = data[0].username
    $rootScope.status = data[0].user_status
    $rootScope.engagement = data[0].engagement_points
    $rootScope.teamwork = data[0].teamwork_points
    $rootScope.activity = data[0].activity_points
    if data[0].user_avatar == null || data[0].user_avatar == undefined || data[0].user_avatar == ''
      $rootScope.avatar = '../images/avatar.png'
    else
      $rootScope.avatar = data[0].user_avatar

  return