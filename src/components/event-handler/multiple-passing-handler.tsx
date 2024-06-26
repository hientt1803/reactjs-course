export default function MultiplePassingHandler() {
  const handlePlaymovie = () => {
    alert("Playing!");
  };

  const handleUploading = () => {
    alert("Uploading!");
  };

  return (
    <Toolbar onPlayMovie={handlePlaymovie} onUploadImage={handleUploading} />
  );
}

//
function Toolbar({
  onPlayMovie,
  onUploadImage,
}: {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return <button onClick={onClick}>{children}</button>;
}
