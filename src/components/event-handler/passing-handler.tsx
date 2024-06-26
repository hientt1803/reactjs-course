const PassingHandler = () => {
  const handleShowMsg = () => {
    alert("show msg");
  };

  return (
    <div>
      <button onClick={handleShowMsg}>show Msg</button>
      <ChildrenComponent msg="Children msg" showMsg={handleShowMsg} />
    </div>
  );
};

export default PassingHandler;

export const ChildrenComponent = ({
  msg,
  showMsg,
}: {
  msg: string;
  showMsg: () => void;
}) => {
  return (
    <div>
      <div>{msg}</div>
      <button onClick={showMsg}>show msg in children</button>
    </div>
  );
};
