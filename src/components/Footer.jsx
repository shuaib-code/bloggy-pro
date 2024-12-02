import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdFacebook } from "react-icons/md";
import { ImPinterest, ImTwitter, ImWhatsapp, ImYoutube } from "react-icons/im";

const NavLinkItem = ({ to, text }) => (
  <Link
    to={to}
    className="flex items-center gap-2 text-gray-600 font-medium text-sm"
  >
    <HiOutlineArrowNarrowRight className="text-primary text-xl" />
    {text}
  </Link>
);

const socialMediaLinks = [
  { Icon: MdFacebook, color: "text-blue-500", text: "Facebook" },
  { Icon: ImYoutube, color: "text-red-500", text: "Youtube" },
  { Icon: ImPinterest, color: "text-red-700", text: "Pinterest" },
  { Icon: ImTwitter, color: "text-sky-400", text: "Twitter" },
  { Icon: ImWhatsapp, color: "text-green-500", text: "Whatsapp" },
];

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/wishlist", text: "Wishlist" },
  { to: "/featured", text: "Featured" },
  { to: "/blogs", text: "All Blogs" },
  { to: "/add", text: "Post Blog" },
];

const Footer = () => {
  return (
    <div className="bg-[#f9f8fa] px-5 md:px-44 lg:px-52 mt-8">
      <div className="pt-16 lg:pt-32 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7">
        <div className="flex justify-start">
          <div>
            <Logo />
            <p className="text-sm text-gray-500 font-medium mt-3">
              @ 2023 BloggyPro.dev
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">Page</h1>
          <div className="my-3 space-y-2">
            {navLinks.map((link, index) => (
              <NavLinkItem key={index} to={link.to} text={link.text} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">Legal</h1>
          <div className="my-3 space-y-2">
            <NavLinkItem to="/" text="Terms & Conditions" />
            <NavLinkItem to="/" text="License" />
            <NavLinkItem to="/" text="Contact" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">Social</h1>
          <div className="my-3 space-y-2">
            {socialMediaLinks.map(({ Icon, color, text }, index) => (
              <div key={index} className="flex items-center gap-1">
                <Icon className={`${color} text-xl`} />
                <p className="text-gray-600 font-medium text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm font-medium text-center text-gray-700 mt-5 pb-6 lg:pt-32 lg:pb-10">
        © theBloggyPro. 2023, Bangladesh. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
