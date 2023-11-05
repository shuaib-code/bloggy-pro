import { NavLink } from "react-router-dom";

const RouteList = () => {
  return (
    <div className="flex items-center justify-center font-semibold text-sm space-x-4 text-gray-900">
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
  );
};

export default RouteList;
