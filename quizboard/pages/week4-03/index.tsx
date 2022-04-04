import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"


export default function QuizCount () {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~")
    inputRef.current?.focus();

    return () => {
      alert("컴포넌트가 제거됩니다~")
    }
  },[])

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  }, [count])

  const onclickCount = () => {
    setCount((prev) => (prev + 1));    
  }
  
  const onClickMove = () => {
    router.push('/')
  }
  console.log("마운트 시작")
  return (
    <div>
      <input type="password" ref={inputRef} />
      <div>카운트 : {count}</div>
      <button onClick={onclickCount}>카운트(+1)</button>
      <button onClick={onClickMove} >이동하기</button>
    </div>

  )

}