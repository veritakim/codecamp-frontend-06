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

// export const CREATE_BOARD_COMMENT = gql`
//   mutation createBoardComment(
//     $createBoardCommentInput: CreateBoardCommentInput!
//     $boardId: ID!
//   ) {
//     createBoardComment(
//       createBoardCommentInput: $CreateBoardCommentInput
//       boardId: $boardId
//     ) {
//       _id
//       writer
//       contents
//     }
//   }
// `;
