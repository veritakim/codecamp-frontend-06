import "antd/dist/antd.css";
// import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  RecoilRoot,
} from 'recoil';
import ApolloSetting from "../src/components/commons/apollo";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugN7M0_60pSnraVMLMFEsoWki3k8Bg_s",
  authDomain: "mysite0205.firebaseapp.com",
  projectId: "mysite0205",
  storageBucket: "mysite0205.appspot.com",
  messagingSenderId: "312531372956",
  appId: "1:312531372956:web:45a69fac6955cb9cb41659"
};

// Initialize Firebase
// 온클릭섭밋 겟파이어스토어
export const firebaseApp = initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }: AppProps) {
  

  return (
      <RecoilRoot>
        <ApolloSetting>

            <Global styles={globalStyles}/>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </ApolloSetting>
      </RecoilRoot>
  );
}

export default MyApp;
