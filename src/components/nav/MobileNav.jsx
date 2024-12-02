import { NavLink } from "react-router-dom";
import Profile from "./Profile";

const MobileNav = ({ show, setShow }) => {
  return (
    <div
      onClick={() => setShow(!show)}
      className={`${
        show ? "absolute" : "hidden"
      } bg-white p-6 rounded-md shadow-xl z-50`}
    >
      <div className="flex-row items-center justify-center font-semibold text-sm space-y-4 text-gray-900">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : null)}
        >
          <div className="block py-1">Home</div>
        </NavLink>

        <div>
          <NavLink
            to="blogs"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            <div className="block py-1">Blogs</div>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="add"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            <div className="block py-1">Post</div>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="featured"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            <div className="block py-1">Featured</div>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="wishlist"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            <div className="block py-1">Wishlist</div>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-end items-center mt-5 p-1">
        <Profile></Profile>
      </div>
    </div>
  );
};

export default MobileNav;
