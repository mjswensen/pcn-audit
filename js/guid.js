(function() {

  var guidModule = angular.module('GuidGenerator', []);

  guidModule.factory('guid', function() {

    // From http://stackoverflow.com/a/105074/926279
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      };
    })();

    return guid;

  });

})();
