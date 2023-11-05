import { useState } from "react";
import Logo from "../Logo";
import Profile from "./Profile";
import RouteList from "./RouteList";
import { CgMenuGridO } from "react-icons/cg";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showNav, setShowNav] = useState(0);
  return (
    <>
      <div className="pt-4 flex justify-between items-center">
        <div>
          <Logo></Logo>
        </div>
        <div className="hidden md:flex lg:flex">
          <RouteList></RouteList>
        </div>
        <div className="hidden md:flex lg:flex">
          <Profile></Profile>
        </div>
        <div
          onClick={() => setShowNav(!showNav)}
          className="md:hidden lg:hidden p-1"
        >
          <CgMenuGridO className="text-2xl text-black"></CgMenuGridO>
        </div>
      </div>
      <div className="flex justify-end">
        <MobileNav show={showNav} setShow={setShowNav}></MobileNav>
      </div>
    </>
  );
};

export default Navbar;
