import { youtubeData } from "../../lib/youtubeData";
import YoutubeComponent from "../props/YoutubeComponent";

type YoutubeType = {
  id: number;
  title: string;
  image: string;
  avartar: string;
  authorName: string;
};

const listYoutubes: YoutubeType[] = youtubeData;
const ListYoutube = () => {
  return (
    // Đây là cách render list với map and props
    // Thử import component này vào component App thay và xóa code render list trong component App
    // Kết quả vẫn sẽ giống nhau
    <div className="grid grid-cols-3 gap-8">
      {listYoutubes.map((youtube) => (
        <YoutubeComponent
          key={youtube.id}
          id={youtube.id}
          title={youtube.title}
          authorName={youtube.authorName}
          avartar={youtube.avartar}
          image={youtube.image}
        />
      ))}
    </div>
  );
};

export default ListYoutube;
