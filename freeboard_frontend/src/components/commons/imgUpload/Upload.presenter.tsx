import * as S from './Upload.style'
import { IUploadUiProps } from './Upload.types'

export default function UploadPresenter (props: IUploadUiProps) {

  return (
    <>
      {props.fileUrl 
      ? (
        <S.MyPhotoImg
        onClick={props.onClickUpload}
        src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) 
      : (
            <S.MyPhotoBtn onClick={props.onClickUpload}>
              <S.MyPhotoSpanPlus>+</S.MyPhotoSpanPlus>
              <S.MyPhotoSpanUp>upload</S.MyPhotoSpanUp>
            </S.MyPhotoBtn>
      )}
         <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )

}