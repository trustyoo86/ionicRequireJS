/**
 *  Angular + Require JS Base Service
 *  ver 0.1
 *  NOTE : Angular를 활용한 Base Service
 *  파일에 Services를 호출하여 생성해줘야함.
 *
 *  ex)
 *  define([
 *    'base/services'
 *  ], function (services) {
 *    services.factory('Service이름', [
 *      function () {
 *        return {
 *          get : function () {
 *
 *          }
 *        }
 *      }
 *    ]);
 *  });
 */

define(['angular'], function (angular) {
  'use strict';

  return angular.module('services', []);
});