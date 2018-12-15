# JavaScript의 조건문

## if-else if-else

```javascript
var num = 4;
if (num < 5) {
    console.log(num + " is less than 5.");
} else if (number == 5) {
    console.log(num + " is 5.");
} else {
    console.log(num + " is bigger than 5.");
}
```


```text
4 is less than 5.
```

## switch-case

```javascript
var num = 4;
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
```

```text
4 is even number.
```

## 3항 연산자

```javascript
var num = 4;
console.log(num % 2 == 0 ? num + " is even number." : num + " is odd number.");
```

```text
4 is even number.
```

# JavaScript의 반복문

## for

```javascript
for (var a = 0; a < 5; a++) {
    console.log(a);
}
```

```text
0
1
2
3
4
```

## while

```javascript
var a = 0;
while (a < 5) {
    console.log(a);
    a++;
}
```

```text
0
1
2
3
4
```

## do-while

```javascript
var a = 0;
do {
    console.log(a);
    a++;
} while (a < 5);
```

```text
0
1
2
3
4
```

## Array.foreach()

```javascript
var array1 = ['a', 'b', 'c'];
array1.forEach(function (element) {
    console.log(element);
});
```

```text
a
b
c
```

# 반복 제어

break; : 현재의 반복문을 종료함  

continue; : 이번 반복을 건너뛰고 다음 반복으로 이동

# 참고 문헌
- [https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Looping_code](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Looping_code)