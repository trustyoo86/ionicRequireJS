/**
 *  IONIC + Require JS main.js
 *  초기 화면에서 호출되는 main.js
 *  require js에서의 기본 모듈 설정 및 Angaulr JS 부트스트래핑
 *  domReady Plug in을 사용해서 dom객체 로딩 끝난 후에 angular 자체에서
 *  document 객체를 ng-app으로 부트스트래핑
 */

//require 초기 환경설정
require.config({
  paths : {
    angular : '/lib/ionic/js/angular/angular.min',
    jquery : '/lib/jquery/jquery',
    domReady : '/lib/jquery/domReady',
    ionic : '/lib/ionic/js/ionic.bundle'
  },
  shim : {
    angular : {
      deps : ['jquery'],
      exports : 'angular'
    }
  }
});

require([
  'angular',          //angular
  'app',              //app
  'router',           //router
  'domReady'         //domReady
], function (angular, app, router, domReady, ionic) {
  'use strict';

  //App에 관련된 Router 초기화
  router.init();

  //Angular JS 부트스트래핑
  domReady(function () {
    angular.bootstrap(document, ['MyApp']);

    $('html').addClass('ng-app: MyApp');
  });
});

