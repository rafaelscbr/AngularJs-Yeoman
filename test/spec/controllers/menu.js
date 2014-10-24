'use strict';

describe('Controller: MenuctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('estudoApp'));

  var MenuctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuctrlCtrl = $controller('MenuctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
