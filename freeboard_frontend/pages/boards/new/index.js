// /board/new 로 접속할 수 있다.
import { useState } from 'react'
import {MyPage, Wrapper, MyTitle, MyHeadWrapper, 
  MyLittleWrapper, MySmallTitle, MySmallInput, 
  MyMiddleWrapper, MyMiddleInput, MyMiddleText, MyMiddleTextArea,
  MyAddrWrapper, MyAddrCode, MyAddrCodeInput, MyAddrBtn, MyAddrWrappert,
  MyPhotoBody, MyPhotoWrapper, MyPhotoBtn, MyPhotoSpanPlus, MyPhotoSpanUp, 
  MyMain, MyMainDiv, MyMainRadio, MyRegisterBtnDiv, MyRegisterBtn} from '../../../styles/emotion'


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addr, setAddr] = useState("");

  const [nameError, setNameError] = useState("");
  const [passWordError, setPassWordError] = useState("");
  const [checkPassError, setCheckPassError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [addrError, setAddrError] = useState("");




  const [color, setColor] = useState("red");
  

  function onChangeName (event) { 
      setName(event.target.value);
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
  let address;
  let address1;
  let address2;

  function onChangeAddr (event) {  
    address1 = event.target.value;
  }
  
  function onChangeAddrs (event) {
    address2 = event.target.value;
    onAddr()
  }

  function onAddr () {       
    console.log(address1, address2)      
    if (address1 !== "" && address2 !== "") {
      setAddr(address1 + address2);
      setAddrError("")
    } 
  }


  function signCheck () {

    if (!name) {
      setNameError("이름을 입력해주세요")
    } 

    if (!password) {
      setPassWordError("비밀번호를 입력해주세요")
    } 
    
    if (password !== checkPass) {
      setCheckPassError("비밀번호가 다릅니다")
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

    if (name !== "" && password !== "" && title !== "" && content !== "") {
      alert("글이 작성되었습니다")
    }
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
            <div style={{color}}>{nameError}</div>
          </MyLittleWrapper>
          <MyLittleWrapper>
            <MySmallTitle>비밀번호</MySmallTitle>
            <MySmallInput type="password" placeholder='비밀번호를 입력해주세요' onChange={onChangePass}/>
            <div style={{color}}>{passWordError}</div>
          </MyLittleWrapper>     
        </MyHeadWrapper>
        <MyMiddleWrapper>
          <MySmallTitle>제목</MySmallTitle>
          <MyMiddleInput type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle}/>
          <div style={{color}}>{titleError}</div>
        </MyMiddleWrapper>
        <MyMiddleTextArea>
          <MySmallTitle>내용</MySmallTitle>
          <MyMiddleText type='textarea' placeholder='내용을 작성해주세요.' onChange={onChangeContent} />
          <div style={{color}}>{contentError}</div>
        </MyMiddleTextArea>
        <MyAddrWrapper>
          <MySmallTitle>주소</MySmallTitle>
          <MyAddrCode>
            <MyAddrCodeInput type='text' placeholder='07250'/>
            <MyAddrBtn>우편번호 검색</MyAddrBtn>
          </MyAddrCode>
          <MyMiddleInput type='text' onChange={onChangeAddr}/>
        </MyAddrWrapper>
        <MyAddrWrappert>
          <MyMiddleInput type='text' onChange={onChangeAddrs}/>
          <div style={{color}}>{addrError}</div>
        </MyAddrWrappert>
        <MyMiddleWrapper>
          <MySmallTitle>유튜브</MySmallTitle>
          <MyMiddleInput type='text' placeholder='링크를 복사해주세요' />
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
