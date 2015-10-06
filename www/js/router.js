/**
 *  IONIC + RequireJS Router
 *  ver 0.1
 *  NOTE : Router 기능만 따로 분리, 추후에 설정값을 저장하는 용도도 추가 예정
 *  controller를 define을 통해 모듈 호출해야함.
 *  각각의 모듈은 js/module안에서 페이지 단위로 controller 및 service 작성
 */

'use strict';

define([
  'app',                                  //app
  'module/menu/menu-controller',          //AppCtrl
  'module/playlist/playlists-controller'  //PlaylistsCtrl
], function (app) {
  return {
    /**
     *  Router 초기화
     *  @method : init
     */
    init: function () {
      //app Router 설정
      app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'js/module/menu/menu.html',
            controller: 'AppCtrl'
          })
          .state('app.playlists', {
            url: '/playlists',
            views: {
              'menuContent': {
                templateUrl: 'js/module/playlist/playlists.html',
                controller: 'PlaylistsCtrl'
              }
            }
          });

        $urlRouterProvider.otherwise('app/playlists');
      });
    }
  }
});