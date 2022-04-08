import BoardOfBest from '../boardOfBest/BoardOfBest.container';
import * as S from './BoardList.styles'
import { BoardListUiProps } from "./BoardList.types";
import {v4 as uuid} from 'uuid'



export default function BoardListUi(props: BoardListUiProps) {
  console.log(props.data);
  return (
    <S.ContainerBox>
      <S.BestBoardWrapper>
        <BoardOfBest />
      </S.BestBoardWrapper>
      <S.SearchBox>
        <S.SearchInput type="text" placeholder='Search' onChange={props.onChangeSearch}/>
      </S.SearchBox>
      <S.Wrapper>
        <S.Table>
          <tr>
            <S.Th>번호</S.Th>
            <S.ThTitle>제목</S.ThTitle>
            <S.Th>작성자</S.Th>
            <S.Th>날짜</S.Th>
          </tr>
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <tr key={uuid()}>
              <S.IndexTd>{10 - index}</S.IndexTd>
              <S.TitleTd id={el._id} onClick={props.onClickDetailMove}>
                {el.title.replaceAll(props.word, `#$%${props.word}#$%`)
                        .split("#$%").map((el) => (<S.TitleSpan key={uuid()} isMatched={el === props.word}>{el}</S.TitleSpan>))}
              </S.TitleTd>
              <S.WriterTd>{!el.writer ? "익명" : el.writer}</S.WriterTd>
              <S.Td>{el.createdAt.slice(0, 10)}</S.Td>
            </tr>
          ))}
        </S.Table>
      </S.Wrapper>
      <S.UnderLine>
      <S.PageWrapper>
        <S.MoveBtn onClick={props.onClickPrev} disabled={props.startPage === 1 ? true : false} style={{color: props.startPage === 1 ? "#BDBDBD" : "black"}}>◁</S.MoveBtn>
        {
          new Array(10).fill(1).map((_, index) => index + props.startPage <= props.lastPage ?(
            <S.SpanNumber key={index+props.startPage} 
                      onClick={props.clickMovePage} 
                      style={{color: props.currentPage === index + props.startPage ? "red" : "black"}}
                      id={String(index + props.startPage)}>
                        {index + props.startPage}
            </S.SpanNumber>
            ) : "")
            
          }
        <S.MoveBtn onClick={props.onClickNext} disabled={props.startPage + 10 <= props.lastPage ? false : true} style={{color: props.startPage + 10 <= props.lastPage ? "black" : "gray"}}>▷</S.MoveBtn>
      </S.PageWrapper>
     
        <S.WriteButton onClick={props.MoveWritePage}>게시물 등록하기</S.WriteButton>
      </S.UnderLine>
    </S.ContainerBox>
  );
}
