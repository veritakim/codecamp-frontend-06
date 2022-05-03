import { gql } from "@apollo/client";

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
        name
      }
      useditemAddress{
        zipcode
        address
        addressDetail
        lat
        lng
      }
      images
      pickedCount
    } 
  }
`

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId) 
  }

`

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }

`

export const FETCH_USED_ITEM_IPICKED = gql`
  query fetchUseditemsIPicked ($page: Int) {
    fetchUseditemsIPicked(page: $page) {
      _id
    }
  }
`