import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="bg-black flex justify-center items-center gap-3 mb-20 p-2 sticky top-0 left-0 right-0">
        <Link to={"/"} className="text-neutral-200 dark:hover:text-white">
          Home
        </Link>
        <Link to={"about"} className="text-neutral-200 dark:hover:text-white">
          About
        </Link>
        <Link to={"contact"} className="text-neutral-200 dark:hover:text-white">
          Contact
        </Link>
        <Link
          to={"articles"}
          className="text-neutral-200 dark:hover:text-white"
        >
          Articles
        </Link>
        <Link
          to={"auth/profile"}
          className="text-neutral-200 dark:hover:text-white"
        >
          Profiles
        </Link>
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
      <div className="bg-black flex justify-center items-center gap-3 mt-20 font-bold p-8 w-full">
        Footer
      </div>
    </>
  );
};

export default MainLayout;
