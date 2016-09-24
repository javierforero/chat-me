(function() {
  function BlocChatCookies($cookies, $cookieStore, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernameprompt.html',
        controller: 'UsernamePromptCtrl as user',
        backdrop: 'static',
        keyboard: false
      });
    }

    this.setCurrentUser = function(username) {
      $cookieStore.put('blocChatCurrentUser', username);
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies','$cookieStore', '$uibModal', BlocChatCookies]);
})();
