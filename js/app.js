(function() {

  var app = angular.module('pcnAudit', []);

  app.controller('StepsController', function() {

    this.showAdvanced = false;

    this.steps = [{
      title: 'test',
      problems: [1,2]
    }];

    this.addStep = function() {
      this.steps.push({
        title: 'New Step',
        problems: []
      });
    };

  });

})();
