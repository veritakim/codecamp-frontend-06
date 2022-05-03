import { gql, useMutation } from "@apollo/client"
import styled from "@emotion/styled"
import { useState } from "react"

const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput! $useditemId: ID!){
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput useditemId:$useditemId) {
      _id
      contents
    }
  }
`

const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        email
        name
      }
      createdAt
    }
  }

`

const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion($updateUseditemQuestionInput: UpdateUseditemQuestionInput! $useditemQuestionId: ID!) {
    updateUseditemQuestion (updateUseditemQuestionInput: $updateUseditemQuestionInput useditemQuestionId: $useditemQuestionId) {
      _id
      contents
    }
  }
`

const Wrapper = styled.div`
  width: 379px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin: 29px 0 50px 0;
  align-items: flex-end;
`
const Contents = styled.textarea`
  width: 100%;
  height: 147px;
  border: none;
  resize: none;
  background-color: #E9E9E9;
  padding: 15px 20px;
  font-size: 20px;
`

const WriteBtn = styled.button`
  width: 116px;
  height: 42px;
  font-size: 20px;
  font-weight: 700;
  background-color: #FFE004;
  border: none;
  margin-top: 11px;
`

export default function QuestionWritePage (props: any) {
  const [createQuestion] = useMutation(CREATE_USEDITEM_QUESTION)
  const [updateQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION)

  const [contents, setContents] = useState("")

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  const onClickComment = async () => {
    try {
      await createQuestion({
        variables: {
          createUseditemQuestionInput: {contents},
          useditemId: props.id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: props.id },
          },
        ],
      })
      setContents("")
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickUpdate = async () => {
    if(!contents) {
      alert("수정된 내용이 없습니다")
      return 
    }
    
    try {
      await updateQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents
          },
          useditemQuestionId: props.el._id
        }
      })

      alert("수정이 완료되었습니다.")
      props.setIsEdit(false)

    } catch(e) {
      console.log(e.message)
    }
  }
  console.log(props.el)
  return (
    <Wrapper>
      {props.isEdit 
      ? (
        <Contents defaultValue={props.isEdit&&props.el.contents} onChange={onChangeContents}/>
      ) 
      : (
        <Contents value={contents} defaultValue={props.isEdit? props.el.contents : ""} onChange={onChangeContents}/>
      )
      }

      <WriteBtn onClick={props.isEdit ? onClickUpdate : onClickComment}>{props.isEdit? "수정하기" : "작성하기"}</WriteBtn>
    </Wrapper>
  )
}