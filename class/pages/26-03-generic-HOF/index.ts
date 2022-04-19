// 1. HOF - 일반타입
function firstFunction1 (arg1: string) {
  return function secondFunction1 (arg2: number): [string, number] {
    return [arg1, arg2]
  }
}

const result1 = firstFunction1("유리")(5)

// 2. HOF - any타입
function firstFunction2 (arg1: any) {
  return function secondFunction2 (arg2: any): [any, any] {
    return [arg1, arg2]
  }
}

const result1 = firstFunction2("유리")(5)

// 3. HOF - generic 타입
function firstFunction3 <T>(arg1: T) {
  return function secondFunction3<U>(arg2: U): [T, U] {
    return [arg1, arg2]
  }
}

const result1 = firstFunction3("유리")(5)

// 4. HOF - generic 타입 화살표함수
const firstFunction4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2]
  }

const result1 = firstFunction4("유리")(5)


// 5. HOF - generic 타입 컴포넌트 응용 - HOC 응용해보기
const withAuth = <C>(Component: C) => <P>(props: P): [C, P] => {
    return [Component, props]
  }

const result1 = withAuth("Bbb")({aaa: "호빵맨"})
