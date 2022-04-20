import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 800px;
  height: 1000px;
  background-color: #E1E0DD;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export default function DetailProductUi (props) {


  return (
    <Wrapper>
      {props.data?.fetchUseditem.map((el) => (
      <div key={el._id}>
        <div>{el.name}</div>
        <div>{el.remarks}</div>
        <div>{el.contents}</div>
        <div>{el.price}</div>
      </div>
      ))}
    </Wrapper>
  )
}