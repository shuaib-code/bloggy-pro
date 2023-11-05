import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font-inter">
        <Outlet></Outlet>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
