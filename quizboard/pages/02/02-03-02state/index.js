import { useState } from "react"

export default function AuthNumberStatePage () {
  const [authNum, setRandom] = useState("000000");

  function authRandom () {
    setRandom(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  }

  return (
    <div>
      <div>{authNum}</div>
      <button onClick={authRandom}>인증번호 발송</button>
    </div>
  )
}