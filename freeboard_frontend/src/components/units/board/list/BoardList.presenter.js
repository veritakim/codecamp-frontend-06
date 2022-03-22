import styled from '@emotion/styled'


const Wrapper = styled.div`
  width: 1200px;
  height: 583px;
  border: 1px solid black;

`


export default function BoardListUi (props) {
  
  console.log(props.data)
  return (
    <Wrapper>
      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
          
        </tr>
        {props.data?.fetchBoards.map((el, index) => (
          <tr>
            <td>{index}</td>
            <td>{el.title}</td>
            <td>{!el.user ? "익명" : el.user}</td>
            <td>{el.createdAt.slice(0, 10)}</td>

          </tr>
        ))}
      </table>
    </Wrapper>
  )
}