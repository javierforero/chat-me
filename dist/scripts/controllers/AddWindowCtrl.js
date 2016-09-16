(function() {
  function AddWindowCtrl($uibModalInstance, Room) {

    this.roomService = Room;

    this.dismiss = function() {
      $uibModalInstance.dismiss('cancel');
    };

    this.foo = function() {
      if(this.text) {
        $uibModalInstance.close({ roomName: this.text });
        this.text = '';
      }

    };
  }

  angular
    .module('blocChat')
    .controller('AddWindowCtrl', ['$uibModalInstance','Room', AddWindowCtrl]);
})();
