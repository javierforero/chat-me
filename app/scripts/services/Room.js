(function() {
  function Room($firebaseArray) {

    var roomsRef = firebase.database().ref().child("rooms");
    var messagesRef = firebase.database().ref().child("messages");
    var rooms = $firebaseArray(roomsRef);
    var messages = $firebaseArray(messagesRef);
    var roomService = {};


    roomService.all = rooms;
    roomService.currentRoom = null;
    roomService.messages = null;


    roomService.addRoom = function (roomTitle) {
      rooms.$add({
        name: roomTitle,
        created_at: firebase.database.ServerValue.TIMESTAMP
      });
    };

    roomService.addMessage = function(userName, content, roomId) {

      messages.$add({
        username: userName,
        content: content,
        sent_at: firebase.database.ServerValue.TIMESTAMP,
        roomid: roomId
      });
    };

    roomService.getMessages = function (roomId) {

      if(roomService.currentRoom == null) {

        return $firebaseArray(messagesRef.orderByChild('roomid').equalTo(roomId));
      }
    };

    roomService.setRoom = function(room) {
      roomService.currentRoom = room;
    };


    return roomService;
  }


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
