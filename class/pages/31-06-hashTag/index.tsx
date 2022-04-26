import { KeyboardEvent, useState } from "react"

export default function HashTagPage () {
  const [hashTag, setHashTag] = useState("")
  const [hashArray, setHashArray] = useState([])

  const onKeyUpHash = (event: any) => {
    // keyCode의 32는 space
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArray([...hashArray, `#${event.target.value}`])
      event.target.value = ""
    }
  }

  // 삭제는 splice를 이용

  return (
    <>
      <div>
        <span>{hashArray.map((el, idx) => (
          <span key={idx}>el</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash}/>
      </div>
    </>
  )
}