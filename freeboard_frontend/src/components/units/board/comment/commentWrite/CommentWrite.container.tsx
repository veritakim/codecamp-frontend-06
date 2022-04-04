import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import CommentWriteUi from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/CommentBoardList.queries";
import { IMutation, IMutationCreateBoardCommentArgs, IMutationUpdateBoardCommentArgs, IUpdateBoardCommentInput } from "../../../../../commons/types/generated/types";
import { CommentWriteProps } from "./CommentWrite.types";

export default function CommentWriteBoard(props: CommentWriteProps) {
  
  const router = useRouter();
  // const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [createBoardComments] = useMutation<Pick<IMutation, 'createBoardComment'>,IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);

  const [updateComment] = useMutation<Pick<IMutation, 'updateBoardComment'>, IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);
  // const [updateComment] = useMutation(UPDATE_BOARD_COMMENT);
  // 댓글 작성
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0);

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
    setRating(value);
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
                rating: Number(rating),
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
          setRating(0)
      } catch (error: any) {
        alert(error.message)
      }
  }

  // update
  const commentUpdate = async() => {
    if(!props.el?._id) return;
    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if(contents) updateBoardCommentInput.contents = contents;
    if(rating) updateBoardCommentInput.rating = rating;
    try {
      await updateComment({
        variables:{
          updateBoardCommentInput,
          password,
          boardCommentId: String(props.el._id)
        }
      })
    } catch (e: any) {
      alert(e.message)
    }

    props.setIsEdit?.(false);
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
        rating={rating}
        handleChange={handleChange}
        isEdit={props.setIsEdit}
        el={props.el}
        commentUpdate={commentUpdate}
        />
  );
}
