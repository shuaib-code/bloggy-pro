/* eslint-disable no-useless-escape */
import toast, { Toaster } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import WelcomeBanner from "../components/banner/WelcomeBanner";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { withGoogle, register: createUser, setProfile } = useAuth();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    const specialCharactersPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (!specialCharactersPattern.test(password)) {
      toast.error("Password should contain al least 1 special caracter");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should have at least 1 Uppercase");
    } else if (!/[0-9]/.test(password)) {
      toast.error("Password should contain at least 1 numeric alpabet");
    }

    createUser(email, password)
      .then(() => {
        setProfile(name, url)
          .then(() => {
            toast.success("Registration successfull");
            navigate("/");
          })
          .catch(() => toast.error("Something went worng."));
      })
      .catch(() => toast.error("Something went worng."));
  };
  const handleGoogle = () => {
    withGoogle()
      .then(() => {
        toast.success("Registration successfull");
        navigate("/");
      })
      .catch(() => toast.error("Something went worng"));
  };

  const form = (
    <div className="my-6">
      <form className="space-y-5" onSubmit={handleForm}>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Name</span>
          <input
            type="text"
            name="userName"
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="enter your full name"
            required
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Photo URL
          </span>
          <input
            type="text"
            name="url"
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="enter you profile picture url"
            required
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="enter your password"
            required
          />
        </label>
        <label className="block">
          <input
            type="submit"
            className="mt-1 px-3 py-2.5 text-white font-semibold bg-primary border shadow-sm border-slate-30 block w-full rounded-md sm:text-sm "
            value="Continue"
          />
        </label>
      </form>
    </div>
  );
  const register = (
    <div className="col-span-1 p-7 md:p-16 lg:p-16">
      <div className="flex justify-start">
        <Logo></Logo>
      </div>
      <div className="my-10">
        <Link to="/">
          <button className="flex justify-center items-center gap-2 font-medium text-sm">
            <BiArrowBack className="text-lg"></BiArrowBack> Home
          </button>
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-sm my-2 font-medium">
          Already have an account?
          <Link to="/login" className="text-primary mx-3">
            Log in
          </Link>
        </p>
      </div>
      {form}
      <div>
        <p className="font-semibold text-xs text-center">Or</p>
        <div
          className="my-7 px-3 py-2.5 text-primary font-semibold text-center text-lg bg-white border-2 shadow-sm border-primary  block w-full rounded-md sm:text-sm"
          placeholder="you@example.com"
        >
          <div
            onClick={handleGoogle}
            className="flex cursor-pointer justify-center items-center gap-3"
          >
            <FcGoogle className="text-xl"></FcGoogle>
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="font-inter grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {register}
      <div className="col-span-2">
        <WelcomeBanner></WelcomeBanner>
      </div>
      <Toaster position="top-center"></Toaster>
    </div>
  );
};

export default Register;
