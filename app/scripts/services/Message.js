(function(){
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages =  $firebaseArray(ref);
    this.myMessage = {};

    this.myMessage.send = function(userName, content, room) {

      messages.$add({
        username: userName,
        content: content,
        sent_at: firebase.database.ServerValue.TIMESTAMP,
        roomid: room.$id
      });

    };

    return this.myMessage;


  }

  angular
    .module('blocChat')
    .factory('Message',['$firebaseArray','$cookies', Message]);
})();
