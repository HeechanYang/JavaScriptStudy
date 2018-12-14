# 연산자

| 종류 | 명칭 | 설명 | 예시 | 비고 |
|------|------|------|-----|-----|
| = | 대입 연산자</br> operator | 변수에 값을 대입 | var a = 1; ||
| == | 동등 연산자</br>equal operator |값이 일치하는지 확인|if(1=='1')</br>--> true| 반대 : !=|
| === | 엄격한 동등 연산자</br>strict equal operator |값과 타입 모두 일치하는지 확인|if(1==='1')</br>--> false| 반대 : !== |
| && | AND 연산자</br> | 둘 다 True여야 True 반환 |if(true && false)</br>--> false||
| \|\| | OR 연산자</br> | 둘 중 하나만 True면 True 반환|if(true \|\| false)</br>--> true||
| ! | 부정 연산자</br> | Boolean값을 역전시킴|if(!false)</br>--> true||

# == vs ===

## 1 vs '1'

1=='1' (true)  
1==='1' (false)

## undefined vs null

undefined == null (true)  
undefined === null (false)

## boolean vs number

true == 1  (true)  
true === 1 (false)  
true == 2  (false)  
true === 2 (false)

false == 0  (true)  
false === 0 (false)


## ===을 쓰자! 

값만 같다고 같은 것이라고 여기면 후에 에러를 발생시킬 소지가 크다.
