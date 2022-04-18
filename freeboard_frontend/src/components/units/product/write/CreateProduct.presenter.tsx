import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 80px 102px;
  box-shadow: 0 0 20px 0;
`

const HeadTitiel = styled.div`
  font-size: 36px;
  font-weight: 700;
`
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const HeadDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const LittleTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`

const Input = styled.input`
  width: 996px;
  height: 52px;
  border: none;
  border: 1px solid #BDBDBD;
`

export default function CreateProductUi () {


  return (
    <Wrapper>
      <HeadDiv>
       <HeadTitiel>상품 등록하기</HeadTitiel>
      </HeadDiv>

      <InputDiv>
        <LittleTitle>상품명</LittleTitle>
        <Input />
      </InputDiv>

      <InputDiv>
        <LittleTitle>한줄요약</LittleTitle>
        <Input/>
      </InputDiv>

      <InputDiv>
        <LittleTitle>상품설명</LittleTitle>
        <Input />
      </InputDiv>

      <InputDiv>
        <LittleTitle>판매 가격</LittleTitle>
        <Input />
      </InputDiv>

      <InputDiv>
        <LittleTitle>태그입력</LittleTitle>
        <Input />
      </InputDiv>

      <InputDiv>
        <LittleTitle>거래위치</LittleTitle>
        <Input />
      </InputDiv>

      <InputDiv>
        <LittleTitle>사진 첨부</LittleTitle>
        <Input />
      </InputDiv>
    </Wrapper>
  )
}