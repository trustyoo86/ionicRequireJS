'use strict';

define([
  'base/controllers'
], function (controllers) {
  controllers.controller('AppCtrl', ['$scope', '$ionicModal', '$timeout',
    function ($scope, $ionicModal, $timeout) {
      $scope.$on('$ionicView.enter', function (e) {

      });

      $scope.loginData = {};

      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope : $scope
      })
        .then(function (modal) {
          $scope.modal = modal;
        });

      $scope.closeLogin = function () {
        $scope.modal.hide();
      };

      $scope.login = function () {
        $scope.modal.show();
      }

      $scope.doLogin = function () {
        $timeout(function () {
          $scope.closeLogin();
        }, 1000);
      }
    }
  ]);
});