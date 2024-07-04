import { Button } from "../../ui/button";
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
          <Button variant={"destructive"} onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <p>No user logged in</p>
          <Button variant={"secondary"} onClick={handleLogin}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
