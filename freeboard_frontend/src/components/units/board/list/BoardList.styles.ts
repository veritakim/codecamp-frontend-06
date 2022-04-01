import styled from "@emotion/styled";

export const ContainerBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 583px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 80px;
`;

export const Table = styled.table`
 width: 1200px;
 height: 100%;
 border-top: 2px solid #828282;
 border-bottom: 1px solid black;
 border-collapse:collapse;
 text-align: center;
 `

export const Th = styled.th`
  font-size: 18px;
`;

export const Td = styled.td`
  border-top: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
`;
export const IndexTd = styled(Td)`
  width: 100px;
`;
export const TitleTd = styled(Td)`
  width: 700px;
  cursor: pointer;
`;
export const WriterTd = styled(Td)`
  width: 150px;
`;





export const WriteButton = styled.button`
  width: 171px;
  height: 52px;
  font-size: 16px;
  background-color: white;
  border: 1px solid #f2f2f2;
  cursor: pointer;
`;
export const UnderLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 40px;
`;

// page
export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 170px;
`

export const SpanNumber = styled.button`
  width: 40px;
  height: 38px;
  margin: 0 2px 0 2px;
  background: white;
  border: 1px solid #828282;
  border-radius: 10px;
`

export const MoveBtn = styled(SpanNumber)`
  background-color: whitesmoke;
`

export const BestBoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 339px;
`