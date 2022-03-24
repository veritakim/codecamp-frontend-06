// 프리젠트 

import * as S from './BoardWrite.style'

export default function BoardWriteUI (props) {
  
  return (
    <div>
      <div>{props.isEdit ? "수정" : "등록"}페이지</div>
        작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/> <br />
        제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} /> <br />
        내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} /> <br />

      <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}하기!</S.SubmitButton>
    </div>
  )
}

