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

        // UI

        this.collapsed = false;

        this.toggleVisibility = function() {
          this.collapsed = !this.collapsed;
        };

        this.collapsedSections = {
          type: false,
          position: false,
          predecessors: false,
          value: false,
          other: false,
          problems: false
        };

        this.toggleSectionVisibility = function(sectionKey) {
          this.collapsedSections[sectionKey] = !this.collapsedSections[sectionKey];
        };

        this.collapseCompletely = function() {
          this._configureCompletelyCollapsed(true);
        };

        this.expandCompletely = function() {
          this._configureCompletelyCollapsed(false);
        };

        this._configureCompletelyCollapsed = function(collapsed) {
          this.collapsed = collapsed;
          for (var key in this.collapsedSections) {
            this.collapsedSections[key] = collapsed;
          }
        };

      }

      return Step;

    }

  ]);

})();
