import { gql, useMutation } from "@apollo/client"
import styled from "@emotion/styled"
import { useState } from "react"

const CREATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput! $useditemQuestionId: ID!){
    createUseditemQuestionAnswer(createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput useditemQuestionId:$useditemQuestionId) {
      _id
      contents
    }
  }
`

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
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
    updateUseditemQuestion (createQuestionAnswer: $updateUseditemQuestionInput useditemQuestionId: $useditemQuestionId) {
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
  margin-left: 40px;
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

export default function QuestionAnswerPage (props: any) {
  const [createQuestionAnswer] = useMutation(CREATE_USEDITEM_QUESTION_ANSWER)
  const [updateQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION)

  const [contents, setContents] = useState("")

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  console.log("answer", props.id)

  const onClickComment = (id: string)=>async () => {
    props.setIsAnswer(false)
    try {
      await createQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {contents},
          useditemQuestionId: id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: id },
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
  // console.log(props.el)
  return (
    <Wrapper>

        {props.isEdit 
        ? (
          <Contents  defaultValue={props.isEdit&&props.el.contents} onChange={onChangeContents}/>
        ) 
        : (
          <Contents value={contents} onChange={onChangeContents}/>
        )
        }

      <WriteBtn onClick={props.isEdit ? onClickUpdate : onClickComment(props.id)}>{props.isEdit? "수정하기" : "작성하기"}</WriteBtn>
    </Wrapper>
  )
}