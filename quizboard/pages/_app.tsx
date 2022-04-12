import "antd/dist/antd.css";
import {ApolloClient, ApolloLink, ApolloProvider, InMemoryCache} from '@apollo/client'
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUploadLink } from "apollo-upload-client";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }) {
  
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>

  )
}

export default MyApp