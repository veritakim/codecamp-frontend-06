import styled from '@emotion/styled'


const ContainerBox = styled.div`
  width: 100%;
  height: 100%;
  
`

const Wrapper = styled.div`
  width: 1200px;
  height: 583px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

`

 const Table = styled.table`
 width: 1200px;
 height: 100%
 border-top: 1px solid black;
 border-bottom: 1px solid black;
 border-collapse:collapse;
 text-align: center;
 `
  const Th = styled.th`
  font-size: 18px;  
  `

  const Td = styled.td`
    border-top: 1px solid #BDBDBD;
    font-size: 16px;
    color: #4F4F4F;
  `
const WriteButton = styled.button`
  width: 171px;
  height: 52px;
  font-size: 16px;
  background-color: white;
  border: 1px solid #F2F2F2;
  cursor: pointer;
`
const UnderLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 40px;
`

export default function BoardListUi (props) {
  
  console.log(props.data)
  return (
    <ContainerBox>
      <Wrapper>
        <Table>
          <tr>
            <Th>번호</Th>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>날짜</Th>
            
          </tr>
          {props.data?.fetchBoards.map((el, index) => (
            <tr key={el._id}>
              <Td>{index + 1}</Td>
              <Td id={el._id} onClick={props.onClickDetailMove}>{el.title}</Td>
              <Td>{!el.user ? "익명" : el.user}</Td>
              <Td>{el.createdAt.slice(0, 10)}</Td>
            </tr>
          ))}
        </Table>
      </Wrapper>
      <UnderLine>
        <WriteButton onClick={props.MoveWritePage}>게시물 등록하기</WriteButton>
      </UnderLine>
    </ContainerBox>
  )
}