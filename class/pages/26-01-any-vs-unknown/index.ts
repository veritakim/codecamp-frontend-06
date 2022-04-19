// 기존 자바스크립트와 별 차이가 없다.
const getAny = (args: any) => {

  return args + 2
} 
// type any이기때문에 스틑링, 넘버 다 들어갈 수 있다.
const result1 = getAny("맹구")

// unknwon
const getUnkwown = (args: unknown) => {
  if(typeof args === "number") {
    return args + 2
  } else {
    return "숫자를 넣어주세요"
  }
}

const result2 = getUnkwown("철수")