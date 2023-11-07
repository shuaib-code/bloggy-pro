import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-inter px-2 md:px-44 lg:px-52 bg-no-repeat bg-[url('https://material-kit-pro-react.devias.io/assets/gradient-bg.svg')]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
