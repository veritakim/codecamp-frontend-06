import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import CommentWriteUi from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/CommentBoardList.queries";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../../commons/types/generated/types";

export default function CommentWriteBoard() {
  const router = useRouter();
  // const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [createBoardComments] = useMutation<Pick<IMutation, 'createBoardComment'>,IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);

  // 댓글 작성
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [rateValue, setRateValue] = useState(0);

  const onChangeCommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  }
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    console.log(contents);
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const handleChange = (value: any) => {
    setRateValue(value);
    // alert(value);
  }
  const commentRegister = async() => {
      try {
          await createBoardComments({
            variables: {
              createBoardCommentInput: {
                writer,
                password,
                contents,
                rating: Number(rateValue),
              }, 
              boardId: String(router.query.boardId) 
            }, 
            refetchQueries: [{
              query: FETCH_BOARD_COMMENTS,
              variables: {
                boardId: router.query.boardId
              }
            }]
          })
          setWriter("")
          setContents("")
          setPassword("")
          setRateValue(0)
      } catch (error: any) {
        alert(error.message)
      }
  }

  return (
    <CommentWriteUi 
        onChangeCommentWriter={onChangeCommentWriter}
        onChangeContents={onChangeContents}
        onChangePassword={onChangePassword}
        commentRegister={commentRegister}
        writer={writer}
        contents={contents}
        password={password}
        rateValue={rateValue}
        
        handleChange={handleChange}
        />
  );
}
