import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center font-inter bg-no-repeat bg-[url('https://material-kit-pro-react.devias.io/assets/gradient-bg.svg')]">
      <div className="mt-16 p-7">
        <div className="flex justify-center items-center">
          <img src="/404.png" />
        </div>
        <h1 className="text-xl font-bold text-center my-10">
          <span className="text-red-500">404 </span>: The page you are looking
          for isn’t here
        </h1>
        <p className="text-sm font-medium text-gray-700 text-center">
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation.
        </p>
        <NavLink to="/">
          <p className="mt-8 mb-24 font-semibold text-primary text-center">
            Back to Home
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
