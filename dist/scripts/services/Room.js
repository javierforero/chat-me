(function() {
  function Room($firebaseArray) {

    var roomsRef = firebase.database().ref().child("rooms");
    var messagesRef = firebase.database().ref().child("messages");
    var rooms = $firebaseArray(roomsRef);
    var messages = $firebaseArray(messagesRef);

    var roomService = {};


    roomService.all = rooms;

    roomService.addRoom = function (roomTitle) {
      rooms.$add({
        name: roomTitle,
        created_at: firebase.database.ServerValue.TIMESTAMP
      });
    };

    roomService.addMessage = function(userName, content, room) {

      messages.$add({
        username: userName,
        content: content,
        sent_at: firebase.database.ServerValue.TIMESTAMP,
        roomid: room.$id
      });
    };

    roomService.getMessages = function(room) {

      return $firebaseArray(messagesRef.orderByChild('roomid').equalTo(room.$id));


    };

    return roomService;
  }


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
