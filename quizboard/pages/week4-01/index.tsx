import { useRouter } from "next/router";
import { useEffect, useState } from "react"


export default function QuizCount () {

  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    alert("Rendered!")
  },[])
  
  useEffect(() => {
    alert("Changed!!")
  }, [isChange])

  useEffect(() => {
    return() => {
      alert( "Bye!!")
    }
  }, [])
  
  const onClickChange = () => {
    setIsChange(true);
  }

  const onClickMove = () => {
    router.push('/')
  }
  

  return (
    <div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>

  )

}