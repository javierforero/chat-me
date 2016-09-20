(function(){

  function UsernamePromptCtrl($uibModalInstance, $cookieStore) {


    this.submit = function() {
      if(this.text) {

        $cookieStore.put('blocChatCurrentUser', this.text);
        this.text = '';
        $uibModalInstance.close();
      }

    };


  }

  angular
    .module('blocChat')
    .controller('UsernamePromptCtrl',['$uibModalInstance','$cookieStore', UsernamePromptCtrl]);
})();
