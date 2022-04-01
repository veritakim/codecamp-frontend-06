import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { MouseEvent, useState } from 'react'


const FETCH_BOARDS = gql `
  query fetchBoards{
        fetchBoards{
          _id
          writer
          title
          contents
        }
}
`
const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

export default function CommentEditPage () {
                    // 안에는 셋팅값
  const {data} = useQuery(FETCH_BOARDS)
  const [myIndex, setMyIndex] = useState(
    [false, 
    false, 
    false, 
    false, 
    false,
    false, 
    false, 
    false, 
    false, 
    false]
  )

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const aaa = myIndex
    aaa[event.target.id] = true
    console.log(aaa)

    setMyIndex([...aaa])
  }

  return (
    <div>
      {data?.fetchBoards.map( (el, index) => 
      (
      <div key={el.id}>
        {myIndex[index] === false && (
          <MyRow key={el._id}>
            <MyColumn><input type="checkbox" /></MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button id={index} onClick={onClickEdit}>수정</button>
          </MyRow>
        )}
        {myIndex[index] === true && (<div>수정하기 화면입니다</div>)}
      </div>
     ))}
     
    </div>
    
  )
}

