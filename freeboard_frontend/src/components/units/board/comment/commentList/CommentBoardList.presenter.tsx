// import { CommentArea } from "./CommentBoardList.style";
import { CommentBoardListUiProps } from "./CommentBoardList.types";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined} from '@ant-design/icons';
import Modal from "antd/lib/modal/Modal";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETEBOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./CommentBoardList.queries";
import { useRouter } from "next/router";
import { Rate } from "antd";
import * as S from "./CommentBoardList.style"
import CommentWriteBoard from "../commentWrite/CommentWrite.container";



export default function CommentBoardListUi(props: CommentBoardListUiProps) {
  console.log("list", props);
  const [commentId, setCommentId] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [deleteBoardComment] = useMutation(DELETEBOARD_COMMENT)
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const deleteCommentModal = (event: MouseEvent<HTMLDivElement>) => {
    // alert(event.currentTarget.id)
    setCommentId(event.currentTarget.id)
    modalToggle()
  }

  const modalToggle = () => {
    setIsOpen(prev => !prev)
    // alert(commentId);
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value)
    console.log(pass);
  }

  const onClickDeleteComment = () => {
    modalToggle()
    try {
      deleteBoardComment({
        variables: {
          password: pass,
          boardCommentId: commentId
        },
        refetchQueries: [{
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.boardId
          }
        }]
      })
    } catch (error: any) {
      alert(error.message)
    }
  }

  const updateComment = (event: MouseEvent<HTMLDivElement>) => {
    setIsEdit(true)
    // alert("안녕")
  }


  return (
  
    <S.CommentListArea>
        {isEdit === false && (
            <S.CommentArea key={props.el._id}>
              <S.ContentsBox>
                <S.AvatarArea>
                  <Avatar size={40} icon={<UserOutlined />}></Avatar>
                </S.AvatarArea>

                <S.NameContentArea>
                  <S.NameStar>
                    <S.WriterName>{props.el.writer}</S.WriterName> 
                    <S.CommentRate><Rate disabled defaultValue={props.el.rating} /></S.CommentRate>
                  </S.NameStar>
                  <S.CommentContents>{props.el.contents} </S.CommentContents>
                  <S.DateArea>{props.el.createdAt.substring(0,10)}</S.DateArea>
                </S.NameContentArea>
              </S.ContentsBox>

              <S.EditIconArea>
                <S.EditIcon onClick={updateComment} />
                <S.DeleteIcon onClick={deleteCommentModal} id={props.el._id}/>
              </S.EditIconArea>
            </S.CommentArea>
        )}
        {isEdit === true && <CommentWriteBoard isEdit={true} setIsEdit={setIsEdit} el={props.el}/>}

      
      {isOpen && (
        <Modal 
        visible={true} 
        onOk={onClickDeleteComment} 
        onCancel={modalToggle}>
          비밀번호: <input type="password" onChange={onChangePassword} />
      </Modal>
      )}
    </S.CommentListArea>

      
  );
}
