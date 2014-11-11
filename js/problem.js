(function() {

  var problemModule = angular.module('ProblemModel', []);

  problemModule.factory('Problem', function() {

    function Problem() {
      this.type = 'inconvenient';
      this.description = '';
    }

    return Problem;

  });

})();
