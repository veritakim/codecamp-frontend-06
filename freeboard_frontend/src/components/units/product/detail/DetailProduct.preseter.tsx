import styled from "@emotion/styled"
import Dompurify from 'dompurify'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  background-color: #E1E0DD;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`

const Basket = styled(ShoppingBasketIcon)`
  cursor: pointer;
  color: #BEBEBE;
`

export default function DetailProductUi (props: any) {
  props.data?.fetchUseditem.images.map(el => {
    if (el !== "") {
      console.log(el)
    }
  })
  return (
    <Wrapper>
      
      <div>
        {props.data?.fetchUseditem.images.map((el, i) => 
          el !== "" && (
          <img key={i} src={`https://storage.googleapis.com/${el}`} alt="img"/> 
          )
        )}
        <div>{props.data?.fetchUseditem.name}</div>
        <div>{props.data?.fetchUseditem.remarks}</div>
        {typeof window !== "undefined" && (
        <div dangerouslySetInnerHTML={
          {__html: Dompurify.sanitize(props.data?.fetchUseditem.contents)}
        }></div>
      )}
        <Basket onClick={props.onClickBaket(props.data?.fetchUseditem)} />
        <div>{props.data?.fetchUseditem.price}</div>
        <button onClick={props.onClickBuy(props.data?.fetchUseditem._id)}>구매하기</button>
        {props.userInfo.email === props.data?.fetchUseditem.seller.email 
        ? (<button onClick={props.onClickUpdate}>수정하기</button>) 
        : (<div></div>)
      }
      </div>
    </Wrapper>
  )
}