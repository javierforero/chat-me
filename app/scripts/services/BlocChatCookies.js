(function() {
  function BlocChatCookies($cookies, $uibModal) {
    
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernameprompt.html',
        controller: 'UsernamePromptCtrl as user',
        backdrop: 'static',
        keyboard: false
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
