(function() {

  var predecessorModule = angular.module('PredecessorModel', []);

  predecessorModule.factory('Predecessor', function() {

    function Predecessor() {
      this.id = '';
      this.type = 'normal';
      this.title = '';

      this.serialize = function() {
        return {
          id: this.id,
          type: this.type,
          title: this.title
        };
      };
    }

    return Predecessor;

  });

})();
