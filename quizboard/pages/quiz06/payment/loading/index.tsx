import { useState } from "react";
import Head from 'next/head'
import { useRecoilState } from "recoil";
import { userInfomationState } from "../../../../src/commons/store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
declare const window: typeof globalThis & {
  IMP: any
}

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      amount
      impUid
    }
  }
`

export default function PaymentLoadingPage () {
  const [amount, setAmount] = useState(100)
  const [userInfo] = useRecoilState(userInfomationState)
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)
  const router = useRouter()
  console.log(userInfo)

  const onChangeAmount = (e) => {
    setAmount(e.target.value)
  }

  const requestPay = () => {
    const IMP = window.IMP; 
    IMP.init("imp19916705"); 

    IMP.request_pay({ 
      pg: "html5_inicis",
      pay_method: "card",
      name: "코드캠프 포인트",
      amount: amount,
      buyer_email: "gildong@gmail.com",
      buyer_name: userInfo.name,
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
      // m_redirect_url: "http://localhost:3000/quiz06/payment/complete"
    }, (rsp: any) => {
      if (rsp.success) {
        // console.log(rsp)
        
        // 백엔드에 결제관련 데이터 넘겨주기( mutation 실행 하기 )
        // createPointTransactionOfLoading rsp.imp_uid 넘겨주기
        console.log(rsp.imp_uid)
        // createPoint({
        //   variables: {
        //     impUid: rsp.imp_uid
        //   }
        // })
        alert("결제 완료")
        router.push(`/quiz06/payment/complete`)
      } else {
        // 결제 실패 시 로직,
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
      <div>충전하기</div>
      <input type="radio" name="point" value="500" onChange={onChangeAmount}/>500원
      <input type="radio" name="point" value="1000" onChange={onChangeAmount}/> 1,000원
      <input type="radio" name="point" value="2000" onChange={onChangeAmount}/> 2,000원
      <input type="radio" name="point" value="5000" onChange={onChangeAmount}/> 3,000원
      <button onClick={requestPay}>충전하기</button>
    </div>
  )
}