import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { DELETE_BOARD } from "../detail/DetailBoard.queris"
import styled from "@emotion/styled"

const Wrapepr = styled.div`
  width: 740px;
  height: 648px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`
const Head = styled.div`
  width: 100%;
  height: 84px;
  border-bottom: 1px solid #6400FF;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`
export const ButtonArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SubmitBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  margin-right: 30px;
  font-size: 12px;
  font-weight: 700;
`
export const CancelBtn = styled(SubmitBtn)``
const PasswordArea = styled.div`
  height: 200px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`
const PasswordInput = styled.input`
  width:242px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border: 1px solid #E5E5E5;
`

export default function DeleteProcess (props) {
  // 삭제 시키는 함수
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const router = useRouter();
  const onClickDeleteBoard = () => {
    try {
      alert("게시글이 삭제되었습니다")
      deleteBoard({
        variables: {
          boardId: router.query.boardId
        }
      })

      router.push('/boards') 
    } catch (e) { alert(e.message) }
  }

  const onClickCancel = () => {
    router.push(`/boards/${router.query.boardId}`)
  }
  return (
    <>
      <Wrapepr>
        <Head>
        게시물 삭제
        </Head>
        <PasswordArea>
          <div>비밀번호 : </div>
          <PasswordInput type="password" />
        </PasswordArea>
      </Wrapepr>
      <ButtonArea>
          <SubmitBtn onClick={onClickDeleteBoard}>삭제</SubmitBtn>
          <CancelBtn onClick={onClickCancel}>취소</CancelBtn>
      </ButtonArea>
    </>

  )

}