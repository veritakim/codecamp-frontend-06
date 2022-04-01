import styled from '@emotion/styled'
import { MouseEvent, useState } from 'react'

const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

export default function BoardCommentItem (props) {
  const [isEdit, setIsEdit] = useState(false);
 
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setIsEdit(true)
  }
  return (
    <div>
        {isEdit === false && (
          <MyRow key={props.el._id}>
            <MyColumn><input type="checkbox" /></MyColumn>
            <MyColumn>{props.el.writer}</MyColumn>
            <MyColumn>{props.el.title}</MyColumn>
            <button onClick={onClickEdit}>수정</button>
          </MyRow>
        )}
        {isEdit === true && (<div>수정하기 화면입니다</div>)}
      </div>

  )
}