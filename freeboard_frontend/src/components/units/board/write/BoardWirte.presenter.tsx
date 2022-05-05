import { IBoardWriteUiProps } from "./BoardWirte.types";
import { Modal } from "antd";
import {v4 as uuid} from 'uuid'
import DaumPostcode from 'react-daum-postcode';
import {
  MyPage,
  Wrapper,
  MyTitle,
  MyHeadWrapper,
  MyLittleWrapper,
  MySmallTitle,
  MySmallInput,
  MyMiddleWrapper,
  MyMiddleInput,
  MyMiddleText,
  MyMiddleTextArea,
  MyAddrWrapper,
  MyAddrCode,
  MyAddrCodeInput,
  MyAddrBtn,
  MyAddrWrappert,
  MyPhotoBody,
  // MyPhotoWrapper,
  // MyPhotoBtn,
  // MyPhotoSpanPlus,
  // MyPhotoSpanUp,
  MyMain,
  MyMainDiv,
  MyMainRadio,
  MyRegisterBtnDiv,
  MyRegisterBtn,
  ErrorDiv,
  MyPhotoWrapper
} from "./BoardWrite.style";
import UploadContainer from "../../../commons/imgUpload/Uploads.container";

export default function BoardWriteUi(props: IBoardWriteUiProps) {
  // console.log("데이터", props.data?.fetchBoard.boardAddress);

  return (
    <MyPage>
      <Wrapper>
        <MyTitle>게시물 {props.isEdit === true ? "수정" : "등록"}</MyTitle>

        <MyHeadWrapper>
          <MyLittleWrapper>
            <MySmallTitle>작성자</MySmallTitle>
            <MySmallInput
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeName}
              defaultValue={props.data ? props.data.fetchBoard.writer : ""}
            />
            <ErrorDiv>{props.nameError}</ErrorDiv>
          </MyLittleWrapper>

          <MyLittleWrapper>
            <MySmallTitle>비밀번호</MySmallTitle>
            <MySmallInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePass}
            />
            <ErrorDiv>{props.passWordError}</ErrorDiv>
          </MyLittleWrapper>
        </MyHeadWrapper>

        <MyMiddleWrapper>
          <MySmallTitle>제목</MySmallTitle>
          <MyMiddleInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data ? props.data.fetchBoard.title : ""}
          />
          <ErrorDiv>{props.titleError}</ErrorDiv>
        </MyMiddleWrapper>

        <MyMiddleTextArea>
          <MySmallTitle>내용</MySmallTitle>
          <MyMiddleText
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContent}
            defaultValue={props.data ? props.data.fetchBoard.contents : ""}
          />
          <ErrorDiv>{props.contentError}</ErrorDiv>
        </MyMiddleTextArea>

        <MyAddrWrapper>
          <MySmallTitle>주소</MySmallTitle>
          <MyAddrCode>
             {/* <MyAddrCodeInput type="text" 
             value={
               props.zipcode || 
               props.data?.fetchBoard.boardAddress?.zipcode || ""} readOnly/> */}
             <MyAddrCodeInput type="text" 
             value={props.zipcode || 
              props.data?.fetchBoard.boardAddress?.zipcode} readOnly/>
            <MyAddrBtn onClick={props.setToggle}>우편번호 검색</MyAddrBtn>
          </MyAddrCode>
            <MyMiddleInput type="text" 
              value={
               props.addr || 
               props.data?.fetchBoard.boardAddress?.address || ""} readOnly/>
        
          <ErrorDiv>{props.addrError}</ErrorDiv>
        </MyAddrWrapper>
        <MyAddrWrappert>
          <MyMiddleInput type="text" 
            placeholder="상세주소 입력" 
            onChange={props.onChangeAddrDetail}  
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail || ""}/>
          <ErrorDiv>{props.addrDetailError}</ErrorDiv>
        </MyAddrWrappert>

        <MyMiddleWrapper>
          <MySmallTitle>유튜브</MySmallTitle>
          <MyMiddleInput
            type="text"
            placeholder="링크를 복사해주세요"
            onChange={props.onChageYoutue}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
          />
        </MyMiddleWrapper>

        <MyPhotoBody>
          <MyPhotoWrapper>
            {props.fileUrls.map((el, index) => (
                <UploadContainer
                  key={uuid()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
            ))}
          </MyPhotoWrapper>
        </MyPhotoBody>

        <MyMain>
          <MyMainDiv>
            <MyMainRadio type="radio" id="youtubeRadio" name="drone" />
            <label htmlFor="youtubeRadio">유튜브</label>
          </MyMainDiv>
          <MyMainDiv>
            <MyMainRadio type="radio" id="pictureRadio" name="drone" />
            <label htmlFor="pictureRadio">사진</label>
          </MyMainDiv>
        </MyMain>

        <MyRegisterBtnDiv>
          <MyRegisterBtn
            onClick={props.isEdit ? props.boardEdit : props.signCheck}
            isActive={props.isActive}
          >
            {props.isEdit === true ? "수정" : "등록"}
          </MyRegisterBtn>
        </MyRegisterBtnDiv>
      </Wrapper>
      {props.isOpen && 
        <Modal
        visible={true}
        onOk={props.setToggle}
        onCancel={props.setToggle}>
          <DaumPostcode onComplete={props.handleComplete}  />
        </Modal>
      }
    </MyPage>
  );
}
