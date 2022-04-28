import * as S from './Upload.style'
import { IUploadUiProps } from './Upload.types'

export default function UploadPresenter (props: IUploadUiProps) {
  // console.log("UploadPresenter", props.fileUrls)
  // const fileUrls = props.fileUrls.filter(el => el !== "")
  // console.log("UploadPresenter", fileUrls)

  return (
    <>
    {props.el !=="" 
    ? (<S.PhotoImg src={props.el} /> )
    : (
      <>
      <S.ImgBox onClick={props.onClickUpload}>
          <S.Plus />
       </S.ImgBox>
       <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile(props.i)}
        />
      </>
    ) 
    }
 


      {/* 
      <S.PhotoImg src={props.imgUrl[0]} alt="img"/> 
 
     
      {props.imgUrl.length > 3 
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
        */}

    </>
  )

}