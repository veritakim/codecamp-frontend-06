import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createSelfBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  } 
`

export default function CreateMutationPage () {
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [callApi] = useMutation(CREATE_BOARD)

  const callInput = async () => {
    const result = await callApi({
      variables: {writer: writer, title: title, contents: contents}
    })
    
    
    console.log(result.data.createBoard.number)
    console.log(result.data.createBoard.message)
  }

    const onChangeWriter = (event) => {
      setWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
      setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
      setContents(event.target.value)
    }


    
    return (
      <div>
        작성자 : 
        <input type="text" onChange={onChangeWriter} />
        제목 :
        <input type="text" onChange={onChangeTitle} />
        내용 :
        <input type="text" onChange={onChangeContents} />
        <button onClick={callInput}>요청하기</button>
      </div>
    )
  
  
  
}