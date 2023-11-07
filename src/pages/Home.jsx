import LatestBlog from "../components/LatestBlog";
import Newsletter from "../components/Newsletter";
import RecentComments from "../components/RecentComments";
import Slider from "../components/Slider";
import HomeBanner from "../components/banner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <LatestBlog></LatestBlog>
      <Slider></Slider>
      <Newsletter></Newsletter>
      <RecentComments></RecentComments>
    </div>
  );
};

export default Home;
