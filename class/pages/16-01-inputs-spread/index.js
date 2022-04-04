// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard ($writer: String, $title: String, $contents: String) {
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

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: ""
  })


  const callGraphqlApi = async () => {
    const result = await callApi( {
      variables: { ...inputs }
    })
    
    setData(result.data.createBoard.message);
  }
  
  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id] : event.target.value
    })
  }
  
  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" id='writer' onChange={onChangeInputs}/> <br />
      제목: <input type="text" id='title' onChange={onChangeInputs}/> <br />
      내용: <input type="text" id='contents' onChange={onChangeInputs}/> <br />

      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  )
}