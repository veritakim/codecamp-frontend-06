import Button01 from "../../../commons/buttons/01"
import 'react-quill/dist/quill.snow.css';
import * as S from './CreateProduct.style'
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from "next/dynamic";
import {v4 as uuid} from 'uuid'
import styled from "@emotion/styled";
import KakaoMapPage from "../../../commons/map";
import { useEffect } from "react";
import UploadContainer from "../../../commons/imgUpload/Uploads.container";
import KakaoMapPage3 from "../../../commons/map3";


const ReactQuill = dynamic(() => import("react-quill"), {ssr: false}) 
const ReactQuillDiv = styled(ReactQuill)`
  height: 500px;
`

export default function CreateProductUi (props: any) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  return (
    <S.Wrapper>
      <form onSubmit={props.isEdit ? props.handleSubmit(props.onClickUpdate) : props.handleSubmit(props.onClickSubmit)}> 
        <S.HeadDiv>
        <S.HeadTitiel>상품 {props.isEdit ? "수정하기" : "등록하기"}</S.HeadTitiel>
        </S.HeadDiv>

        <S.InputDiv>
          <S.LittleTitle>상품명</S.LittleTitle>
          <S.Input {...props.register("name")} placeholder="상품명을 작성해주세요" defaultValue={props.data ? props.data?.fetchUseditem.name : ""}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>한줄요약</S.LittleTitle>
          <S.Input {...props.register("remarks")} placeholder="상품요약을 작성해주세요" defaultValue={props.data ? props.data?.fetchUseditem.remarks : ""} />
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>상품설명</S.LittleTitle>
          {/* <S.Input {...props.register("contents")} defaultValue={props.data ? props.data?.fetchUseditem.contents : ""}/> */}
          
          {typeof window === "undefined" 
          ? (<div></div>)
          :
             (<ReactQuillDiv 
            onChange={props.onChangeContents}
            placeholder="상품을 설명해주세요"
            value={props.getValues("contents") || ""}
            />)
          }
        </S.InputDiv>


        <S.InputDiv>
          <S.LittleTitle>판매 가격</S.LittleTitle>
          <S.Input {...props.register("price")} placeholder="판매 가격을 입력해주세요" defaultValue={props.data ? props.data?.fetchUseditem.price : ""}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>태그입력</S.LittleTitle>
          <span>{props.hashArray.map((el, idx) => (
          <span key={idx}>{el}</span>
          ))}
        </span>
          <S.Input onKeyUp={props.onKeyUpHash} {...props.register("tags")} defaultValue={props.data ? props.data?.fetchUseditem.tags : ""}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>거래위치</S.LittleTitle>
          {props.isEdit ? (
            <KakaoMapPage3
              useditemAddress={props.useditemAddress} 
              setUseditemAddress={props.setUseditemAddress}
              data={props.data} 
              setMap={props.setMap}
              lng={props.data?.fetchUseditem.useditemAddress.lng}
              lat={props.data?.fetchUseditem.useditemAddress.lat}
            />
          ) 
          : (
            <KakaoMapPage
                useditemAddress={props.useditemAddress} 
                setUseditemAddress={props.setUseditemAddress} 
                setMap={props.setMap}
                />
          )}
        </S.InputDiv>

        <S.ImgUploadDiv>
          <S.LittleTitle>사진 첨부</S.LittleTitle>
          {props.fileUrls.map((el, index) => (
              <UploadContainer
                key={uuid()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
        </S.ImgUploadDiv>
        
        <S.ButtonArea>
        <Button01 isActive={true} title={props.isEdit ? "수정하기" :"등록하기"}></Button01>
        </S.ButtonArea>
      </form>
       

    </S.Wrapper>
  )
}