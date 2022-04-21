import { gql, useQuery } from "@apollo/client"
import { useRecoilState } from "recoil"
import { userInfomationState } from "../../../../src/commons/store"

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`

const FETCH_POINT_TRANSACTIONS = gql`
 query fetchPointTransactions{
  fetchPointTransactions{
    _id
    amount
    user {
      _id
      name
    }
  }
 }
`


export default function PaymentCompletePage () {
  const {data} = useQuery(FETCH_USER_LOGGED_IN)
  // const {data} = useQuery(FETCH_POINT_TRANSACTIONS)



  console.log(data)
  return (
    
    <div>결제성공</div>
  )
}