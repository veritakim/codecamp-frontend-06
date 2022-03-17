// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard ($writer: String!, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
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
    const result = await callApi( {
      variables: { writer: "유희왕", title: "듀얼 배틀", contents: "나와 한 판 붙자"}
    })
    
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message);
    console.log(data);
  }
  
  return (
    <div>
      <div>{data}</div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  )
}

