// for
console.log("for")
for (var a = 0; a < 5; a++) {
    console.log(a);
}

// while
console.log("while")
var a = 0;
while (a < 5) {
    console.log(a);
    a++;
}

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

//do-while
console.log("do-while");
var a = 0;
do {
    console.log(a);
    a++;
} while (a < 5);

// Array.foreach()
console.log("Arrays.foreach()");
var array1 = ['a', 'b', 'c'];
array1.forEach(function (element) {
    console.log(element);
});