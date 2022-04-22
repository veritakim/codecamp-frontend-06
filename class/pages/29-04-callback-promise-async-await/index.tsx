import axios from "axios"

export default function CallbackPromiseAsyncAwaitPage () {

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest()
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200")
    aaa.send()
    // 응답이 왔을 때
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]
      
      console.log(num)
      const bbb = new XMLHttpRequest()
      bbb.open("get", `http://koreanjson.com/posts/${num}`)
      bbb.send()
      
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.UserId

        const ccc = new XMLHttpRequest()
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`)
        ccc.send()

        ccc.addEventListener("load", (res) => {
          // 최종 결과값
          console.log(res)
        })
      })
    })
  }

  // 시간이 걸리는 작업을 할때 . ex 외부 api요청할 때
  // new Promise((resolve, reject) => {
  //   // 외부 요청 코드

  //   // 성공
  //   resolve("철수")

  //   // 실패
  //   reject("에러발생")

  // }).then((res) => {}).catch(err => {})

  const onClickPromise = () => {
    // axios가 왜 promise인가?
    // axios는 async await가 없던 시절 promise로 만들어진게 axios다.
    /*
    axios.get("http://numbersapi.com/random?min=1&max=200")
        .then((res) => axios.get(`http://koreanjson.com/posts/${res}`)
        .then((res) => console.log)
        )
    */
    console.log("여기는 1번")
    axios
    .get("http://numbersapi.com/random?min=1&max=200")
    .then((res) => {
        console.log("여기는 2번")
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
    })
    .then((res) => {
      console.log("여기는 3번")
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`)
    })
    .then((res) => {
      console.log("여기는 4번")
        console.log(res);
    });    
    console.log("여기는 5번")
  }

  const onClickAsync = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200")

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200")

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200")

  }
  

  return (
    <div>
     <button onClick={onClickCallback}>Callback 요청하기</button>
     <button onClick={onClickPromise}>Promise 요청하기</button>
     <button onClick={onClickAsync}>Async/await 요청하기</button>
    </div>
  )
}