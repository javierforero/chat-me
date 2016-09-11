(function(){
  function HomeCtrl(Room) {
    this.testPhrase = 'Hello, this is my test phrase in the home controller';
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room',HomeCtrl]);
})();
