/**
 *  ionic + Require JS Angular app.js
 *  require js를 통한 main.js 호출 후, 부트스트래핑 된 상태에서 app 설정.
 *  base가 되는 controller, direcitve, service, filter를 호출.
 *  IONIC App이기 떄문에, ionic 모듈 꼭 호출해야함.
 */

'use strict';

define([
  'angular',
  'ionic',
  'base/controllers',
  'base/services',
  'base/filters',
  'base/directives'
], function (angular) {
  return angular.module('MyApp', ['ionic', 'controllers', 'services', 'filters', 'directives'])
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    });
});
