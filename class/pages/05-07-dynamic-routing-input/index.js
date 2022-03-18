// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  
  const [data, setData] = useState("")
  const [callApi] = useMutation(CREATE_BOARD)

  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const callGraphqlApi = async () => {

    // 무조건 하면 안된다. 에러 처리
    try {
      const result = await callApi( {
        variables: { writer: myWriter, title: myTitle, contents: myContents}
      })
      
      // 입력받은 숫자 번호
      console.log(result.data.createBoard.number)
      alert("게시글 등록 성공. 상세페이지로 이동.")
      router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
    } catch (error) {
      alert(error.message)
    }

     
  
  }
                      // 괄호 안에는 이벤트 핸들러 함수.
  const onChangeWriter = (event) => {
    setMyWriter(event.target.value)
  }
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setMyContents(event.target.value)
  }
  
  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter}/> <br />
      제목: <input type="text" onChange={onChangeTitle}/> <br />
      내용: <input type="text" onChange={onChangeContents}/> <br />

      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  )
}

