'use strict';

/**
 * @ngdoc function
 * @name estudoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the estudoApp
 */
  angular.module('estudoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

	angular.module('estudoApp')
		.controller('meuCtrl', function ($scope) {
		$scope.todos = ['item1', 'item2', 'item3'];

 		$scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
		};

		$scope.removeTodo = function (index) {
			$scope.todos.splice(index, 1);
		}

	});


