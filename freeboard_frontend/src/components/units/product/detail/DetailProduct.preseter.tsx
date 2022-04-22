import styled from "@emotion/styled"
import Dompurify from 'dompurify'

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  background-color: #E1E0DD;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`

export default function DetailProductUi (props: any) {

  return (
    <Wrapper>
      
      <div>
        <div>{props.data?.fetchUseditem.name}</div>
        <div>{props.data?.fetchUseditem.remarks}</div>
        {typeof window !== "undefined" && (
        <div dangerouslySetInnerHTML={
          {__html: Dompurify.sanitize(props.data?.fetchUseditem.contents)}
        }></div>
      )}
        <div>{props.data?.fetchUseditem.price}</div>
        {props.userInfo.email === props.data?.fetchUseditem.seller.email 
        ? (<button onClick={props.onClickUpdate}>수정하기</button>) 
        : (<div></div>)
      }
      </div>
    </Wrapper>
  )
}