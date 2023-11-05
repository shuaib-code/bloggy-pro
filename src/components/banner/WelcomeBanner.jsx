const WelcomeBanner = () => {
  return (
    <div className="bg-[#1C2536] md:h-screen lg:h-screen bg-no-repeat bg-[url('https://material-kit-pro-react.devias.io/assets/gradient-bg.svg')]">
      <div className="p-5 py-10 flex-row justify-center items-center md:p-48 lg:p-64 space-y-11">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Bloggy <span className="text-primary">PRO</span>
        </h1>
        <p className="text-gray-400">
          A professional Blog page that comes with ready-to-post creative blog
          with one common goal in mind, help you share faster & beautiful blog
          with Bloggy PRO.
        </p>
        <p className="text-white font-medium">
          Join to share you thought by Blog to our Bloggy
          <span className="text-primary"> PRO</span>
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
