# JavaScript의 자료형

JavaScript는 느슨한 타입(Loosely Typed) 언어이다. 여기서 느슨한 타입(동적 타이핑)이란 변수의 타입을 미리 선언할 필요가 없고, 대신에 프로그램이 동작하면서 자동으로 타입을 파악하는 방식을 말한다.

```javascript
var a;
console.log(typeof(a)); // undefined
a = 10;
console.log(typeof(a)); // number
a = "txt";
console.log(typeof(a)); // string
a = false;
console.log(typeof(a)); // boolean
a = null;
console.log(typeof(a)); // object???
```

```
undefined
number
string
boolean
object
object
```

## JavaScript 자료형의 종류

- 기본 자료형 (Primitive type) 6가지
    - undefined
        - undefined
    - number ( 배정밀도 64비트방식, -(2<sup>53</sup> -1) ~ 2<sup>53</sup> -1 )
        - 1, 1.1, -1.3, Infinity, -Infinity, NaN(Not a Number)
    - string
        - "text"
    - boolean
        - true, false
    - null
        - null
    - symbol (ES6에 추가됨) : 유일하고 변경 불가능한 (immutable) 기본값 (primitive value) 
        - Java의 enum type과 유사
- 객체 (Object) : Key-Value 매핑
- Date
- Array

# 참고 문헌
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)