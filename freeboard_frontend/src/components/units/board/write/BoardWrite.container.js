import { useState } from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD } from './BoardWrite.queries';
import BoardWriteUi from './BoardWirte.presenter';

export default function BoardWritePage () {
const [writer, setWriter] = useState("");
const [password, setPassword] = useState("");
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [zipcode, setZipcode] = useState("");
const [addr, setAddr] = useState("");
const [addrDetail, setAddrDetail] = useState("");
const [youtube, setYoutube] = useState("");

const [nameError, setNameError] = useState("");
const [passWordError, setPassWordError] = useState("");
const [titleError, setTitleError] = useState("");
const [contentError, setContentError] = useState("");
const [addrError, setAddrError] = useState("");
const [addrDetailError, setAddrDetailError] = useState("");

const router = useRouter()
const [createBoard] = useMutation(CREATE_BOARD)
const [isActive, setIsActive] = useState(false)


function onChangeName (event) { 
  setWriter(event.target.value);
  if (event.target.value) {
    setNameError("")
  } 
  if(event.target.value && password && title && content) {
    setIsActive(true)
  } else {
    setIsActive(false)
  }
}

function onChangePass (event) {
  setPassword(event.target.value)
  if (event.target.value) {
    setPassWordError("")
  }
  if(writer && event.target.value && title && content) {
    setIsActive(true)
  } else {
    setIsActive(false)
  }
}

function onChangeTitle (event) {
  setTitle(event.target.value)
  if (event.target.value) {
    setTitleError("")
  }
  if(writer && password && event.target.value && content) {
    setIsActive(true)
  } else {
    setIsActive(false)
  }
}

function onChangeContent (event) {
  setContent(event.target.value)
  if (event.target.value) {
    setContentError("")
  }
  if(writer && password && title && event.target.value) {
    setIsActive(true)
  } else {
    setIsActive(false)
  }
}

function onChangeZipCode (event) {  
  setZipcode(event.target.value);
}

function onChangeAddr (event) {  
  setAddr(event.target.value);
}

function onChangeAddrDetail (event) {
 setAddrDetail(event.target.value);
  
}

function onChageYoutue (event) {
  setYoutube(event.target.value)
}


const signCheck = async () => {
  
  if (!writer) {
    setNameError("이름을 입력해주세요")
  } 

  if (!password) {
    setPassWordError("비밀번호를 입력해주세요")
  } 
  
  if (!title) {
    setTitleError("제목을 입력해주세요")
  } 

  if (!content) {
    setContentError("내용을 입력해주세요")
  } 

  if (!addr) {
    setAddrError("주소를 입력해주세요")
  } 

  if (!addrDetail) {
    setAddrDetailError("상세 주소를 입력하세요")
  }

  if (writer !== "" && password !== "" && title !== "" && content !== "") {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password, 
            title: title,
            contents: content,
            youtubeUrl: youtube,
            boardAddress: {
              zipcode: zipcode,
              address: addr,
              addressDetail: addrDetail
            }
          }
        }
      })

      router.push(`detailBoard/${result.data.createBoard._id}`)
      alert("글이 작성되었습니다")
      /**
       data.createBoard.contents 
        title
        writer
        youtubeUrl
        _id
       */

    } catch (error) {
      console.log(error.message)
    }
  }
}

 return (
  <BoardWriteUi
  onChangeName={onChangeName}
  onChangePass={onChangePass}
  onChangeTitle={onChangeTitle}
  onChangeContent={onChangeContent}
  onChangeZipCode={onChangeZipCode}
  onChangeAddr={onChangeAddr}
  onChangeAddrDetail={onChangeAddrDetail}
  onChageYoutue={onChageYoutue}
  signCheck={signCheck}
  isActive={isActive}
  nameError={nameError}
  passWordError={passWordError}
  titleError={titleError}
  contentError={contentError}
  addrError={addrError}
  addrDetailError={addrDetailError}
  ></BoardWriteUi> 
  )
}