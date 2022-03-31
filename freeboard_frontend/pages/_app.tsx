import '../styles/globals.css'
import "antd/dist/antd.css";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Layout from '../src/commons/layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
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
