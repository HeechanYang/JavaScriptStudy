객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다.

# JavaScript의 Object

## Literal 객체

```javascript
// 비어있는 Literal 객체를 pet이라는 변수에 삽입
let pet = {}
// 객체의 name이라는 property의 값을 초기화
pet.name = 'heechan'
// 객체의 attack이라는 property를 function으로 초기화
pet.attack = function(){
    return "Attack!";
}

console.log(pet.name + " - " + pet.attack());
```

## 생성자로 만든 객체

```javascript
// 일반적인 객체지향 언어에서 생성자는 클래스의 소속이다. 
// 하지만 자바스크립트에서 객체를 만드는 주체는 함수다.
function Pet(_name, _type){
    // 함수 안에서 만든 변수는 외부에서 접근 불가
    let localName = _name;
    let localType = _type;
    // this.변수 외부에서 접근 가능
    this.name = _name;
    this.type = _type;

    this.attack = function(){
        console.log("Attack!");
    }

    this.getInfo = function(){
        console.log(this.name + " - " + this.type);
    }
}

// new 연산자를 이용한 Pet 객체 생성
let sugar = new Pet("sugar", "dog");
let baron = new Pet("baron", "cat");

console.log(sugar.name + " - " + sugar.type);
// sugar - dog

console.log(sugar.localName + " - " + sugar.localType);
// undefined - undefined

sugar.name = "sugar2"
sugar.getInfo();
// sugar2 - dog

baron.getInfo();
// baron - cat
```

# 상속

```js
// 매번 타입을 명시해주기보단 Pet을 상속받은 Cat class 생성
function Cat(_name){
    this.name = _name;
    this.type = "cat";

    // cry이라는 함수를 재정의
    this.cry = function(){
        console.log("Meaw!");
    }
}
// 상속 
// Cat의 prototype에 Pet 객체 생성하여 대입
Cat.prototype = new Pet();

// jelly라는 이름의 Cat객체 생성
let jelly = new Cat("jelly");

// 상속 받은 printInfo() 
jelly.printInfo();
// jelly - cat

jelly.cry();
// Meaw!
```

prototype에 대해선 [다음 포스터](./8_Prototype.md)에서 다룰 예정입니다.  

# 참고 문헌
- [https://opentutorials.org](https://opentutorials.org)
