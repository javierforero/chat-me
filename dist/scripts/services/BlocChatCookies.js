(function() {
  function BlocChatCookies($cookies, $cookieStore, $uibModal) {

    this.currentUser = $cookies.get('blocChatCurrentUser');

    if (!this.currentUser || this.currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernameprompt.html',
        controller: 'UsernamePromptCtrl as user',
        backdrop: 'static',
        keyboard: false
      });
    }

    this.getCurrentUser = function() {
      return this.currentUser;
    };

    this.setCurrentUser = function(username) {
      $cookieStore.put('blocChatCurrentUser', username);
      this.currentUser = username;
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies','$cookieStore', '$uibModal', BlocChatCookies]);
})();
