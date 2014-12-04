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
        this.title = '';
        this.type = 'process';
        this.position = 'ip-provider';
        this.domain = {};
        this.domain.region = {};
        this.valueSpecific = '0';
        this.valueGeneric = '0';
        this.emphasized = false;
        this.predecessors = [];
        this.problems = [];

        // Methods

        this.addPredecessor = function() {
          this.predecessors.push(new Predecessor());
        };

        this.removePredecessor = function(predecessor) {
          var idx = this.predecessors.indexOf(predecessor);
          this.predecessors.splice(idx, 1);
        };

        this.addProblem = function() {
          this.problems.push(new Problem());
        };

        this.removeProblem = function(problem) {
          var idx = this.problems.indexOf(problem);
          this.problems.splice(idx, 1);
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

        // Serialize

        this.serialize = function() {
          return {
            id: this.id,
            title: this.title,
            type: this.type,
            domain: {
                id: this.domain.id,
                region: {
                  type: this.domain.region.type,
                  with_domain: this.domain.region.with_domain
                }
            },
            value_specific: parseInt(this.valueSpecific, 10),
            value_generic: parseInt(this.valueGeneric, 10),
            emphasized: this.emphasized,
            predecessors: this.predecessors.map(function(predecessor) {
              return predecessor.serialize();
            }),
            problems: this.problems.map(function(problem) {
              return problem.serialize();
            })
          };
        };

      }

      return Step;

    }

  ]);

})();
