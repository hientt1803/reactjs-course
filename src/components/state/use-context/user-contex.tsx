import React from "react";
import { useUser } from "./providers/user-provider";

const UserProfile = () => {
  const { user, setUser } = useUser();

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "john.doe@example.com" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>No user logged in</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
