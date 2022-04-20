import Button01 from "../../../commons/buttons/01"
import * as S from './CreateProduct.style'


export default function CreateProductUi (props: any) {


  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.HeadDiv>
        <S.HeadTitiel>상품 등록하기</S.HeadTitiel>
        </S.HeadDiv>

        <S.InputDiv>
          <S.LittleTitle>상품명</S.LittleTitle>
          <S.Input {...props.register("name")}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>한줄요약</S.LittleTitle>
          <S.Input {...props.register("remarks")}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>상품설명</S.LittleTitle>
          <S.Input {...props.register("contents")}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>판매 가격</S.LittleTitle>
          <S.Input {...props.register("price")}/>
        </S.InputDiv>

        <S.InputDiv>
          <S.LittleTitle>태그입력</S.LittleTitle>
          <S.Input {...props.register("tags")}/>
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