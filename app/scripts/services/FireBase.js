(function(){

  function Room($firebaseArray) {

    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref);

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
