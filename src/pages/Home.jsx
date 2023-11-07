import LatestBlog from "../components/LatestBlog";
import HomeBanner from "../components/banner/HomeBanner";

const Home = () => {
  return (
    <div className="my-9">
      <HomeBanner></HomeBanner>
      <LatestBlog></LatestBlog>
    </div>
  );
};

export default Home;
