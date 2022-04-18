import {v4 as uuid} from 'uuid'
import { getDate } from '../../../commons/libraries/utils'
import * as S from './BoardList.styled'
import InfiniteScroll from "react-infinite-scroller";


export default function BoardsListUI (props) {
  // console.log(props.data?.fetchBoards)
  return (
    <S.Container>
              <S.Wrapper key={props.el._id} id={props.el._id} onClick={props.onClickMove}>
                <S.Title>{props.el.title}</S.Title>
                <S.DataWrapper>{getDate(props.el.createdAt)}</S.DataWrapper>
              </S.Wrapper>
        </S.Container>

  )
}
