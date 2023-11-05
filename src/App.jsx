import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font-inter">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
