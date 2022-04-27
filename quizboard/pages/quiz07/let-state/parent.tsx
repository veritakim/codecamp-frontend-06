import { useCallback, useMemo, useState } from "react"
import ChildLetStatePage from "./child"

export default function LetStateParentPage () {
  let count = 0

  const [countState, setCountState] = useState(0)

  
  /*
  const onClickLetCount = useMemo(() => { 
    return () => {
      console.log(count + 1)
      count += 1
    }
  }, [])
  */
  
  const onClickLetCount = useCallback(() => {
    console.log(count + 1)
    count += 1
  }, [])


  /*
  const onClickStateCount = useCallback(() => {
    setCountState((prev) => prev + 1)
  }, [])
  */

  /*
  const onClickStateCount = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1)
    }
  }, [])
  */

  return (
    <div>
      <div>let카운트: {count}</div>
      <button onClick={onClickLetCount}>let + 1 올리기</button>
      <div>state카운트: {countState}</div>
      <button onClick={() => {
        setCountState((prev) => prev + 1)
      }}>state + 1 올리기</button>
      <ChildLetStatePage />
    </div>
  )

}