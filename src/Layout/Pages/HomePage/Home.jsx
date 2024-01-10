/* eslint-disable react/no-unescaped-entities */

import Banner from "./Banner";
import Blogs from "./Blogs";
import QuickLinks from "./QuickLinks";
import WellcomeCharius from "./WellcomeCharius";
import PromotingSafty from "./PromotingSafty";
import DonationMeans from "./DonationMeans";
import HelpRaise from "./HelpRaise";
import Events from "./Events";
import Clients from "./Clients";
import LatestNews from "./LatestNews";
import Partners from "./Partners";

const Home = () => {
  return (
    <div>
      <Banner />
      <QuickLinks />
      <WellcomeCharius />
      <PromotingSafty />
      <div className="relative top-[-60px]">
        <Blogs />
      </div>
      <DonationMeans/>
      <HelpRaise/>
      <Events/>
      <Clients/>
      <LatestNews/>
      <Partners/>
    </div>
  );
};

export default Home;
