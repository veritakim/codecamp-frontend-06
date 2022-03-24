export default function DetailProductUi (props) {
  console.log("아이디", props.data?.fetchProduct._id)
  return (
    <div>
      <div>작성자: {props.data?.fetchProduct.seller}</div>
      <div>상품 : {props.data?.fetchProduct.name}</div>
      <div>가격 : {props.data?.fetchProduct.price}</div>
      <div>내용 : {props.data?.fetchProduct.detail}</div>
      <button
      productid={props.data?.fetchProduct._id} 
      onClick={props.onClickEdit}>수정하기</button>
    </div>
  )
}