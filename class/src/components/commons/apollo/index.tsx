import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfomationState } from "../../../commons/store";
import {onError} from '@apollo/client/link/error'
import {GraphQLClient, gql} from 'graphql-request'
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
 

export default function ApolloSetting (props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [, setUserInfo] = useRecoilState(userInfomationState)

  
  // 두번째 방법
  // if(typeof window !== "undefined") {
  //   console.log("여기는 브라우저다")
  // } else {
  //   console.log("여기는 프엔 서버다")
  // }

  // 세번째 방법
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken")
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
    // setAccessToken(accessToken || "")
    // setUserInfo(userInfo)

    // accessToken 재발급 받아서 state에 넣어주기

    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, [])


                                            // 방금 실패한 쿼리, 전송해줘
  const errorLink = onError(({graphQLErrors, operation, forward}) => {
    // 실행시킬 코드
    // 1-1 에러 캐치
    if(graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰 만료 에러인지 체크 UNAUTHENTICATED
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. 리프레쉬 토큰으로 accessToken을 재발급 받자
          // useMutation은 apollo client가 셋팅되고 되는 것인데 이 밑에서 실행되어 useMutation을 할 수 없다.
          // apollo없이 graphQl하기 ~~ axios로 요청
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
          setAccessToken(newAccessToken)
  
            // 위 엑세스토큰으로 바꿔치기 한 것이 아니다.
            
            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
           
            // 쿼리에서 헤더 부분을 갖고올 수 있다.
            // operation.getContext().headers
            
            // 조작하기. 주의 점. 헤더 안에는 지금 현재는 authorization밖에 없다.
            // 다른 내용들이 있다면... ...headers로 표현? 기존헤더를 갖고 온다 operation.getContext().headers
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${accessToken}`
              }
            })
  
            // 3-2. 변경된 operation 재요청하기
            return forward(operation)
          })


        }
      }
    }
  })

  // createUploadLink로 업로드 설정. 설정한 것을 특정 변수에 담는다. clien link에 넘겨줄것이다
  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}`},
    credentials: "include"
  })

  const client = new ApolloClient({
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}