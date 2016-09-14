(function() {
  function AddWindowCtrl($uibModalInstance, Room) {

    this.roomService = Room;

    this.dismiss = function() {
      $uibModalInstance.dismiss('cancel');
    };

    this.submit = function() {
      if(this.text) {

        this.roomService.addRoom(this.text);
        this.text = '';
        $uibModalInstance.close();
      }

    };
  }

  angular
    .module('blocChat')
    .controller('AddWindowCtrl', ['$uibModalInstance','Room', AddWindowCtrl]);
})();
