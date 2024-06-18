import YoutubeComponent from "./components/props/YoutubeComponent";
import MainLayout from "./layouts/MainLayout";
import { youtubeData } from "./lib/youtubeData";
import "./styles/App.css";
import { YoutubeType } from "./types/common";

const listYoutubes: YoutubeType[] = youtubeData;
function App() {
  return (
    <div className="App">
      <MainLayout>
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
      </MainLayout>
    </div>
  );
}

export default App;
