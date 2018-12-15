// 배열 생성
var a = new Array(3);
a[0] = 2;
a[3] = 3;
a[5] = 5;

console.log("# console.log(a);");
console.log(a);
console.log("typeof(new Array()) : " + typeof (a));
console.log("a instanceof Array : " + (a instanceof Array));
console.log();

// 배열 생성 Literal
var a = [2, , , 3, , 5];

console.log("# console.log([2,,,3,,5]);");
console.log([2, , , 3, , 5]);
console.log("typeof([2,,,3,,5]) : " + typeof ([2, , , 3, , 5]));
console.log("a instanceof Array : " + (a instanceof Array));
console.log();

// Array.forEach()
console.log("# a.forEach(function(element){");
a.forEach(function (element) {
    process.stdout.write(element + " ");
})
console.log("\n");


// 다차원 배열, 기본적으로 다차원배열을 지원하진 않음
var array2D = new Array();
for (var i = 0; i < 9; i++) {
    array2D[i] = new Array();
}
// 배열 길이 지정하여 생성 가능, but 후에 배열 길이 마음대로 조절 가능
// console.log(array2D+"\n"); // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,??
console.log(array2D);
console.log();

//for문을 이용한 2차원배열 접근
for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        array2D[i][j] = (i + 1) * (j + 1);
    }
}

// forEach를 이용한 2차원배열 접근
array2D.forEach(function (eachArray) {
    eachArray.forEach(function (element) {
        process.stdout.write(element + " ");
    })
    console.log();
})