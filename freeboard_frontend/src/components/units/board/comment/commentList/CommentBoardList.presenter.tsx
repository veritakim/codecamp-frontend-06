// import { CommentArea } from "./CommentBoardList.style";
import { CommentBoardListUiProps } from "./CommentBoardList.types";
import styled from "@emotion/styled";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETEBOARD_COMMENT } from "./CommentBoardList.queries";

const AvatarArea = styled.div`
  padding-right: 16px;
`
const CommentArea = styled.div`
 display: flex;
 flex-direction: row;
 width: 1200px;
 height: 130px;
 border-bottom: 1px solid #BDBDBD;
`
const NameContentArea = styled.div`
  padding-right: 923px;
`
const NameStar = styled.div`
  display: flex;
  padding-bottom: 4px;
`

const CommentRate = styled.div`
  font-size: 20px;
`

const WriterName = styled.div`
  font-size: 16px;
  padding-right: 18px;
`
const CommentContents = styled.div`
  font-size: 16px;
`

const DateArea = styled.div`
  padding-top: 20px;
  font-size: 12px;
  color: #BDBDBD;
`

const EditIcon = styled(EditOutlined)`
  font-size: 18px;
  padding-right: 16px;
`
const DeleteIcon = styled(DeleteOutlined)`
  font-size: 18px;
`

const EditIconArea = styled.div``
const CommentListArea = styled.div``


export default function CommentBoardListUi(props: CommentBoardListUiProps) {
  console.log(props);
  const [commentId, setCommentId] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [deleteBoardComment] = useMutation(DELETEBOARD_COMMENT)
  const deleteCommentModal = (event) => {
    // alert(event.currentTarget.id)
    setCommentId(event.currentTarget.id)
    modalToggle()
  }

  const modalToggle = () => {
    setIsOpen(prev => !prev)
    // alert(commentId);
  }

  const onChangePassword = (event) => {
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
        }
      })
    } catch (error: any) {
      alert(error.message)
    }
  }


  return (
    
    <CommentListArea>
      {props.data?.fetchBoardComments.map((el: any) => (
      <CommentArea key={el._id}>
        <AvatarArea>
          <Avatar size={40} icon={<UserOutlined />}></Avatar>
        </AvatarArea>
        <NameContentArea>
          <NameStar>
            <WriterName>{el.writer}</WriterName> 
            <CommentRate>🍉🍉🍉🍉</CommentRate>
          </NameStar>
          <CommentContents>{el.contents} </CommentContents>
          <DateArea>2012.02.05</DateArea>
        </NameContentArea>

        <EditIconArea>
          <EditIcon />
          <DeleteIcon onClick={deleteCommentModal} id={el._id}/>
        </EditIconArea>
      </CommentArea>
      ))}
      {isOpen && (
      <Modal 
        visible={true} 
        onOk={onClickDeleteComment} 
        onCancel={modalToggle}>
          비밀번호: <input type="password" onChange={onChangePassword} />
      </Modal>
      )}
    </CommentListArea>

      
  );
}
