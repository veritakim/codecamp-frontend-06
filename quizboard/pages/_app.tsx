import "antd/dist/antd.css";
import {ApolloClient, ApolloLink, ApolloProvider, InMemoryCache} from '@apollo/client'
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUploadLink } from "apollo-upload-client";

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  })
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
}

export default MyApp