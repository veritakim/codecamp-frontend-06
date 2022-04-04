import { Component, createRef, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'

interface IState {
  count: number;
}


export default function Counter () {
  const [count, setCount] = useState(99);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  
  // componentDidMount
  // useEffect(() => {
  //   console.log("마운트 됨")
  //   inputRef.current?.focus();
  // }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log("수정되고 다시 그려짐")
  }, [count]);

  // componentDidMount
  // componentWillUnmount
  useEffect(()=> {
    console.log("마운트 됨");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐.")
    }
  }, [])

  // 5 useEffect의 잘못된 사용 예 
  // 무한루프
  useEffect(() => {
    setCount(10)
  }//, [count])
  )
  const onClickCounter = () => {
    setCount((prev) => (prev + 1))
  }

  const onclickMove = () => {
    router.push("/")
  }
  console.log("나는 언제 실행되게??? ")
  return (
    <div>
      <input type='text' ref={inputRef}/>
      <div>현재카운트 {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onclickMove}>나가기 </button>
    </div>
  )
  }
