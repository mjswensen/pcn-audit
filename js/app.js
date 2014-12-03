(function() {

  var app = angular.module('pcnAudit', ['StepModel']);

  app.controller('StepsController', [
    'Step',
    'guid',
    function(Step, guid) {

      this.showAdvanced = false;

      this.metadata = {};
      this.domains = [];
      this.domains[0] = {};
      this.domains[1] = {};
      this.domains[0].id = guid();
      this.domains[1].id = guid();
      this.domains[0].subtitle = "provider";
      this.domains[1].subtitle = "customer";
      this.steps = [];

      this.addStep = function() {
        this.steps.push(new Step());
      };

      this.expandAll = function() {
        this.steps.forEach(function(step) {
          step.expandCompletely();
        });
      };

      this.collapseAll = function() {
        this.steps.forEach(function(step) {
          step.collapseCompletely();
        });
      };

      this.isFirstStep = function(step) {
        return step === this.steps[0];
      };

      this.isLastStep = function(step) {
        return step === this.steps[this.steps.length-1];
      };

      this.moveStepUp = function(step) {
        var idx = this.steps.indexOf(step);
        this.steps.splice(idx, 1);
        this.steps.splice(idx-1, 0, step);
      };

      this.moveStepDown = function(step) {
        var idx = this.steps.indexOf(step);
        this.steps.splice(idx, 1);
        this.steps.splice(idx+1, 0, step);
      };

      this.removeStep = function(step) {
        var idx = this.steps.indexOf(step);
        this.steps.splice(idx, 1);
      };

      this.serialize = function() {
        return {
          metadata: this.metadata,
          domains: this.domains,
          steps: this.steps.map(function(step) { return step.serialize(); })
        };
      };

    }
  ]);

})();
