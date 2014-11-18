(function() {

  var app = angular.module('pcnAudit', ['StepModel']);

  app.controller('StepsController', [
    'Step',
    function(Step) {

      this.showAdvanced = false;

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

    }
  ]);

})();
