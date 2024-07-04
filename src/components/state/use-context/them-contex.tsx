import { Button } from "../../ui/button";
import { useTheme } from "./providers/theme";

const ThemeContexExample = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <Button variant={"default"} onClick={() => toggleTheme()}>
      toggleTheme
    </Button>
  );
};

export default ThemeContexExample;
