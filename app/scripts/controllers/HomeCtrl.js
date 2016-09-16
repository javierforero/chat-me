(function(){
  function HomeCtrl(Room, $uibModal) {

    this.roomObject = Room;

    this.open = function() {
      $uibModal.open({
        templateUrl: '/templates/window.html',
        controller: 'AddWindowCtrl as window'
      }).result.then(function(arg) {
        console.log(this) // this is not what you expect
        Room.addRoom(arg.roomName) // so we can't use this.roomObject
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
