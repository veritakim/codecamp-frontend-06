import Head from "next/head"
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaoMapPage () {

  useEffect(() => {
    // 스크립트 태그를 만들고 다운로드 기다리고 !!!
    const script = document.createElement("script") // <script> </script> 생성
    // 스크립트에 src 주소 넣어주기 
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=780f78ca29b5652cc8b371e731e0e8ae&autoload=false"
    // head에 script를 자식으로 추가하기
    document.head.appendChild(script) 

    // 스크립트가 온로드 될 때까지 기다리기
    script.onload = () => {
      // 카카오 맵도 온로드 될때까지 기다리기
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); 
        const options = {
          center: new window.kakao.maps.LatLng(37.48343859327947, 126.89707725933629 ), 
          level: 3
        };
    
        // marker도 하고 예제들을 맵에다가 그림을 그리기 때문에 map 변수에 담아줬다.
        const map = new window.kakao.maps.Map(container, options); 
      })
    }
  }, [])

  return (
    <div>
      {/* <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=780f78ca29b5652cc8b371e731e0e8ae"></script>
      </Head> */}
      <div id="map" style={{width:500, height:400}}></div>
    </div>
  )
}