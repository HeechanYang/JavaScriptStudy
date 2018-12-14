var a;
console.log(typeof (a)); // undefined
a = 10;
console.log(typeof (a)); // number
a = "txt";
console.log(typeof (a)); // string
a = false;
console.log(typeof (a)); // boolean
a = null;
console.log(typeof (a)); // object???
// console.log('a instanceof null : ' + (a instanceof null)); // Date
a = [1, 2, 3, 4];
console.log(typeof (a)); // object???
console.log('a instanceof Array : ' + (a instanceof Array)); // Date

a = function () { };
console.log(typeof (a)); // function
a = new Date();
console.log(typeof (a)); // object???
console.log('a instanceof Date : ' + (a instanceof Date)); // Date



// "String Object" vs "String Literal"
s = "string1"
console.log()
console.log('typeof("string1") : ' + (typeof ("string1")))
console.log('typeof("string1") === "string" : ' + (typeof ("string1") === "string"));
console.log('"string1" instanceof String : ' + ("string1" instanceof String));
console.log()
console.log('typeof(new String("string1")) : ' + (typeof (new String("string1"))))
console.log('typeof(new String("string1")) === "object" : ' + (typeof (new String("string1")) === "object"));
console.log('typeof(new String("string1")) === string : ' + (typeof (new String("string1")) === "string"));
console.log('new String("string1") instanceof String : ' + (new String("string1") instanceof String));