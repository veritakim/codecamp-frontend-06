import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      buyer {
        _id
        userPoint {
          _id
          amount
          user {
            _id
            email
            name
            userPoint {
              _id
              amount
            }
          }
        }
      }
      seller {
        _id
        name
        userPoint {
          _id
        }
      }
    }
  }
  `

export const FETCH_USED_ITEM = gql`
query fetchUseditem( $useditemId: ID! ) {
  fetchUseditem ( useditemId: $useditemId ) {
    _id
    name
    remarks
    contents
    price
    tags
    seller {
      _id
      email
    }
    images
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