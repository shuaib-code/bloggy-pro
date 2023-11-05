import toast from "react-hot-toast";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user, logOut } = useAuth();
  const handle = () => {
    logOut()
      .then((r) => console.log(r))
      .then((e) => console.log(e));
  };
  console.log(user);
  return (
    <div>
      <h1 className="text-primary font-bold">Home</h1>
      <Logo></Logo>
      <button onClick={handle}>logout</button>
    </div>
  );
};

export default Home;
