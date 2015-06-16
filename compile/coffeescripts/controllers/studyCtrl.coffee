studystar.controller 'studyCtrl', ($rootScope, $scope, socket) ->

  # Defining of current Group on client side
  currentGroup = window.location.pathname.split('/study/')[1]
  #Getting questions List and render on left side for currentGroup
  socket.emit 'questionsList', currentGroup
  socket.on 'renderQuestions', (data) ->
    $scope.groupName = data[0].group_name
    $scope.groupInfo = data[0].group_info
    $scope.questionsData = data
    return


  #Asking Question from textarea in left question section
  $('#ask-question-area a.press').click ->
    question = $('#ask-question-area textarea').val()
    userQuestion = [question, currentGroup ]
    socket.emit('question', userQuestion)



  #Dynamic settings
  #
  #
  #
  $(window).load ->
    if($('ng-view').children().length > 0)
      $('#online-users-section').delegate().hide()




  (($) ->

    $(document).ready ->

      $( "#questions-list" ).delegate( ".question", "click", () ->
        $('#online-users-section').hide()
      )


      $( "#questions-list, #questions-list-closed" ).delegate( ".question", "mouseenter", () ->
        $(this).addClass('hovered')
      )

      $( "#questions-list, #questions-list-closed" ).delegate( ".question", "mouseleave", () ->
        $(this).removeClass('hovered')
      )

      $( "#questions-list" ).delegate( ".question", "click", () ->
        $('#questions-list .question').removeClass('active')
        $(this).addClass('active')
      )

      $( "#questions-list-closed" ).delegate( ".question", "click", () ->
        $('#questions-list-closed .question').removeClass('active')
        $(this).addClass('active')
      )

      return

    return
  ) jQuery


  return