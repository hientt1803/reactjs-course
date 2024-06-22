import { Link } from "react-router-dom";
import { YoutubeType } from "../../types/common";

const YoutubeComponent = ({
  id,
  title,
  image,
  avartar,
  authorName,
}: YoutubeType) => {
  // const isCondition = true;
  // if (isCondition) {
  //   return (
  //     <YoutubeSubItem
  //       image={"https://api.flit.edu.vn/public/uploads/2024/03/12/GAFO0AY.jpg"}
  //       title={title}
  //       authorName={authorName}
  //       avartar={avartar}
  //     />
  //   );
  // }

  // if (id === 2) {
  //   return <div>Item with true condition here!</div>;
  // }

  return (
    <Link to={`/detail/${id}`} className="flex flex-col gap-2">
      <div className="shadow-lg">
        <img
          src={
            id === 2
              ? image
              : "https://api.flit.edu.vn/public/uploads/2024/03/12/GAFO0AY.jpg"
          }
          alt="Image alt"
          className="w-full h-80 rounded-lg"
        />
      </div>
      <div className="flex justify-between gap-3">
        <div>
          <img
            src={avartar}
            alt="avatar image"
            className="w-24 h-16 rounded-full"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <div className="text-xl font-bold text-left">{title}</div>
          <div className="text-md text-muted">
            {id === 2 ? authorName : <span>Anounymous</span>}
          </div>
          <div className="text-md text-muted">
            {(id === 2 || id === 1) && "Admin"}
          </div>
        </div>
        <div>|</div>
      </div>
    </Link>
  );
};

export default YoutubeComponent;
