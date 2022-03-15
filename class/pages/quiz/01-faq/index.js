import {Container, Wrapper, WrapperHeader, WrapperHeaderImg,
  MyPhoto, MyName, MyRoundPhoto, MRPName,
MyText, MyTextSpan, MyTextLine,
MyOneQnABody, MyAnQWapper, MyLittleQ, MyLittleArrow, MLQNumber, MLQText,
MyBottom, MyBIcon, MyBIconImg, MyBIText, MyBottomLine} from '../../../styles/quiz/01-faq/faq.js'

export default function QNAPage() {
  // JS 구역
  
  return (
    //HTML 구역
    <Container>
      <Wrapper>
        <WrapperHeader>
          <WrapperHeaderImg src="/01-faq/ic-58-main-search-black.png"/>
        </WrapperHeader>
        <MyPhoto>
          <MyName>마이</MyName>
          <MyRoundPhoto>
            <img src='/01-faq/img-60-profile-image.png' />
            <MRPName>
              <span>임정아</span>
              <img src='/01-faq/ic-28-arrow.png' />
            </MRPName>
          </MyRoundPhoto>
        </MyPhoto>
        <MyText>
          <MyTextSpan>공지사항</MyTextSpan>
          <MyTextSpan>이벤트</MyTextSpan>
          <MyTextSpan>FAQ</MyTextSpan>
          <MyTextSpan>QNA</MyTextSpan>
        </MyText>
        <MyTextLine></MyTextLine>
        <MyAnQWapper>
          <MyOneQnABody>
            <MyLittleQ>
              <MLQNumber>Q.01</MLQNumber>
              <MLQText>리뷰 작성은 어떻게 하나요?</MLQText>
            </MyLittleQ>
            <MyLittleArrow src='/01-faq/ic-70-arrow-right.png' />
          </MyOneQnABody>
          <MyOneQnABody>
            <MyLittleQ>
              <MLQNumber>Q.02</MLQNumber>
              <MLQText>리뷰 수정/삭제는 어떻게 하나요?</MLQText>
            </MyLittleQ>
            <MyLittleArrow src='/01-faq/ic-70-arrow-right.png' />
          </MyOneQnABody>
          <MyOneQnABody>
            <MyLittleQ>
              <MLQNumber>Q.03</MLQNumber>
              <MLQText>아이디/비밀번호를 잊어버렸어요.</MLQText>
            </MyLittleQ>
            <MyLittleArrow src='/01-faq/ic-70-arrow-right.png' />
          </MyOneQnABody>
          <MyOneQnABody>
            <MyLittleQ>
              <MLQNumber>Q.04</MLQNumber>
              <MLQText>회원탈퇴를 하고싶어요.</MLQText>
            </MyLittleQ>
            <MyLittleArrow src='/01-faq/ic-70-arrow-right.png' />
          </MyOneQnABody>
          <MyOneQnABody>
            <MyLittleQ>
              <MLQNumber>Q.05</MLQNumber>
              <MLQText>출발지 설정은 어떻게 하나요?</MLQText>
            </MyLittleQ>
            <MyLittleArrow src='/01-faq/ic-70-arrow-right.png' />
          </MyOneQnABody>
          <MyOneQnABody>
            <MyLittleQ>
              <MLQNumber>Q.06</MLQNumber>
              <MLQText>비밀번호를 변경하고 싶어요.</MLQText>
            </MyLittleQ>
            <MyLittleArrow src='/01-faq/ic-70-arrow-right.png' />
          </MyOneQnABody>
        </MyAnQWapper>
        <MyBottom>
          <MyBIcon>
            <MyBIconImg src='/01-faq/ic-58-main-home-unselected.png' />
            <MyBIText>홈</MyBIText>
          </MyBIcon>
          <MyBIcon>
            <MyBIconImg src='/01-faq/ic-58-main-location-unselected.png' />
            <MyBIText>잇츠로드</MyBIText>
          </MyBIcon>
          <MyBIcon>
            <MyBIconImg src='/01-faq/ic-58-main-like-unselected.png' />
            <MyBIText>마이찜</MyBIText>
          </MyBIcon>
          <MyBIcon>
            <MyBIconImg src='/01-faq/ic-58-main-my-selected.png' />
            <MyBIText>마이</MyBIText>
          </MyBIcon>

        </MyBottom>
      </Wrapper>
      <MyBottomLine></MyBottomLine>
    </Container>
    
    )
  }
