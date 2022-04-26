import axios from "axios"
import { useState } from "react"

export default function CallbackQuiz () {
  let add = "http://numbersapi.com/random?min=1&max=200"
  let [contents, setContents] = useState()

  const onClickCallback = () => {
    const req = new XMLHttpRequest()
    req.open("get", add)
    req.send()

    req.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]

      // console.log(num)
      const callbackReq = new XMLHttpRequest()

      callbackReq.open("get", `https://koreanjson.com/posts/${num}`)
      callbackReq.send()

      callbackReq.addEventListener("load", (res) => {
        const user = JSON.parse(res.target.response)
        // console.log(user)
 
        const userId = user.UserId
        // console.log(user)
        
        const lastReq = new XMLHttpRequest()
        lastReq.open("get",`https://koreanjson.com/posts?userId=${userId}`)
        lastReq.send()

        lastReq.addEventListener("load", (res) => {
          let result = JSON.parse(res.target.response)
          setContents(result)
        })

      })

      
    }) 
  }

  const onClickPromise = () => {
    setContents("")
    axios.get(add)
        .then((res) => {
          const num = res.data.split(" ")[0]
          // console.log(num)
          return axios.get(`https://koreanjson.com/posts/${num}`)
        })
        .then((res) => {
          const userId = res.data.UserId
          // console.log("ghdn",userId)
          return axios.get(`https://koreanjson.com/posts?userId=${userId}`)
        })
        .then((res) => {
          // console.log("마",res.data)
          setContents(res.data)
        })

  }

  const onClickAsync = async () => {
    const first = await axios.get(add)
    const num = first.data.split(" ")[0]

    const second = await axios.get(`https://koreanjson.com/posts/${num}`)
    // console.log(second.data)
    const userId = second.data.UserId

    const third = await axios.get(`https://koreanjson.com/posts?userId=${userId}`)
    console.log(third.data)
    setContents(third.data)
  }
  return (
    <div>
      결과: <button onClick={onClickCallback}>Callback</button> <br />
      결과: <button onClick={onClickPromise}>Promise</button><br />
      결과: <button onClick={onClickAsync}>Async/Await</button><br />

      {contents && (
        contents.map((el) => (
          <div key={el.id}>
            <div>{el.title}</div> <br/>
            <div>{el.content}</div>
          </div>
        ))
      )}
    </div>
  )
}