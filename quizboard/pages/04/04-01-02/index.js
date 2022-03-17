import { useState} from "react";

export default function TestPage () {
  const [name, setName] = useState("")
  
  const arr = [
    {city: "성남시",
    createdAt: "2019-02-24T16:17:47.000Z",
    district: "분당구",
    email: "lee.jungdo@gmail.com",
    id: 1,
    name: "이정도",
    phone: "010-3192-2910",
    province: "경기도",
    street: "대왕판교로 160",
    updatedAt: "2019-02-24T16:17:47.000Z",
    username: "jd1386",
    website: "https://leejungdo.com",
    zipcode: "13525"},
    {city: "서울특별시",
    createdAt: "2019-02-24T16:17:47.000Z",
    district: "관악구",
    email: "jaewan@gmail.com",
    id: 2,
    name: "김재완",
    phone: "02-879-5000",
    province: "",
    street: "관악로 145",
    updatedAt: "2019-02-24T16:17:47.000Z",
    username: "lastrites2018",
    website: "https://github.com/lastrites2018",
    zipcode: "08832"}
  ]

  
  
  const onChangeId = (event) => {
    setName(event.target.value)
  }
  
  const onClickId = () => {
    alert(name);
    const result = arr.findIndex((person) => {person.name = name})
    alert(result)
  }
  


  return (
    <div>
      <div>ID를 검색해보세요</div>
      <input type="text" placeholder="아이디 입력" onChange={onChangeId} />
      <button onClick={onClickId}>검색하기</button>
    </div>
  )


}