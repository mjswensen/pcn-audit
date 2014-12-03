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

      this.isFirstStep = function(step) {
        return step === this.data.steps[0];
      };

      this.isLastStep = function(step) {
        return step === this.data.steps[this.data.steps.length-1];
      };

      this.moveStepUp = function(step) {
        var idx = this.data.steps.indexOf(step);
        this.data.steps.splice(idx, 1);
        this.data.steps.splice(idx-1, 0, step);
      };

      this.moveStepDown = function(step) {
        var idx = this.data.steps.indexOf(step);
        this.data.steps.splice(idx, 1);
        this.data.steps.splice(idx+1, 0, step);
      };

      this.removeStep = function(step) {
        var idx = this.data.steps.indexOf(step);
        this.data.steps.splice(idx, 1);
      };

    }
  ]);

})();
