(function(){
  function HomeCtrl(Room, Message,$cookies, $uibModal) {

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
      var myUser = $cookies.getObject('blocChatCurrentUser');
      console.log(myUser);
      if(this.text && this.currentRoom) {
        Message.send(myUser, this.text, this.currentRoom);
        this.text = '';
      }

    };
 }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room','Message','$cookies', '$uibModal', HomeCtrl]);
})();
