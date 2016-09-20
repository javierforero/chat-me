(function (){

    function BlocChatCookies($cookies, $uiModal) {

      var currentUser = $cookies.get('blocChatCurrentUser');

      if(!currentUser || currentUser === '') {

        $uiModal.open({
          templateUrl: '/templates/usernameprompt.html',
          controller: 'UsernamePromptCtrl as username'
        });
      }

    }

    angular
      .module('blocChat')
      .run(['$cookies', '$uiModal', BlocChatCookies]);
})();
