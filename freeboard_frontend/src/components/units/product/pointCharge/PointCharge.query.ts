import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
mutation createPointTransactionOfLoading($impUid: ID!) {
  createPointTransactionOfLoading(impUid: $impUid) {
    amount
    impUid
  }
}
`

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`