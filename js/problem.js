(function() {

  var problemModule = angular.module('ProblemModel', []);

  problemModule.factory('Problem', function() {

    function Problem() {
      this.type = 'inconvenient';
      this.description = '';

      this.serialize = function() {
        return {
          type: this.type,
          description: this.description
        };
      };
    }

    return Problem;

  });

})();
