import '../styles/globals.css'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from '../src/commons/layout'
import { createUploadLink } from 'apollo-upload-client'


function MyApp ({ Component, pageProps }) {

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
