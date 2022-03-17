// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation{
    createBoard(writer: "아구몬", title: "진화", contents: "그레이몬") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage () {
  
  const [data, setData] = useState("")
  const [id, setId] = useState("")
  const [number, setNumber] = useState("")

  const [callApi] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {

    const result = await callApi()
    
    console.log("number", result.data.createBoard.number);
    console.log("message", result.data.createBoard.message);
    // setData(result.data.createBoard.message);
    // setId(result.data.createBoard.id)
    // setNumber(result.data.createBoard.id);

    // console.log("id", id)
    // console.log("number", number)
    // console.log("data", data)
  }
  
  return (
    <div>
      {/* 버튼을 클릭하면 API요청하는 함수 */}
      <div>{data}</div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  )
}

