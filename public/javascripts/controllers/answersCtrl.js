studystar.controller('answersCtrl', function($routeParams, $rootScope, $scope, socket) {
  var currentquestionId, questionId;
  questionId = $routeParams.questionId;
  currentquestionId = questionId;
  socket.emit('answersList', questionId);
  socket.on('renderCurrentQuestion', function(data) {
    return $scope.currentQuestion = data[0];
  });
  socket.on('renderListOfAnswers', function(data) {
    return $scope.answersData = data;
  });
  return $('#answer-question-area a.press').click(function() {
    var answerOnQuestion, userAnswer;
    answerOnQuestion = $('#answer-question-area textarea').val();
    userAnswer = [answerOnQuestion, questionId];
    return socket.emit('answer', userAnswer);
  });
});
