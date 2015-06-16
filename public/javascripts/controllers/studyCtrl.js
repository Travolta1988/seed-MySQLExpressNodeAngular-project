studystar.controller('studyCtrl', function($rootScope, $scope, socket) {
  var currentGroup;
  currentGroup = window.location.pathname.split('/study/')[1];
  socket.emit('questionsList', currentGroup);
  socket.on('renderQuestions', function(data) {
    $scope.groupName = data[0].group_name;
    $scope.groupInfo = data[0].group_info;
    $scope.questionsData = data;
  });
  $('#ask-question-area a.press').click(function() {
    var question, userQuestion;
    question = $('#ask-question-area textarea').val();
    userQuestion = [question, currentGroup];
    return socket.emit('question', userQuestion);
  });
  $(window).load(function() {
    if ($('ng-view').children().length > 0) {
      return $('#online-users-section').delegate().hide();
    }
  });
  (function($) {
    $(document).ready(function() {
      $("#questions-list").delegate(".question", "click", function() {
        return $('#online-users-section').hide();
      });
      $("#questions-list, #questions-list-closed").delegate(".question", "mouseenter", function() {
        return $(this).addClass('hovered');
      });
      $("#questions-list, #questions-list-closed").delegate(".question", "mouseleave", function() {
        return $(this).removeClass('hovered');
      });
      $("#questions-list").delegate(".question", "click", function() {
        $('#questions-list .question').removeClass('active');
        return $(this).addClass('active');
      });
      $("#questions-list-closed").delegate(".question", "click", function() {
        $('#questions-list-closed .question').removeClass('active');
        return $(this).addClass('active');
      });
    });
  })(jQuery);
});
