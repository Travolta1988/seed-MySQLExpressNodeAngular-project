studystar.controller 'answersCtrl', ($routeParams, $rootScope, $scope, socket) ->
  questionId = $routeParams.questionId;

  currentquestionId = questionId

  # Defining of current Group on client side
  # currentGroup = window.location.pathname.split('/study/')[1]
  #Getting questions List and render on left side for currentGroup
  socket.emit 'answersList', questionId
  socket.on 'renderCurrentQuestion', (data) ->
    $scope.currentQuestion = data[0]
  socket.on 'renderListOfAnswers', (data) ->
    $scope.answersData = data
  $('#answer-question-area a.press').click ->
    answerOnQuestion = $('#answer-question-area textarea').val()
    userAnswer = [answerOnQuestion, questionId]
    socket.emit('answer', userAnswer)










