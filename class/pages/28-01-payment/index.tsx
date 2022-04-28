import { useState } from "react";
import Head from 'next/head'

declare const window: typeof globalThis & {
  IMP: any
}

export default function paymentPage () {

  const [amount, ] = useState(100)

  
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000 가맹점 식별코드
    // 포폴에서 결제할때 식별코드 : imp49910675 
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ // param
      pg: "html5_inicis",
      pay_method: "card",
      // merchant_uid: "ORD20180131-0000011",
      name: "노르웨이 회전 의자",
      amount: amount,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
      m_redirect_url: "http://localhost:3000/28-01-payment"
    }, (rsp: any) => { // callback
      if (rsp.success) {
        // 결제 성공 시 로직,
        // rsp가 뭐가 들어오는지
        console.log(rsp)
        
        // 백엔드에 결제관련 데이터 넘겨주기( mutation 실행 하기 )
        // createPointTransactionOfLoading
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
      <button onClick={requestPay}>결제하기</button>
    </div>
  )
}