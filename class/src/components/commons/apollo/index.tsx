import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stroe";

export default function ApolloSetting (props) {
  const [accessToken] = useRecoilState(accessTokenState)
  // createUploadLink로 업로드 설정. 설정한 것을 특정 변수에 담는다. clien link에 넘겨줄것이다
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}`}
  })

  const client = new ApolloClient({
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}