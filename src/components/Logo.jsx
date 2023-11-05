import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex justify-center items-center space-x-1">
      <img src={logo} className="w-6" />
      <p className="text-sm font-plusJakartaSans font-semibold">
        Bloggy
        <span className="font-bold text-base text-primary"> PRO</span>
      </p>
    </div>
  );
};

export default Logo;
