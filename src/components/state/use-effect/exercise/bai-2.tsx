import { useEffect } from "react";

const SetTitle = () => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "New Title";

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return <div>Check the title of this page!</div>;
};

export default SetTitle;
