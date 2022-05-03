import { gql, useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import QuestionItems from "./QuestionItems";
import {v4 as uuid} from 'uuid'

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
const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId:$useditemQuestionId)
  }

`

export default function QuestionListPage (props: any) {
  const router = useRouter();

  // 문의 가져오기
  // const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {

  // console.log("list", props.id)
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: props.id
    }
  })

  const [deleteQuestion] = useMutation(DELETE_USED_ITEM_QUESTION)
  /*
  const loadFunc = () => {
    if(!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if(!fetchMoreResult?.fetchUseditemQuestions) {
          return {fetchUseditemQuestions: [...prev.fetchUseditemQuestions]}
        }
        return {
          fetchUseditemQuestions: [...prev.fetchUseditemQuestions, ...fetchMoreResult.fetchUseditemQuestions]
        }
      }
    })
  }
  */

  const deleteQuetion = (id: string) => async () => {
    // alert(id)
    try {
      await deleteQuestion({
        variables:{
          useditemQuestionId: id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: props.id },
          },
        ],
      });

      alert("삭제 완료")
    } catch(e: any) {
      alert(e.message)
    }
  }

  return (

  <div>
    {data?.fetchUseditemQuestions.length < 1 
    && (
      <div>등록된 댓글이 없습니다.</div>
    )
    }
    {data?.fetchUseditemQuestions.map((el) => (
      <QuestionItems key={uuid()} el={el} deleteQuetion={deleteQuetion}/>
    ))}

  </div>
  )
}