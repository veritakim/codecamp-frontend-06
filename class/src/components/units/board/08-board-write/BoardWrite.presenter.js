// 프리젠트 

import * as S from './BoardWrite.style'

export default function BoardWriteUI (props) {


  return (
    <div>
      <div>{props.isEdit ? "수정" : "등록"}페이지</div>
        작성자: <S.WriterInput type="text" onChange={props.onChangeWriter}/> <br />
        제목: <input type="text" onChange={props.onChangeTitle}/> <br />
        내용: <input type="text" onChange={props.onChangeContents}/> <br />

      <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}하기!</S.SubmitButton>
    </div>
  )
}

