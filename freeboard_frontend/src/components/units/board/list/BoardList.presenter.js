import styled from '@emotion/styled'


const Wrapper = styled.div`
  width: 1200px;
  height: 583px;
  display: flex;
  justify-content: center;

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


export default function BoardListUi (props) {
  
  console.log(props.data)
  return (
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
  )
}