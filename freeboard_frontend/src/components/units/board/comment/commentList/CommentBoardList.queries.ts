import { gql } from "@apollo/client";


export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      writer
      contents
      rating
      _id
      createdAt
    }
  }
`;


export const DELETEBOARD_COMMENT = gql`
  mutation deleteBoardComment ($password: String $boardCommentId: ID!) {
    deleteBoardComment(password: $password
    boardCommentId: $boardCommentId)
  }
`