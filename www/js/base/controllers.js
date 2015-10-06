/**
 *  Angular + Require JS Base Controller
 *  ver 0.1
 *  NOTE : Angular를 활용한 Base Controller
 *  파일에 Controller를 호출하여 생성해줘야함.
 *
 *  ex) define([
 *    'base/controllers'
 *  ], function (controller) {
 *    controllers.controller('Controller이름', ['$scope',
 *      function ($scope) {
 *        Controller page 작성
 *      }
 *    ]);
 *  });
 */
define(['angular'], function (angular) {
  'use strict';

  return angular.module('controllers', []);
});
