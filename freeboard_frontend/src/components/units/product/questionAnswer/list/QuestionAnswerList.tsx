import { gql, useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import QuestionItems from "./QuestionAnswerListItems";
import {v4 as uuid} from 'uuid'

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
const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
  }

`

export default function QuestionAnswerListPage (props: any) {
  const router = useRouter();

  // 문의 가져오기

  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.id
    }
  })

  console.log("answer", data)
  const [deleteQuestionAnswer] = useMutation(DELETE_USED_ITEM_QUESTION_ANSWER)
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

  const deleteQuetionAnswer = (id: string) => async () => {
    // alert(id)
    try {
      await deleteQuestionAnswer({
        variables:{
          useditemQuestionId: id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: id },
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
    {data?.fetchUseditemQuestionAnswers.length < 1 
    && (
      <div>등록된 댓글이 없습니다.</div>
    )
    }
    {data?.fetchUseditemQuestionAnswers.map((el) => (
      <QuestionItems key={uuid()} el={el} deleteQuetionAnswer={deleteQuetionAnswer}/>
    ))}

  </div>
  )
}