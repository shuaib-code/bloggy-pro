import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Successfully logged out."))
      .catch(() => toast.error("Something is went worng"));
  };
  const login = (
    <>
      <Link to="/login">
        <button className="px-5 py-1 font-semibold text-white border-2 border-primary bg-primary rounded shadow-sm">
          Log In
        </button>
      </Link>
      <Link to="/register">
        <button className="px-5 py-1 font-semibold text-primary bg-white border-2 border-primary rounded shadow-sm">
          Register
        </button>
      </Link>
    </>
  );
  return (
    <div className="flex justify-center items-center space-x-2 font-plusJakartaSans">
      <div>
        {user ? (
          user?.photoURL ? (
            <img className="w-8 rounded-full" src={user.photoURL}></img>
          ) : null
        ) : null}
      </div>
      <div className="space-x-2">
        {user ? (
          <button
            onClick={handleLogOut}
            className="px-5 py-1 font-semibold text-white border-2 border-primary bg-primary rounded shadow-sm"
          >
            Log Out
          </button>
        ) : (
          login
        )}
      </div>
    </div>
  );
};

export default Profile;
