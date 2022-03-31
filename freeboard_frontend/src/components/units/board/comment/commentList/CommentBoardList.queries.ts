import { gql } from "@apollo/client";


export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      writer
      contents
      rating
      _id
    }
  }
`;


export const DELETEBOARD_COMMENT = gql`
  mutation deleteBoardComment ($password: String $boardCommentId: ID!) {
    deleteBoardComment(password: $password
    boardCommentId: $boardCommentId)
  }
`