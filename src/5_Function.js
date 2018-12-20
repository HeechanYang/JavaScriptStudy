// 함수
function helloFunction() {
    console.log('hello');
}

// 익명 함수 생성 및 변수에 삽입
var helloFunction = function () {
    console.log('hello');
}

console.log(typeof(helloFunction));
console.log("helloFunction instanceof object : " + (helloFunction instanceof Object));
console.log("helloFunction instanceof Function : " + (helloFunction instanceof Function));