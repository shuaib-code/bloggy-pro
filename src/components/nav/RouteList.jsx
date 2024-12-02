import { NavLink } from "react-router-dom";

const RouteList = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/blogs", text: "Blogs" },
    { to: "/add", text: "Post" },
    { to: "/featured", text: "Featured" },
    { to: "/wishlist", text: "Wishlist" },
  ];

  return (
    <div className="flex items-center justify-center font-semibold text-sm space-x-4 text-gray-900">
      {navLinks.map(({ to, text }, index) => (
        <NavLink
          key={index}
          to={to}
          className={({ isActive }) => (isActive ? "text-primary" : null)}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default RouteList;
