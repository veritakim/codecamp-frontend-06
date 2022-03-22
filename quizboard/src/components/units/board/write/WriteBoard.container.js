import {useState} from 'react'
import { useRouter } from 'next/router'
import {useMutation} from '@apollo/client'
import WriteBoardUi from './WriteBoard.presenter'
import {CREATE_BOARD} from './WriteBoard.queries'

export default function WriteBoardPage () {
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)
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
    if(event.target.value != "" && myTitle !== "" && myContents !== "") {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
    if(myWriter != "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeContents = (event) => {
    setMyContents(event.target.value)
    if(myWriter != "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }


  return (
    <WriteBoardUi 
    onChageWriter={onChangeWriter} 
    onChageTitle={onChangeTitle} 
    onChangeContents={onChangeContents}
    callGraphqlApi={callGraphqlApi}
    disabled={isActive}></WriteBoardUi>
  )
}