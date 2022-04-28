
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import PaymentUi from "./Payment.presenter";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, FETCH_USED_ITEM, FETCH_USER_LOGGED_IN } from "./Payment.query";


export default function PaymentContainer () {
  const router = useRouter()
  const useritemId = router.query.itemId

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: useritemId}
  })

  const {data: userData} = useQuery(FETCH_USER_LOGGED_IN)

  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)

  const onClickMoveToBuyProduct = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId },
      });
      alert("구매 완료")
      router.push('/user/myPage')
    } catch (error: any) {
      alert(error.message);
    }
  };

  
  
  return <PaymentUi 
            data={data}
            onClickMoveToBuyProduct={onClickMoveToBuyProduct}
            userData={userData}
        />
}