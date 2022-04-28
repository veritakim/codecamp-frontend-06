import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import BasketUi from "./Basket.presenter";

export default function BasketContainer () {
  const [basketItems, setBasketItems] = useState([""])
  const router = useRouter()
  // 체크 박스
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [amout, setAmount] = useState(0)
  const amount = []

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets")|| "[]")
    setBasketItems(baskets)
  }, [])

  const checkedItemHandler = ( code: any, isChecked: boolean ) => {
    if ( isChecked ) {
      setCheckedItems( [ ...checkedItems, code ] )
    } else if ( !isChecked && checkedItems.find( one => one === code ) ) {
      const filter = checkedItems.filter( one => one !== code )
      setCheckedItems( [ ...filter ] )
    }
  }

  // 전체선택
  /*
  const onCheckAll = ( checked: any ) => {
    if ( checked ) {
      const checkedItemsArr = []
    }
  }
  */

  const onClickPayment = () => {
    router.push('/product/payment')
  }

  const onChangeValue = (event:MouseEvent<HTMLInputElement>) => {
    // alert(event.currentTarget.value)
    // amount.push(event.currentTarget.value)
    const price = event.currentTarget.value
    setAmount(prev => prev + parseInt(price))
    alert(amout)
  }
  // console.log("amount", amount)
  // alert(amount)



  return <BasketUi 
          basketItems={basketItems}
          checkedItemHandler={checkedItemHandler}
          onClickPayment={onClickPayment}
          onChangeValue={onChangeValue}
        />
}