'use strict';

/**
 * @ngdoc function
 * @name estudoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the estudoApp
 */
angular.module('estudoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
