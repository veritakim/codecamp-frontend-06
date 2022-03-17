import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage () {
  
  const [data, setData] = useState("")

  const callRestApi = async () => {
    const result = await axios.get('https://koreanjson.com/posts/1');
    console.log(result);
    
    setData(result.data.title);
    console.log(result.data.title);
  }
  
  return (
    <div>
      {/* 버튼을 클릭하면 API요청하는 함수 */}
      <button onClick={callRestApi}>REST-API 요청하기!</button>
      <div>{data}</div>
    </div>
  )
}

