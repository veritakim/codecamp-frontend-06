import { useState } from "react"

// 1. 문자타입
const getString = (arg: string): string=> {
  return arg
}

const result1 = getString("철수")

// 2. 숫자타입
const getNumber = (arg: number): number=> {
  return arg
}

const result2 = getNumber(3)

// 3. any타입
const getAny2 = (arg: any): any => {

  return arg
}

const result3 = getAny2("맹구")
const result3 = getAny2(25)

// 4. any 타입2. getAnys
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1]
}

const result4 = getAnys("짱구", "떡잎유치원", "5")



// 5. generic type
function getGeneric<MyType>(arg: MyType): MyType { 
  return arg
}
const aaa: string = "맹구"
const bbb: number = 25
const ccc: boolean = true

const result5_1 = getGeneric(aaa)
const result5_2 = getGeneric(bbb)
const result5_3 = getGeneric(ccc)


// 6. generic type2
function getGenerics<Mytype1,Mytype2,Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype3): [Mytype3, Mytype2, Mytype1] {

  return [arg3, arg2, arg1]
}

const result6 = getGenerics("짱구", "떡잎유치원", 5)


// 7. generic 축약1
function getT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {

  return [arg3, arg2, arg1]
}

const result7 = getT("짱구", "떡잎유치원", 5)

// 8. generic 명시하기
function getTuv2<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {

  return [arg3, arg2, arg1]
}
// 8. generic 화살표 함수
/*
const getTuv3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {

  return [arg3, arg2, arg1]
}
*/


const result8 = getTuv2<string, string, number>("짱구", "떡잎유치원", 5)

// 제네릭 타입 명시하기
const apple: number = 10


// type을 명시하고 시프염ㄴ
/*
const [school, setSchool] = useState<string>("다람쥐초등학교")
*/