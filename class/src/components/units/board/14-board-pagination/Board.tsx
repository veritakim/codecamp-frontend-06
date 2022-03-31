import styled from "@emotion/styled"



const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`



export default function Board (props: any) {

 

  return (
    <div>
      {props.data?.fetchBoards.map( (el: any, index: string) => (
        <MyRow key={el._id}>
          <MyColumn>{props.data?.fetchBoards.length - Number(index)}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}  
    </div>

  )
}