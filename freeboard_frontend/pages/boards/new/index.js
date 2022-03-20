// /board/new 로 접속할 수 있다.
import { useState } from 'react'
import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'

import {MyPage, Wrapper, MyTitle, MyHeadWrapper, 
  MyLittleWrapper, MySmallTitle, MySmallInput, 
  MyMiddleWrapper, MyMiddleInput, MyMiddleText, MyMiddleTextArea,
  MyAddrWrapper, MyAddrCode, MyAddrCodeInput, MyAddrBtn, MyAddrWrappert,
  MyPhotoBody, MyPhotoWrapper, MyPhotoBtn, MyPhotoSpanPlus, MyPhotoSpanUp, 
  MyMain, MyMainDiv, MyMainRadio, MyRegisterBtnDiv, MyRegisterBtn, ErrorDiv} from '../../../styles/emotion'



const CREATE_BOARD = gql`
   mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
      youtubeUrl
    }  
  }
`

export default function RegisterPage() {
  
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddr2] = useState("");
  const [youtube, setYoutube] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [passWordError, setPassWordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [addrError, setAddrError] = useState("");
  const [addrError2, setAddrError2] = useState("");
  
  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)

  

  


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
      setAddrError2("상세 주소를 입력하세요")
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

  function onChangeName (event) { 
    setWriter(event.target.value);
    if (event.target.value) {
      setNameError("")
    }
  }
  
  function onChangePass (event) {
    setPassword(event.target.value)
    if (event.target.value) {
      setPassWordError("")
    }
  }
  
  function onChangeTitle (event) {
    setTitle(event.target.value)
    if (event.target.value) {
      setTitleError("")
    }
  }

  function onChangeContent (event) {
    setContent(event.target.value)
    if (event.target.value) {
      setContentError("")
    }
  }


  function onChangeZipCode (event) {  
    setZipcode(event.target.value);
  }
  function onChangeAddr (event) {  
    setAddr(event.target.value);
  }

  function onChangeAddrDetail (event) {
   setAddr2(event.target.value);
    
  }

  function onChageYoutue (event) {
    setYoutube(event.target.value)
  }




  return (
    //HTML 구역
    <MyPage>
      <Wrapper>
        <MyTitle>게시물 등록</MyTitle>
        <MyHeadWrapper>
          <MyLittleWrapper>
            <MySmallTitle>작성자</MySmallTitle>
            <MySmallInput type="text" placeholder='이름을 적어주세요' onChange={onChangeName}/>
            <ErrorDiv>{nameError}</ErrorDiv>
          </MyLittleWrapper>
          <MyLittleWrapper>
            <MySmallTitle>비밀번호</MySmallTitle>
            <MySmallInput type="password" placeholder='비밀번호를 입력해주세요' onChange={onChangePass}/>
            <ErrorDiv>{passWordError}</ErrorDiv>
          </MyLittleWrapper>     
        </MyHeadWrapper>
        <MyMiddleWrapper>
          <MySmallTitle>제목</MySmallTitle>
          <MyMiddleInput type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle}/>
          <ErrorDiv>{titleError}</ErrorDiv>
        </MyMiddleWrapper>
        <MyMiddleTextArea>
          <MySmallTitle>내용</MySmallTitle>
          <MyMiddleText type='textarea' placeholder='내용을 작성해주세요.' onChange={onChangeContent} />
          <ErrorDiv>{contentError}</ErrorDiv>
        </MyMiddleTextArea>
        <MyAddrWrapper>
          <MySmallTitle>주소</MySmallTitle>
          <MyAddrCode>
            <MyAddrCodeInput type='text' placeholder='07250' onChange={onChangeZipCode}/>
            <MyAddrBtn>우편번호 검색</MyAddrBtn>
          </MyAddrCode>
          <MyMiddleInput type='text' onChange={onChangeAddr}/>
          <ErrorDiv>{addrError}</ErrorDiv>
        </MyAddrWrapper>
        <MyAddrWrappert>
          <MyMiddleInput type='text' onChange={onChangeAddrDetail}/>
          <ErrorDiv>{addrError2}</ErrorDiv>
        </MyAddrWrappert>
        <MyMiddleWrapper>
          <MySmallTitle>유튜브</MySmallTitle>
          <MyMiddleInput type='text' placeholder='링크를 복사해주세요' onChange={onChageYoutue}/>
        </MyMiddleWrapper>
        <MyPhotoBody>
          <MySmallTitle>사진첨부</MySmallTitle>
          <MyPhotoWrapper>
            <MyPhotoBtn>
              <MyPhotoSpanPlus>+</MyPhotoSpanPlus>
              <MyPhotoSpanUp>upload</MyPhotoSpanUp>
            </MyPhotoBtn>
            <MyPhotoBtn>
              <MyPhotoSpanPlus>+</MyPhotoSpanPlus>
              <MyPhotoSpanUp>upload</MyPhotoSpanUp>
            </MyPhotoBtn>
            <MyPhotoBtn>
              <MyPhotoSpanPlus>+</MyPhotoSpanPlus>
              <MyPhotoSpanUp>upload</MyPhotoSpanUp>
            </MyPhotoBtn>
          </MyPhotoWrapper>
        </MyPhotoBody>
        <MyMain>
          <MyMainDiv>
            <MyMainRadio type="radio" id="youtubeRadio" name="drone"  /><label for="youtubeRadio">유튜브</label>
          </MyMainDiv>
          <MyMainDiv>
            <MyMainRadio type="radio" id="pictureRadio" name="drone"  /><label for="pictureRadio">사진</label>
          </MyMainDiv>
              
        </MyMain>
        <MyRegisterBtnDiv>
          <MyRegisterBtn onClick={signCheck}>등록하기</MyRegisterBtn>
        </MyRegisterBtnDiv>

      </Wrapper>
    </MyPage>
    
  )
}
