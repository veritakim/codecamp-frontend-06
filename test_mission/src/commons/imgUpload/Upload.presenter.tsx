import * as S from './Upload.style'
import { IUploadUiProps } from './Upload.types'

export default function UploadPresenter (props: IUploadUiProps) {

  return (
    <>
      {props.fileUrl 
      ? (
        <S.PhotoImg
        onClick={props.onClickUpload}
        src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) 
      : (
            <S.ImgBox onClick={props.onClickUpload}>
              <S.Plus />
            </S.ImgBox>
      )}
         <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )

}