import { v4 as uuid } from "uuid"
import * as S from './Basket.style'
import BasketItems from "./BasketItems"

export default function BasketUi (props: any) {

  // console.log(props.basketItems)
  return (
    <div>
      장바구니
      {props.basketItems?.map((el: any) => (
        <S.Wrapper key={uuid()}>
          <BasketItems el={el} onChangeValue={props.onChangeValue}/>
        </S.Wrapper>
      ))}
      <button onClick={props.onClickPayment}>결제하기</button>
    </div>
  )
}