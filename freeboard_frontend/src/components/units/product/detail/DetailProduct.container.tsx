import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { myBasketCounts, myTodayBasket, userInfomationState } from "../../../../commons/store";
import DetailProductUi from "./DetailProduct.preseter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM, FETCH_USED_ITEM_IPICKED, TOGGLE_USED_ITEM_PICK } from "./DetailProduct.query";

export default function DetailProductContainer () {
  const router = useRouter()
  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId
    }
  })

  const { data: ipicked1 } = useQuery(FETCH_USED_ITEM_IPICKED)

  const { data: ipicked2 } = useQuery(FETCH_USED_ITEM_IPICKED, {
    variables: {
      page: 2
    }
  })

  // const iPicked = ipicked1.concat(ipicked2)
  // console.log("pick",ipicked1)

  const [, setTodayState] = useRecoilState(myTodayBasket)
  setTodayState(false)

  const [userInfo] = useRecoilState(userInfomationState)

  const [deleteItem] = useMutation(DELETE_USED_ITEM)
  
  // 장바구니 recoil 이용해보자
  const [, setBasketRecoil] = useRecoilState(myBasketCounts)
  const onClickBaket = (el:any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    const temp = baskets.filter((item) => (item._id === el._id))
    if( temp.length === 1) {
      alert("이미 담은 상품입니다")
      return
    }

    const { __typename, ...newEl } = el
    baskets.push(newEl)
    localStorage.setItem("baskets", JSON.stringify(baskets))
    alert("장바구니에 상품을 담았습니다")
    setBasketRecoil(baskets.length)
  }

  // pick
  const [itemPick] = useMutation(TOGGLE_USED_ITEM_PICK)
  const [clicked, setClicked] = useState(false)
  
  const onClickHeart = (id) => async() => {
    // alert(id)
    setClicked(prev => !prev)
    try{
      await itemPick({
        variables: {
          useditemId: String(id)
        },
        refetchQueries: [{
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: String(id)
          }
        }]
      })
      // alert("찜하기 완료")

    } catch(e) {
      console.log(e.message)
    }
  }


  const onClickUpdate = () => {
    router.push(`/product/${router.query.productId}/edit`)
  }

  const imgUrl = data?.fetchUseditem.images.filter((e:string) => e != "")[0]


  // 구매하기
  const onClickBuyItem = (id: string) => () => {
    router.push(`/payment/${id}`)
  }

  // 삭제하기
  const onClickDelete = (id: string) => async () => {

    alert("해당 상품을 삭제하시겠습니까?")
    try {
     await deleteItem({
       variables: {
        useditemId: String(id)
       }
     })

     router.push("/")
     alert("삭제가 완료되었습니다.")
    } catch(e) {
      alert(e.message)
    }    
  }


  // console.log("data", data)
  return (
    <DetailProductUi 
    data={data}
    imgUrl={imgUrl}
    userInfo={userInfo}
    onClickUpdate={onClickUpdate}
    onClickBaket={onClickBaket}
    onClickBuyItem={onClickBuyItem}
    onClickDelete={onClickDelete}
    onClickHeart={onClickHeart}
    clicked={clicked}
    />
  )
}