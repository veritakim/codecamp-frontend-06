import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 800px;
  height: 200px;
  background-color: #E1E0DD;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`

export default function ProductListUi (props: any) {

  return (
    <Wrapper>
      <div id={props.el._id} onClick={props.onClickMove(props.el)}>
        <div>{props.el.name}</div>
        <div>{props.el.price}</div>
        <div>{props.el.pickedCount}</div>
      </div>
      <div>
        {props.todayList ?
        (<div>{props.todayList[props.todayList.length - 1]}</div>)
       : 
       (<div></div>)
      }

      </div>
    </Wrapper>
  )
}