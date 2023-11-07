import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-1 font-semibold text-white border-2 border-primary bg-primary rounded shadow-sm"
        >
          Log In
        </motion.button>
      </Link>
      <Link to="/register">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-1 font-semibold text-primary bg-white border-2 border-primary rounded shadow-sm"
        >
          Register
        </motion.button>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogOut}
            className="px-5 py-1 font-semibold text-white border-2 border-primary bg-primary rounded shadow-sm"
          >
            Log Out
          </motion.button>
        ) : (
          login
        )}
      </div>
    </div>
  );
};

export default Profile;
