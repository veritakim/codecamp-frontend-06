import Head from "next/head";

export default function PointChargeUi (props: any) {


  return (
    <div>
      <Head>
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
      </Head>
      <div>충전하기</div>
      <input type="radio" name="point" value="500" onChange={props.onChangeAmount}/>500원
      <input type="radio" name="point" value="1000" onChange={props.onChangeAmount}/> 1,000원
      <input type="radio" name="point" value="2000" onChange={props.onChangeAmount}/> 2,000원
      <input type="radio" name="point" value="5000" onChange={props.onChangeAmount}/> 3,000원
      <button onClick={props.requestPay}>충전하기</button>
    </div>
  )
}