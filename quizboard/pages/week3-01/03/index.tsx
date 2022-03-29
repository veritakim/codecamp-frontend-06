import ReactPlayer from "react-player";

export default function YoutubePage () {
  return (
    <ReactPlayer
      url="https://www.youtube.com/embed/6zLOZer4_WY"
      width={800}
      height={600}
      playing
      controls
      muted
    />
  );


}