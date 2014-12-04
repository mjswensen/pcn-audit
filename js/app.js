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

      this.getDomainInfo = function(step) {
          switch(step.domain.combined) {
            case "pro-in-cus":
                step.domain.id = this.domains[0].id;
                step.domain.region = {
                    type: "independent",
                    with_domain: this.domains[1].id
                };
                break;
            case "pro-sur-cus":
                step.domain.id = this.domains[0].id;
                step.domain.region = {
                    type: "surrogate",
                    with_domain: this.domains[1].id
                };
                break;
            case "pro-lead-direct-cus":
                step.domain.id = this.domains[0].id;
                step.domain.region = {
                    type: "direct_leading",
                    with_domain: this.domains[1].id
                };
                break;
            case "pro-direct-cus":
                step.domain.id = this.domains[0].id;
                step.domain.region = {
                    type: "direct_shared",
                    with_domain: this.domains[1].id
                };
                break;
            case "cus-lead-direct-pro":
                step.domain.id = this.domains[1].id;
                step.domain.region = {
                    type: "direct_leading",
                    with_domain: this.domains[0].id
                };
                break;
            case "cus-sur-pro":
                step.domain.id = this.domains[1].id;
                step.domain.region = {
                    type: "surrogate",
                    with_domain: this.domains[0].id
                };
                break;
            case "cus-in-pro":
                step.domain.id = this.domains[1].id;
                step.domain.region = {
                    type: "independent",
                    with_domain: this.domains[0].id
                };
                break;
          }
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
    
  app.directive('autofocusNewInput', function() {
    return {
      priority: 1,
      link: function(scope, element, attr) {
        scope.$watch(attr.autofocusNewInput, function(value) {
          if(value === true) {
            element[0].focus()
            scope[attr.autofocusNewInput] = false
          } // if true
        }) // function
      } // link
    } // return
  }) // autofocusNewInput
  
  app.directive('enterOnInput', function() {
    return {
      priority: 1,
      link: function(scope, element, attr) {
        element.bind('keypress', function(event) {
          if(event.which === 13) {
            scope.$apply(attr.enterOnInput)
          } // if enter key
        }) // bind
      } // link
    } // return
  }) // enterOnInput

})();
