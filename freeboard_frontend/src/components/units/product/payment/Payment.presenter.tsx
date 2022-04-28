interface PaymentUIProps {
  itemId?: string | string[] | undefined
  onClickMoveToBuyProduct: () => void
  data: any
  userData: any
}
export default function PaymentUi (props: PaymentUIProps) {


  return (
    <div>
      <h1>상품 구매</h1>
      <div>{props.data?.fetchUseditem.name}</div>
      <div>{props.data?.fetchUseditem.price}원</div>
      <div>보유 포인트 : {props.userData?.fetchUserLoggedIn.userPoint.amount}점</div>
      <button onClick={props.onClickMoveToBuyProduct}>구매하기</button>
    </div>
  )
}