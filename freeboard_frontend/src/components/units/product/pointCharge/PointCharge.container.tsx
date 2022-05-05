import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfomationState } from "../../../../commons/store";
import { CREATE_POINT_TRANSACTION_OF_LOADING, FETCH_USER_LOGGED_IN } from "./PointCharge.query";

declare const window: typeof globalThis & {
  IMP: any
}

export default function PointChargeContainer () {
  const [amount, setAmount] = useState(100)
  const { data } = useQuery(FETCH_USER_LOGGED_IN)
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)
  const router = useRouter()

  const onChangeAmount = (e: any) => {
    setAmount(e.target.value)
  }

  const requestPay = () => {
    const IMP = window.IMP; 
    IMP.init("imp49910675"); 

    IMP.request_pay({ 
      pg: "html5_inicis",
      pay_method: "card",
      name: "코드캠프 포인트",
      amount: amount,
      buyer_email: data?.fetchUserLoggedIn.email,
      buyer_name: data?.fetchUserLoggedIn.name,
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 디지털로 300",
      buyer_postcode: "01181",
    }, (rsp: any) => {
      if (rsp.success) {
        
        console.log(rsp.imp_uid)
        const result = createPoint({
          variables: {
            impUid: rsp.imp_uid
          }
        })
        console.log(result)
        alert("결제 완료")
        router.push(`/user/myPage`)
      } else {
        alert("결제 실패")
      }
    });
  }

  return (
    <div>
      <Head>
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
      </Head>
      <h1>{data?.fetchUserLoggedIn.name}님 환영합니다</h1>
      <h2>포인트 총 {data?.fetchUserLoggedIn?.userPoint?.amount}원</h2>

      <div>충전하기</div>
      <input type="radio" name="point" value="500" onChange={onChangeAmount}/>500원
      <input type="radio" name="point" value="1000" onChange={onChangeAmount}/> 1,000원
      <input type="radio" name="point" value="2000" onChange={onChangeAmount}/> 2,000원
      <input type="radio" name="point" value="5000" onChange={onChangeAmount}/> 3,000원
      <button onClick={requestPay}>충전하기</button>
    </div>

  )

  // return <PointChargeUi 
  //   requestPay={requestPay} 
  //   onChangeAmount={onChangeAmount}
  //   />
}