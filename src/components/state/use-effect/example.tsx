import { useEffect } from "react";

export const ExampleEffect = () => {
  // UseEffect này sẽ chạy sau khi component được mount
  useEffect(() => {
    const exampleDiv = document.getElementById("expDiv");

    if (!exampleDiv) return;

    const timeOut = setTimeout(() => {
      exampleDiv.innerHTML = "useEffect Run after component mounted";
    }, 3000);

    return () => {
      exampleDiv.innerHTML = "Loading...";
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div>
      <div>ExampleEffect</div>

      <div>
        <h1 id="expDiv">Loading...</h1>
      </div>
    </div>
  );
};
