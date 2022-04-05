import axios from "axios"
import { useEffect, useState } from "react"

export default function OpenApiWithUseEffect () {

  const [dogUrl, setDogUrl] = useState("");
  useEffect(() => {
    const aaa = async() => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random")
      setDogUrl(result.data.message)
    };
    aaa();
  }, [])

  return (
    <>
      <div>오픈 api 연습</div>
      <img src={dogUrl}></img>
    </>
  )
}