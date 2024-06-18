import React from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-black flex justify-center items-center gap-3 mb-20 p-2">
        <h4>Header</h4>
        <Link to={"about"} className="text-black dark:text-neutral-200 hover:text-white">About</Link>
        <Link to={"/"} className="text-black dark:text-neutral-200 hover:text-white">Home</Link>
      </div>
      <div>{children}</div>
      <div className="bg-black flex justify-center items-center gap-3 mt-20 font-bold p-8">
        Footer
      </div>
    </div>
  );
};

export default MainLayout;
