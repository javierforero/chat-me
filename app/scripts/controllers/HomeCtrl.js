(function(){
  function HomeCtrl(Room) {
    this.testPhrase = 'Hello, this is my test phrase in the home controller';
    this.roomObject = Room;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room',HomeCtrl]);
})();
