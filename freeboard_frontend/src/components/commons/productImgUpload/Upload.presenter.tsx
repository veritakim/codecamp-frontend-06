import * as S from './Upload.style'
import { IUploadUiProps } from './Upload.types'

export default function UploadPresenter (props: IUploadUiProps) {

  return (
    <>
      {props.imgData.map((e, i) => (
          e !== "" &&
          <S.PhotoImg key={i} src={`https://storage.googleapis.com/${e}`} alt="img"/> 
      ))}
      {props.imgData.length > 3 
              ? (<div></div>) 
              : (
                <div>
                  <S.ImgBox onClick={props.onClickUpload}>
                      <S.Plus />
                      </S.ImgBox>
                  <S.UploadFileHidden
                  type="file"
                  ref={props.fileRef}
                  onChange={props.onChangeFile}
                />
                </div>
              )
            }

    </>
  )

}