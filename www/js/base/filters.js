/**
 *  Angular + Require JS Base Filter
 *  ver 0.1
 *  NOTE : Angular를 활용한 Base Filter
 *  파일에 filters를 호출하여 생성해줘야함.
 *
 *  ex)
 *  define([
 *    'base/filters'
 *  ], function (filters) {
 *    filters.filter('Filter 이름', ['$scope',
 *      function ($scope) {
 *        Filter 코드 작성
 *      }
 *    ]);
 *  });
 */

define(['angular'], function (angular) {
  'use strict';

  return angular.module('filters', []);
});
