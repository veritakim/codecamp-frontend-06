import styled from "@emotion/styled";

export const CommentArea = styled.div`
  border-top: 1px solid #bdbdbd;
  width: 1200px;
  height: 100%;
`;

export const CommentWriterArea = styled.div`
  padding-top: 40px;
`;
export const CommentText = styled.div`
  font-size: 18px;
  padding-bottom: 40px;
`;
export const CommentWriterInput = styled.div`
  padding-bottom: 20px;
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;

export const CommentContentsArea = styled.div`
  width: 1200px;
  border: 1px solid #bdbdbd;
`;

export const CommentContents = styled.textarea`
  width: 100%;
  height: 108px;
  resize: none;
  padding: 20px;
  border: none;
  font-size: 16px;
`;

export const CommentContentsBtnArea = styled.div`
  height: 52px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
`;

export const TextCount = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;

export const CommentRegisterBtn = styled.button`
  width: 91px;
  height: 100%;
  background-color: black;
  color: white;
  cursor: pointer;
`;
