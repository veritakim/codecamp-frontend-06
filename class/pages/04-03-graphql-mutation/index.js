// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation{
    createBoard(writer: "강민", title: "탑블레이드", contents: "나와 한 판 붙자") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage () {
  
  const [data, setData] = useState("")
  const [callApi] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {
    // const result = await axios.get('https://koreanjson.com/posts/1'); // rest-api 방식
    const result = await callApi() // graphql-api방식
    
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message);
    console.log(data);
  }
  
  return (
    <div>
      {/* 버튼을 클릭하면 API요청하는 함수 */}
      <div>{data}</div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  )
}

