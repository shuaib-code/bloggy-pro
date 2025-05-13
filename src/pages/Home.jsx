import HomeBanner from "@components/banner/HomeBanner";
import Faq from "@components/Faq";
import LatestBlog from "@components/LatestBlog";
import Newsletter from "@components/Newsletter";
import RecentComments from "@components/RecentComments";
import Slider from "@components/Slider";

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <LatestBlog/>
      <Faq/>
      <Slider/>
      <Newsletter/>
      <RecentComments/>
    </div>
    
  );
};

export default Home;
