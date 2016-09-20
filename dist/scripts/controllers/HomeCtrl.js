(function(){
  function HomeCtrl(Room, $uibModal) {
    
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
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();
