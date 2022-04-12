export default function MapElPage () {
  // 1. 기본방법
  // ["철수", "영희", "훈이"].forEach((el, index) => {
  //   console.log("el", el)
  //   console.log("index", index)
  // })
  
  // ["철수", "영희", "훈이"].forEach((asd, www) => {
  //   console.log("el", asd)
  //   console.log("index", www)
  // })

  // 함수 선언식 방법
  // ["철수", "영희", "훈이"].forEach(function (asd, www){
  //   console.log("el", asd)
  //   console.log("index", www)
  // })
  // el과 index바꾸기
    ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el", index)
    console.log("index", el)
  })
  
  return <div>el 알아보기</div>
}