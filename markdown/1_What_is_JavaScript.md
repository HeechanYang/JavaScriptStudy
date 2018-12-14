

JavaScript는 웹브라우저를 프로그래밍적으로 제어하기위해 고안된 언어이며, HTML이 한번 화면에 출력된 후에는 그 형태나 동작방법을 바꿀 수 없는 문제를 해결하기 위해서 네스케이프에서 만들어졌습니다.
하지만 최근에 자바스크립트는 웹브라우저를 벗어나 서버와 그 밖에 JavaScript 엔진이 있는 모든 디바이스에서 작동할 수 있게 되었습니다.

# 왜 "JavaScript"인가?

초기 명칭은 원래 "Mocha"였고, 이후 "LiveScript"로 바뀌었다고 합니다. 하지만 그 당시 "Java"가 매우 유명했고, 그 유명세에 편승하고자 "JavaScript"로 개명했다고 합니다. 하지만 JavaScript가 발전하면서 완전 독립적인 언어가 되었고, Java와는 전혀 관계가 없게 됩니다.

# JavaScript의 특징

- 스크립트 언어
    - 실행하기 전, 특별한 준비나 컴파일이 필요 없음

# 웹브라우저별 JavaScript 엔진

- Chrome - V8
- Opera - V8
- FireFox - SpiderMonkey
- IE - Trident, Chakra
- Safari - SquirrelFish
- etc..

## JavaScript 엔진이 하는 일
1. 엔진이 스크립트를 파싱
2. 파싱한 것을 컴파일 --> 기계어
3. 디바이스가 기계어로 된 코드를 실행

엔진은 각 단계에서 최적화를 거친다.

# ECMAScript(ES)?

여러 웹브라우저들이 각자 JavaScript를 지원하기 시작했고, JavaScript 표준의 필요성은 점점 커져갔습니다. 결국 ECMA(European Computer Manufacturers Association)라는 국제기구에서 ECMA-262라는 표준 기술 규격을 내놓게 되었고, ECMA-262를 따른 스크립트언어를 ECMAScript, 줄여서 ES라고 부르게 되었습니다.

여기서 주의할 것이 JS===ES가 아니다.  
**JS**는 **언어**이고 **ES**는 **ES-262**라는 JS의 **스펙**을 구현한 **구현체**이다.  
이는 **Java**라는 언어와, Java의 **스펙**인 **JSR 336** 등을 구현한 **구현체**인 **OpenJDK**와 같은 관계이다.

## ES의 여러 버전
- ...
- ES2015 (**ES6**)  
    - Added let and const.
    - Added default parameter values.
    - Added Array.find().
    - Added Array.findIndex().
- ES2016 (**ES7**)  
    - Added exponential operator (**).
    - Added Array.prototype.includes.
- ES2017 (**ES8**)
    - Added string padding.
    - Added new Object properties.
    - Added Async functions.
    - Added Shared Memory.
- ES2018 (**ES9**)
    - Added rest / spread properties.
    - Added Asynchronous iteration.
    - Added Promise.finally().
    - Additions to RegExp.

## 각 브라우저별 ES버전 지원 정도

http://kangax.github.io/compat-table/es6/  

아직까지는 ES6를 사용하는게 안전할 듯! - 2018.12 기준

# JavaScript의 여러 프레임워크

- 프론트엔드
    - Vue.js
    - React.js
    - Angular.js


# JavaScript로 할 수 있는 일들

- 웹페이지 스크립팅 - DOM
- 서버 측 스크립팅 - node.js
- 브라우저 확장기능
    - Google Chrome extensions
    - Opera extensions
    - Apple Safari 5 extensions
    - Apple Dashboard Widgets
    - Microsoft Gadgets
    - Yahoo! Widgets
    - Google Desktop Gadgets
    - Serence Klipfolio
- Adobe PDF
- Tools in the Adobe Creative Suite,
    - Photoshop
    - Illustrator
    - Dreamweaver
    - InDesign
- OpenOffice.org
- Unity 게임 엔진
- Google Apps Script
    - Google Spreadsheets
    - Google Sites
- 채팅 시스템
    - ChatZilla
    - XChat

# Languages over JavaScript

- CoffeeScript
- TypeScript
- Dart 

# 참고 문헌
- https://opentutorials.org/course/743/4650
- https://javascript.info/intro
- https://d2.naver.com/helloworld/3259111