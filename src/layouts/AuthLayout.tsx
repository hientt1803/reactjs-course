import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="container flex justify-between gap-10">
      <div className="flex flex-1 flex-col items-center gap-8 bg-neutral-100 dark:bg-neutral-900 min-h-[100vh]">
        <Link
          to={"/"}
          className="text-black dark:text-neutral-200 dark:hover:text-white"
        >
          Home
        </Link>
        <Link
          to={"/auth/profile"}
          className="text-black dark:text-neutral-200 dark:hover:text-white"
        >
          Profile
        </Link>
        <Link
          to={"/auth/forgot-password"}
          className="text-black dark:text-neutral-200 dark:hover:text-white"
        >
          Forgot password?
        </Link>
      </div>
      <div className="flex-[3]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
