// 컨테이너

import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import {useMutation} from '@apollo/client'
import {ChangeEvent, useState } from "react" 
import {useRouter} from 'next/router'
import { IBoardWriteProps, iMyVariables } from "./BoardWrite.types"



export default function BoardWrite (props: IBoardWriteProps) {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  const [data, setData] = useState("")
  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)


  // 수정하기 함수
  const onClickUpdate = async () => {
    
    const variables: iMyVariables= {number: Number(router.query.number)}

    if(myWriter) variables.writer = myWriter
    if(myTitle) variables.title = myTitle
    if(myContents) variables.contents = myContents
    
    const result = await updateBoard({
      variables: variables
    })

    alert("게시글 수정에 성공하였습니다.")
    router.push(`/09-01-boards/${router.query.number}`)
  }

  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  // 등록하기 함수
  const callGraphqlApi = async () => {
    const result = await createBoard( {
      variables: { writer: myWriter, title: myTitle, contents: myContents}
    })

    alert("게시글 등록에 성공하였습니다.")
    router.push(`/09-01-boards/${result.data.createBoard.number}`)
    
  }
                      // 괄호 안에는 이벤트 핸들러 함수.
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value)
    console.log(event.target.value)

    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true)
    } else {
      setIsActive(false);
    }
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value)

    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value)

    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  

  return (
    <BoardWriteUI 
    onChangeWriter={onChangeWriter} 
    onChangeTitle={onChangeTitle} 
    onChangeContents={onChangeContents}
    callGraphqlApi={callGraphqlApi}
    isActive={isActive}
    isEdit={props.isEdit}
    onClickUpdate={onClickUpdate}
    data={props.data}
    />
  )
}


