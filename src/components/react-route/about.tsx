import { useRecoilState } from "recoil";
import { textState } from "../state-management/stores";
import { Button } from "../ui/button";

const AboutPage = () => {
  const [textStateValue, setTextStateValue] = useRecoilState(textState);

  return (
    <div>
      This is AboutPage {textStateValue}
      <Button onClick={() => setTextStateValue("NEW TEXT VALUE")}>
        Set Recoil Value
      </Button>
    </div>
  );
};

export default AboutPage;
