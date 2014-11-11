(function() {

  var stepModelModule = angular.module('StepModel', [
    'GuidGenerator',
    'PredecessorModel',
    'ProblemModel'
  ]);

  stepModelModule.factory('Step', [
    'guid',
    'Predecessor',
    'Problem',
    function(guid, Predecessor, Problem) {

      function Step() {

        // Members

        this.id = guid();
        this.title = 'New Step';
        this.type = 'process';
        this.position = 'ip-provider';
        this.specificValue = 'zero';
        this.genericValue = 'zero';
        this.emphasized = false;
        this.predecessors = [];
        this.problems = [];

        // Methods

        this.addPredecessor = function() {
          this.predecessors.push(new Predecessor());
        };

        this.addProblem = function() {
          this.problems.push(new Problem());
        };

      }

      return Step;

    }

  ]);

})();
