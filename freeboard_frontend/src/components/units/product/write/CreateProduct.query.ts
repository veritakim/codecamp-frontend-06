import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
  createUseditem (createUseditemInput: $createUseditemInput) {
    _id
    name
    contents
    price
    tags
    createdAt
    images
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
      images
    } 
  }
`