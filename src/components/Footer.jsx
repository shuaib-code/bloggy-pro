import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdFacebook } from "react-icons/md";
import { ImPinterest, ImTwitter, ImWhatsapp, ImYoutube } from "react-icons/im";
const Footer = () => {
  const page = (
    <div>
      <h1 className="font-semibold text-gray-800">Page</h1>
      <div className="my-3 space-y-2">
        <div>
          <Link to="/" className="flex justify-start items-center gap-2">
            <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
            <p className="text-gray-600 font-medium text-sm">Home</p>
          </Link>
        </div>
        <div>
          <Link
            to="/wishlist"
            className="flex justify-start items-center gap-2"
          >
            <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
            <p className="text-gray-600 font-medium text-sm">Wishlist</p>
          </Link>
        </div>
        <div>
          <Link
            to="/featured"
            className="flex justify-start items-center gap-2"
          >
            <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
            <p className="text-gray-600 font-medium text-sm">Featured</p>
          </Link>
        </div>
        <div>
          <Link to="/blogs" className="flex justify-start items-center gap-2">
            <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
            <p className="text-gray-600 font-medium text-sm">All Blogs</p>
          </Link>
        </div>
        <div>
          <Link to="/add" className="flex justify-start items-center gap-2">
            <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
            <p className="text-gray-600 font-medium text-sm">Post Blog</p>
          </Link>
        </div>
      </div>
    </div>
  );
  return (
    <div className="bg-[#f9f8fa] px-5 md:px-44 lg:px-52 mt-8">
      <div className="pt-16 lg:pt-32 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7">
        <div className="flex justify-start">
          <div>
            <Logo></Logo>
            <p className="text-sm text-gray-500 font-medium mt-3">
              @ 2023 BloggyPro.dev
            </p>
          </div>
        </div>
        {page}
        <div>
          <h1 className="font-semibold text-gray-800">Legal</h1>
          <div className="my-3 space-y-2">
            <div className="flex justify-start items-center gap-5">
              <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
              <p className="text-gray-600 font-medium text-sm">
                Terms & Conditios
              </p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
              <p className="text-gray-600 font-medium text-sm">Licence</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <HiOutlineArrowNarrowRight className="text-primary text-xl"></HiOutlineArrowNarrowRight>
              <p className="text-gray-600 font-medium text-sm">Contact</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">Social</h1>
          <div className="my-3 space-y-2">
            <div className="flex justify-start items-center gap-1">
              <MdFacebook className="text-blue-500 text-xl"></MdFacebook>
              <p className="text-gray-600 font-medium text-sm">Facebook</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <ImYoutube className="text-red-500 text-xl"></ImYoutube>
              <p className="text-gray-600 font-medium text-sm">Youtube</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <ImPinterest className="text-red-700 text-xl"></ImPinterest>
              <p className="text-gray-600 font-medium text-sm">Pinterest</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <ImTwitter className="text-sky-400 text-xl"></ImTwitter>
              <p className="text-gray-600 font-medium text-sm">Twitter</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <ImWhatsapp className="text-green-500 text-xl"></ImWhatsapp>
              <p className="text-gray-600 font-medium text-sm">Whatsapp</p>
            </div>
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
