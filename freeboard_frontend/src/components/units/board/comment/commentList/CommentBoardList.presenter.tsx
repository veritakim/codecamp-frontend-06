// import { CommentArea } from "./CommentBoardList.style";
import { CommentBoardListUiProps } from "./CommentBoardList.types";
import styled from "@emotion/styled";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETEBOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./CommentBoardList.queries";
import { useRouter } from "next/router";
import { Rate } from "antd";

const AvatarArea = styled.div`
  padding: 5px 16px 0 0;
`
const CommentArea = styled.div`
 display: flex;
 width: 1200px;
 height: 130px;
 justify-content: space-between; 
 border-bottom: 1px solid #BDBDBD;
 margin-top: 20px;
`
const NameContentArea = styled.div`
  padding-right: 200px;
`
const NameStar = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
`

const CommentRate = styled.div`
  font-size: 20px;
`

const WriterName = styled.div`
  font-size: 16px;
  padding-right: 18px;
  font-weight: 900;
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

const EditIconArea = styled.div`
display: flex;
`
const CommentListArea = styled.div``

const ContentsBox = styled.div`
  display: flex;
`

export default function CommentBoardListUi(props: CommentBoardListUiProps) {
  console.log(props);
  const [commentId, setCommentId] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [deleteBoardComment] = useMutation(DELETEBOARD_COMMENT)
  const router = useRouter();

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


  return (
    
    <CommentListArea>
      {props.data?.fetchBoardComments.map((el: any) => (
      <CommentArea key={el._id}>
        <ContentsBox>
          <AvatarArea>
            <Avatar size={40} icon={<UserOutlined />}></Avatar>
          </AvatarArea>

          <NameContentArea>
            <NameStar>
              <WriterName>{el.writer}</WriterName> 
              <CommentRate><Rate disabled defaultValue={el.rating} /></CommentRate>
            </NameStar>
            <CommentContents>{el.contents} </CommentContents>
            <DateArea>2012.02.05</DateArea>
          </NameContentArea>
        </ContentsBox>

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
