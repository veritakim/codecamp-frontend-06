import axios from "axios";
import { useEffect, useState } from "react"

export default function OpenApiPage () {
  const [dogUrl, setDogUrl] = useState("");
  useEffect(() => {
    const callUrl = async() => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random")
      setDogUrl(result.data.message)
    }
    callUrl()
  }, [])


  return (

    <div>
      <div>open Api Quiz</div>
      <img src={dogUrl} ></img>
    </div>
  )
}