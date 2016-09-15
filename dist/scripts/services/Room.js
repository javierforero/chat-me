(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var roomService = {};


    roomService.all = rooms;
    roomService.addRoom = function (roomTitle) {
      rooms.$add({name: roomTitle});
    };

    roomService.currentRoom = null;

    roomService.setSong = function(song) {
      roomService.currentRoom = song;
    };

    return roomService;
  }


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
