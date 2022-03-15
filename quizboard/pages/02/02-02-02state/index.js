import {useState} from 'react'

export default function CountUpState () {
  const [count, setCount] = useState(0);

  function countUp () {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={countUp}>증가해라</button>
    </div>
  )

}