import styled from "@emotion/styled";
import { useState } from "react";
import QuestionWritePage from "../write/QuestionWrite";

const Wrapper = styled.div`
  width: 363px;
  height: 115px;
  margin-bottom: 36px;
`

const UserArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`
const UserInfo = styled.div`
  display: flex;
`

const UserPic = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 16px;
`
const UserNameArea = styled.div`
  display: flex;
  flex-direction: column;
`
const UserName = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-top: 5px;
`
const CreateAt = styled.div`
  font-size: 15px;
  margin-top: -10px;
`

const EditIcon = styled.img`
  width: 18px;
  height: 18px;
`
const DeleteIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 16px;
  cursor: pointer;
`

const Contents = styled.div`
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
`

export default function QuestionItems (props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdate = () => {
    setIsEdit(true)
  }
  return (
    <div>

      {isEdit && (
        <QuestionWritePage isEdit={true} setIsEdit={setIsEdit} el={props.el}/>
      )}
      
      {!isEdit && (
        <Wrapper>
          
          <UserArea>
            <UserInfo>
              <UserPic src="/profile.png"/>
            
              <UserNameArea>
                <UserName>{props.el.user.name}</UserName>
                <CreateAt>{props.el.createdAt.substring(0,10)}</CreateAt>
              </UserNameArea>
            </UserInfo>

              <div>
                <EditIcon src="/update.png" onClick={onClickUpdate}/>
                <DeleteIcon src="/delete.png" onClick={props.deleteQuetion(props.el._id)}/>
              </div>
          </UserArea>

          <Contents>{props.el.contents}</Contents>
        </Wrapper>

      )}
    </div>
  )

}