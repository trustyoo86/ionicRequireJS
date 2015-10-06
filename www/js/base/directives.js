/**
 *  Angular + Require JS Base Directive
 *  ver 0.1
 *  NOTE : Angular를 활용한 Base Directive
 *  파일에 Directives를 호출하여 생성해줘야함.
 *
 *  ex)
 *  define([
 *    'base/directives'
 *  ], function (directives) {
 *    directives.directive('Directive이름', ['$rootScope',
 *      function ($rootScope) {
 *        return {
 *          restrict : 'A',
 *          scope : true,
 *          link : function () {
 *
 *          }
 *        }
 *      }
 *    ]);
 *  });
 */

'use strict';

define(['angular'], function (angular) {
  'use strict';

  return angular.module('directives', []);
});