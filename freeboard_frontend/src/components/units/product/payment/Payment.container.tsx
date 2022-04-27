import { useState } from "react";
import Head from 'next/head'

import PaymentUi from "./Payment.presenter";

declare const window: typeof globalThis & {
  IMP: any
}

export default function PaymentContainer () {
  const [amount, ] = useState(100)

  
  const requestPay = () => {
    const IMP = window.IMP; 
    IMP.init("imp19916705"); 
    // 포폴에서 결제할때 식별코드 : imp49910675 
    IMP.request_pay({ 
      pg: "html5_inicis",
      pay_method: "card",
      name: "노르웨이 회전 의자",
      amount: amount,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
      m_redirect_url: "http://localhost:3000/28-01-payment"
    }, (rsp: any) => { 
      if (rsp.success) {
        console.log(rsp)
        
      } else {
        alert("결제 실패")
      }
    });
  }


  return <PaymentUi />
}