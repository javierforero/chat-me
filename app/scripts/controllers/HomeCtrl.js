(function(){
  function HomeCtrl(Room, Message, BlocChatCookies, $uibModal) {

    this.all = Room.all;
    this.currentRoom = null;
    this.messages = null;

    this.setRoom = function(room){

      this.currentRoom = room;
      this.messages = Room.getMessages(room);
    };

    this.open = function() {
      $uibModal.open({
        templateUrl: '/templates/window.html',
        controller: 'AddWindowCtrl as window'
      });
    };

    this.dismiss = function() {
        $uibModal.dismiss();
    };

    this.send = function() {

      if(this.text) {
        console.log("worked!", this.text);
        // Message.send(BlocChatCookies.currentUser, this.text, this.currentRoom);
      }
    
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room','Message','BlocChatCookies', '$uibModal', HomeCtrl]);
})();
