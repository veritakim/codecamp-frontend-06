export default function WriteProductUi (props) {

  return (
    <div>
      <div>{props.isEdit ? "수정" : "상품 등록"} 페이지</div>
      <div>판매자 : <input type="text" onChange={props.onChangeSeller} /></div>
      <div>판매물품 : <input type="text" onChange={props.onChangeName} /></div>
      <div>내용 : <input type="text" onChange={props.onChangeDetail} /></div>
      <div>가격 : <input type="number" onChange={props.onChangePrice} /></div>
      <button onClick={props.isEdit ? props.onClickEdit : props.onClickProduct} disabled={props.isActive}>{props.isEdit ? "수정" : "상품 등록"}하기</button>
    </div>
  )

}