import Button01 from "../../../commons/buttons/01"
import * as S from './CreateProduct.style'
import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';
import dynamic from "next/dynamic";


// const Editor = dynamic(() => import("@toast-ui/react-editor"), {ssr: false}) 
import { EditorProps } from '@toast-ui/react-editor';

const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor')
  .then(m => m.Editor), { ssr: false });


export default function CreateProductUi (props: any) {

  return (
    <S.Wrapper>
      <form onSubmit={props.isEdit? props.handleSubmit(props.onClickUpdate) : props.handleSubmit(props.onClickSubmit)}>
        <S.HeadDiv>
        <S.HeadTitiel>상품 {props.isEdit ? "수정하기" : "등록하기"}</S.HeadTitiel>
        </S.HeadDiv>

        <S.InputDiv>
          <S.LittleTitle>상품명</S.LittleTitle>
          <S.Input {...props.register("name")} defaultValue={props.data ? props.data?.fetchUseditem.name : ""}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>한줄요약</S.LittleTitle>
          <S.Input {...props.register("remarks")} defaultValue={props.data ? props.data?.fetchUseditem.remarks : ""}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>상품설명</S.LittleTitle>
          {/* <S.Input {...props.register("contents")} defaultValue={props.data ? props.data?.fetchUseditem.contents : ""}/> */}
          
          {typeof window === "undefined" 
          ? (<div></div>)
          :
          ( <Editor />)  
        }
         

        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>판매 가격</S.LittleTitle>
          <S.Input {...props.register("price")} defaultValue={props.data ? props.data?.fetchUseditem.price : ""}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>태그입력</S.LittleTitle>
          <S.Input {...props.register("tags")} defaultValue={props.data ? props.data?.fetchUseditem.tags : ""}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>거래위치</S.LittleTitle>
          <S.Input />
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>사진 첨부</S.LittleTitle>
          <S.Input />
        </S.InputDiv>
        
        <S.ButtonArea>
        <Button01 isActive={true} title={"등록하기"}></Button01>
        </S.ButtonArea>
      </form>
    </S.Wrapper>
  )
}