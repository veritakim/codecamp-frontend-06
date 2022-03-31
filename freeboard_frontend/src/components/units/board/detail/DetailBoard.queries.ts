import { useQuery, gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      writer
      contents
      rating
    }
  }
`;


export const LIKE_BOARD = gql`
mutation likeBoard($boardId: ID!) {
  likeBoard(boardId: $boardId) 
}
`

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`
  
  
