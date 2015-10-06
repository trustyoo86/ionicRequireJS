# ionicRequireJS

ionic + Require JS Modular
--------------------------------------
ionic service를 위한 Modular입니다.
Angular JS를 사용하며, AMD 기능으로 Require JS를 사용했습니다.

모듈화는 페이지 단위로 controller 및 service를 개발하게끔 되어 있습니다.
받아보시고, 테스트는

ionic serve

를 통해서 테스트 해보실 수 있습니다.

개요
--------------------------------------
현재 설계되어 있는 구조는 domReady plug in을 사용하여
App 시작시에 각각의 디펜던시들을 로딩하고,
모든 디펜던시가 로딩된 후에 Angular JS앱 자체를 실행하기 위한 부트스트래핑(Angular js 내장)
을 실행하게 됩니다.

구조는 다음과 같이 설계되었습니다.
www/\n
  /js\n
    /base\n
    /module\n
    app.js\n
    main.js\n
    router.js\n
    

1) main.js
require js를 통한 App 내에서 사용하기 위한 기본 모듈 설정 및, angular JS를 실행시키기 위한 실행부가 존재합니다.
2) app.js
Angular JS를 사용하기 위한 app.module 실행부가 존재합니다. app내의 설정도 같이 관리하게 됩니다.
3) router.js
Angular JS를 사용하기 위한 라우팅 기능을 하는 것으로써, 각 페이지 내의 controller들을 define 모듈을 통해 불러와야
합니다.
3) base
controller, directive, service, filter를 로딩하기 위한 기본적인 base를 생성합니다. 모든 controller들은 이 base내의 모듈을 사용하여 각각의 모듈을 정의하게 됩니다.
4) module
App에서 사용하기 위한 페이지 내의 html파일 및 controller파일을 포함하고 있습니다.
