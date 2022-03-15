import { useState } from "react"

export default function SignStatePage () {
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const [emailError, setEmailError] = useState("")

  function onChangeEmail (event) {
    // event 내가 변경한 사항들
    // event.target 하면 이메일 태그 전체
    // event.target.value 우리가 입력한 이메일의 값
    setEmail(event.target.value)

  }

  function onChangePassWord (event) {
    setPassWord(event.target.value)
  }

  //함수를 바인딩 한다.(연결 시킨다)
  function onClickSignUp () {
    // 유효성 체크하는 곳

    // 진짜 포장이 잘 됐는지 확인
    console.log("email", email);
    console.log("password", password);

    if(!email.includes("@")) {
      // alert("이메일이 올바르지 않습니다.")
      setEmailError("이메일이 올바르지 않습니다.")
    } else {
      alert("회원가입을 축하합니다.") 
    }

  }

  return(
    <div>
      이메일 : <input type='text' onChange={onChangeEmail}/><br/>
      <div>{emailError}</div>
      비밀번호 : <input type='password' onChange={onChangePassWord}/><br/>
      <button onClick={onClickSignUp}>회원가입</button>
    </div>
  )
}