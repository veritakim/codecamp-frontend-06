import '../styles/globals.css'
import "antd/dist/antd.css";
import {ApolloClient, ApolloProvider, ApolloLink,InMemoryCache} from '@apollo/client'
import Layout from '../src/commons/layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import {createUploadLink} from 'apollo-upload-client'

const firebaseConfig = {
  apiKey: "AIzaSyAugN7M0_60pSnraVMLMFEsoWki3k8Bg_s",
  authDomain: "mysite0205.firebaseapp.com",
  projectId: "mysite0205",
  storageBucket: "mysite0205.appspot.com",
  messagingSenderId: "312531372956",
  appId: "1:312531372956:web:45a69fac6955cb9cb41659"
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
}

export default MyApp
