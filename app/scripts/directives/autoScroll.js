(function() {
    function autoScroll() {
      return {
        scope: {
          autoScroll: "="
        },
        link: function(scope, element) {
          scope.$watchCollection('autoScroll', function(newValue){
            if(newValue) {
              $(element).scrollTop($(element)[0].scrollHeight);
            }
          });
        }
      };
    }

    angular
        .module('blocChat')
        .directive('autoScroll', autoScroll);
})();
