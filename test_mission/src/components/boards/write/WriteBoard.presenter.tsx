import UploadContainer from '../../../commons/imgUpload/Upload.container'
import * as S from './WriteBoard.styled'
import {v4 as uuid} from 'uuid'



export default function WriteBoardUi (props) {
  console.log(props.isDel)
  return (
    <>
    <S.Wrapepr>
      <S.Head>
       {props.isEdit ? "게시물 수정" : "새 글 작성"} 
      </S.Head>

      <S.Title>
        <S.TitleName >제목</S.TitleName>
         <S.TitleInput type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title || ""}/>
      </S.Title>

      <S.Contents>
        <S.TitleName>내용</S.TitleName>
         <S.ContentTextArea onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents || ""}/>
      </S.Contents>

      <S.ImgArea>
        <S.ImgName>이미지</S.ImgName>
        {props.fileUrls?.map((el, index) => (
          <UploadContainer
            key={uuid()}
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
            />
        ))}
      </S.ImgArea>

      <S.Bottom>
        <S.BottomArea>
          <S.TitleName>작성자</S.TitleName>
           <S.WriterInput onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.title || ""}/>
        </S.BottomArea>
        <S.TitleName>비밀번호</S.TitleName>
          <S.PasswordInput type="password" onChange={props.onChangePassword}/>
        <S.Password></S.Password>
      </S.Bottom>
    </S.Wrapepr>
    <S.ButtonArea>
      {props.isEdit
      ? <S.SubmitBtn onClick={props.onClickUpdate}>수정</S.SubmitBtn>
      :
        <S.SubmitBtn onClick={props.onClickSubmit}>등록</S.SubmitBtn>
      }
      <S.CancelBtn onClick={props.onClickCancel}>취소</S.CancelBtn>
    </S.ButtonArea>
    </>
  )
}
