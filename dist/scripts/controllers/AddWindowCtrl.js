(function() {
  function AddWindowCtrl($uibModalInstance) {
    this.dismiss = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('AddWindowCtrl', ['$uibModalInstance', AddWindowCtrl]);
})();
