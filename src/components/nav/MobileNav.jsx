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
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="blogs"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            Blogs
          </NavLink>
        </div>
        <div>
          <NavLink
            to="add"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            Post
          </NavLink>
        </div>
        <div>
          <NavLink
            to="featured"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            Featured
          </NavLink>
        </div>
        <div>
          <NavLink
            to="wishlist"
            className={({ isActive }) => (isActive ? "text-primary" : null)}
          >
            Wishlist
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
