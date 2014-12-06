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
      this.domains[0].subtitle = 'Provider';
      this.domains[1].subtitle = 'Customer';
      this.steps = [];

      this.addStep = function() {
        var lastIndex = this.steps.length - 1;
        this.steps.push(new Step(this));
        if (lastIndex > 0) {
          if (this.steps[lastIndex].collapsed === false) {
            this.steps[lastIndex + 1].collapsed = false;
          }
        }
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

      this.serialzeDomains = function() {
        return [
          {
            id: this.domains[0].id,
            title: this.domains[0].title || 'Provider',
            subtitle: this.domains[0].subtitle
          },
          {
            id: this.domains[1].id,
            title: this.domains[1].title || 'Customer',
            subtitle: this.domains[1].subtitle
          }
        ];
      };

      this.serialize = function() {
        return {
          metadata: this.metadata,
          domains: this.serialzeDomains(),
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
            element[0].focus();
            scope[attr.autofocusNewInput] = false;
          } // if true
        }); // function
      } // link
    }; // return
  }); // autofocusNewInput

  app.directive('enterOnInput', function() {
    return {
      priority: 1,
      link: function(scope, element, attr) {
        element.bind('keypress', function(event) {
          if(event.which === 13) {
            scope.$apply(attr.enterOnInput);
          } // if enter key
        }); // bind
      } // link
    }; // return
  }); // enterOnInput

  app.directive('selectOnFocus', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('focus', function () {
            this.select();
        });
      }
    };
  });

})();
