import { BarsOutlined, PlusCircleOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import Router, { useRouter } from "next/router"

const Wrapper = styled.div`
  height: 708px;
  width: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 #000000 5%;
  padding: 30px 20px;

`

const Head = styled.div`
  margin-bottom: 30px;
 
`
const Bubble = styled.img`
`
const Talkr = styled.img``
const Body = styled.div`
   border-top: 1px solid #E5E5E5;
`
const BoardList = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
`
const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-left: 11px;
`

export default function LayoutSide () {
  const router = useRouter()
  const onClickList = () => {
    router.push('/boards')
  }
  const onClickWrite = () => {
    router.push('/boards/new')
  }
  
  return (
  <Wrapper>
    <Head>
      <Bubble src="/Vector.png" />
      <Talkr src="/TALKR.png" />
    </Head>
    <Body>
      <BoardList>
         <BarsOutlined />
         <Title onClick={onClickList}>전체 글 보기</Title>
      </BoardList>
      <BoardList>
        <PlusCircleOutlined />
        <Title onClick={onClickWrite}>새 글 작성</Title>
      </BoardList>
    </Body>
  </Wrapper>)
}