import LatestBlog from "../components/LatestBlog";
import Newsletter from "../components/Newsletter";
import HomeBanner from "../components/banner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <LatestBlog></LatestBlog>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
