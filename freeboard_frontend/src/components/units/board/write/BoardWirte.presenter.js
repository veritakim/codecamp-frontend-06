import { MyPage,
  Wrapper, 
  MyTitle, 
  MyHeadWrapper, 
  MyLittleWrapper, 
  MySmallTitle, 
  MySmallInput, 
  MyMiddleWrapper, 
  MyMiddleInput, 
  MyMiddleText, 
  MyMiddleTextArea,
  MyAddrWrapper, 
  MyAddrCode, 
  MyAddrCodeInput, 
  MyAddrBtn, 
  MyAddrWrappert,
  MyPhotoBody, 
  MyPhotoWrapper, 
  MyPhotoBtn, 
  MyPhotoSpanPlus, 
  MyPhotoSpanUp, 
  MyMain, 
  MyMainDiv, 
  MyMainRadio, 
  MyRegisterBtnDiv, 
  MyRegisterBtn, 
  ErrorDiv } from './BoardWrite.style'

export default function BoardWriteUi (props) {
  return (

  <MyPage>
      <Wrapper>
        <MyTitle>게시물 등록</MyTitle>
        <MyHeadWrapper>
          <MyLittleWrapper>
            <MySmallTitle>작성자</MySmallTitle>
            <MySmallInput type="text" placeholder='이름을 적어주세요' onChange={props.onChangeName}/>
            <ErrorDiv>{props.nameError}</ErrorDiv>
          </MyLittleWrapper>
          <MyLittleWrapper>
            <MySmallTitle>비밀번호</MySmallTitle>
            <MySmallInput type="password" placeholder='비밀번호를 입력해주세요' onChange={props.onChangePass}/>
            <ErrorDiv>{props.passWordError}</ErrorDiv>
          </MyLittleWrapper>     
        </MyHeadWrapper>
        <MyMiddleWrapper>
          <MySmallTitle>제목</MySmallTitle>
          <MyMiddleInput type='text' placeholder='제목을 작성해주세요.' onChange={props.onChangeTitle}/>
          <ErrorDiv>{props.titleError}</ErrorDiv>
        </MyMiddleWrapper>
        <MyMiddleTextArea>
          <MySmallTitle>내용</MySmallTitle>
          <MyMiddleText type='textarea' placeholder='내용을 작성해주세요.' onChange={props.onChangeContent} />
          <ErrorDiv>{props.contentError}</ErrorDiv>
        </MyMiddleTextArea>
        <MyAddrWrapper>
          <MySmallTitle>주소</MySmallTitle>
          <MyAddrCode>
            <MyAddrCodeInput type='text' placeholder='07250' onChange={props.onChangeZipCode}/>
            <MyAddrBtn>우편번호 검색</MyAddrBtn>
          </MyAddrCode>
          <MyMiddleInput type='text' onChange={props.onChangeAddr}/>
          <ErrorDiv>{props.addrError}</ErrorDiv>
        </MyAddrWrapper>
        <MyAddrWrappert>
          <MyMiddleInput type='text' onChange={props.onChangeAddrDetail}/>
          <ErrorDiv>{props.addrDetailError}</ErrorDiv>
        </MyAddrWrappert>
        <MyMiddleWrapper>
          <MySmallTitle>유튜브</MySmallTitle>
          <MyMiddleInput type='text' placeholder='링크를 복사해주세요' onChange={props.onChageYoutue}/>
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
          <MyRegisterBtn onClick={props.signCheck} isActive={props.isActive}>등록하기</MyRegisterBtn>
        </MyRegisterBtnDiv>

      </Wrapper>
    </MyPage>
  )
}