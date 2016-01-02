'use strict';

describe('Controller: SingleproductCtrl', function () {

  // load the controller's module
  beforeEach(module('ptTailorApp'));

  var SingleproductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleproductCtrl = $controller('SingleproductCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SingleproductCtrl.awesomeThings.length).toBe(3);
  });
});
