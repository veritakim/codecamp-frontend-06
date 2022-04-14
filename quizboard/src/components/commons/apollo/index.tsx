import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../commons/store"

export default function ApolloSetting (props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  
  useEffect(() => {
    const localStorageItem = localStorage.getItem("accessToken")
    setAccessToken(localStorageItem || "")
  }, [])

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}`}
  })
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )


}