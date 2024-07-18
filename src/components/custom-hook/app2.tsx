import useMediaQuery from "./example2";

const CustomHookEndPoint2 = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return <div>{isSmallScreen ? <p>Small screen</p> : <p>Large screen</p>}</div>;
};

export default CustomHookEndPoint2;
 