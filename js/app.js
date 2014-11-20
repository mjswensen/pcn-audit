(function() {

  var app = angular.module('pcnAudit', ['StepModel']);

  app.controller('StepsController', [
    'Step',
    'guid',
    function(Step, guid) {

      this.showAdvanced = false;

      this.data = {};
      this.data.metadata = {};
      this.data.domains = [];
      this.data.domains[0] = {};
      this.data.domains[1] = {};
      this.data.domains[0].id = guid();
      this.data.domains[1].id = guid();
      this.data.domains[0].subtitle = "provider";
      this.data.domains[1].subtitle = "customer";
      this.data.steps = [];

      this.addStep = function() {
        this.data.steps.push(new Step());
      };

      this.expandAll = function() {
        this.data.steps.forEach(function(step) {
          step.expandCompletely();
        });
      };

      this.collapseAll = function() {
        this.data.steps.forEach(function(step) {
          step.collapseCompletely();
        });
      };

    }
  ]);

})();
