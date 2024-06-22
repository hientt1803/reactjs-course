import { useParams } from "react-router-dom";

const YoutubeDetail = () => {
  const { youtubeId } = useParams();
  return <div>Dynamic YoutubeDetail of {youtubeId}</div>;
};

export default YoutubeDetail;
