(function() {
  function autoScroll() {

    return {
      restrict: 'A',
      scope: {},
      link: function (scope, element) {
        // scope.$watchCollection('autoScroll', function (newValue) {
        //   if (newValue){
        //     $(element).scrollTop($(element)[0].scrollHeight);
        //   }
        // });
        alert('hi!');
      }
    }

  angular
    .module('blocChat')
    .directive('autoScroll', autoScroll);
})();
