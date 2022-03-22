
export default function BonusPage1 () {
  const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교"},
    { name: "영희", age: 13, school: "다람쥐초등학교"},
    { name: "훈이", age: 11, school: "토끼초등학교"}
  ]
  
  // school이 토끼초등학교, candy: 10개를 추가해준다
  classmates.filter((el) => el.school === "토끼초등학교")
      .map((el) => ({name: el.name, age: el.age, school: el.school, candy: "10개"}))
  
  // school이 다람쥐초등학교, 이름뒤에 어린이를 붙여준다
  classmates.filter((el) => el.school === "다람쥐초등학교").map((el) => (
    {name: el.name + "어린이", age: el.age, school: el.school}))

    return (
      <div></div>
    )
}

