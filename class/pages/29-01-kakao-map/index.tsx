import Head from "next/head"
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaoMapPage () {

  useEffect(() => {
    const container = document.getElementById('map'); 
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
      level: 3
    };

    // marker도 하고 예제들을 맵에다가 그림을 그리기 때문에 map 변수에 담아줬다.
    const map = new window.kakao.maps.Map(container, options); 
  }, [])

  return (
    <div>
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=780f78ca29b5652cc8b371e731e0e8ae"></script>
      </Head>
      <div id="map" style={{width:500, height:400}}></div>
    </div>
  )
}