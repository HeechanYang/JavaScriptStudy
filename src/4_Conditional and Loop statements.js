// if
console.log("if");
var num = 4;
if (num < 5) {
    console.log(num + " is less than 5.");
} else if (number == 5) {
    console.log(num + " is 5.");
} else {
    console.log(num + " is bigger than 5.");
}
console.log();

// switch
console.log("switch");
switch (num % 2) {
    case 0:
        console.log(num + " is even number.");
        break;
    case 1:
        console.log(num + " is odd number.");
        break;
    default:
        console.log(num + " is not an integer.");
        break;
}
console.log();

// 3항 연산자
console.log("ternary operator")
console.log(num % 2 == 0 ? num + " is even number." : num + " is odd number.");
console.log();

// for
console.log("for")
for (var a = 0; a < 5; a++) {
    console.log(a);
}
console.log();

// while
console.log("while")
var a = 0;
while (a < 5) {
    console.log(a);
    a++;
}
console.log();

// while-break
console.log("while-break")
var a = 0;
while (true) {
    console.log(a);
    a++;
    if (a === 5) {
        break;
    }
}
console.log();

//do-while
console.log("do-while");
var a = 0;
do {
    console.log(a);
    a++;
} while (a < 5);
console.log();

// Array.foreach()
console.log("Arrays.foreach()");
var array1 = ['a', 'b', 'c'];
array1.forEach(function (element) {
    console.log(element);
});