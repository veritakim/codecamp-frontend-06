import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfomationState } from "../../../commons/store";
import {onError} from '@apollo/client/link/error'
import {GraphQLClient, gql} from 'graphql-request'
import {getAccessToken} from '../../../commons/library/getAccessToken'
 

export default function ApolloSetting (props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [, setUserInfo] = useRecoilState(userInfomationState)

  
  useEffect(() => {

    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, [])


  const errorLink = onError(({graphQLErrors, operation, forward}) => {
    if(graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
          setAccessToken(newAccessToken)
  
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${accessToken}`
              }
            })
  
            return forward(operation)
          })


        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}`},
    credentials: "include"
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}