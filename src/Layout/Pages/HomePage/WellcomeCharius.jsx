import { TbTargetArrow } from "react-icons/tb";
import { FaMountainSun } from "react-icons/fa6";
import Compo1 from "../../../assets/compotwo1.jpg";
import Compo2 from "../../../assets/compotwo2.jpg";

const WellcomeCharius = () => {
  return (
    <div className="py-20 relative z-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0">
        <div className="relative compo__box">
          <div className="z-10 relative sm-d-none border-[15px] border-white w-[400px]">
            <img className="w-full" src={Compo1} alt="" />
          </div>
          <div className="relative md:absolute top-0 md:top-20 right-0 z-0 ">
            <img src={Compo2} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-yellow-500 text-xl">Welcome To Charius</h3>
          <h2 className="banner-title text-3xl md:text-6xl 2xl:text-7xl my-3">
            You’re the Hope of Others.
          </h2>
          <p className="pr-0 md:pr-16 text-slate-500 text-xl py-5">
            Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis eu
            neque sit etiam nec quisque. Cras quam dignissim blandit metus
            laoreet mi ut. Eget diam volutpat ultrices massa morbi sed nibh.
            Sodales diam eu etiam eu quam nisl viverra. Eget egestas orci felis
            nisl. Sit diam morbi amet viverra auctor nunc. Feugiat ac amet
            aliquet euismod ut vel. Mi lectus nisl augue commodo vitae nisi
            blandit. Venenatis netus suscipit tempus fringilla varius feugiat
            nulla proin.
          </p>
          <div className="flex-none md:flex items-center gap-3 my-5">
            <div className="flex items-center gap-3 mb-5 md:mb-0">
              <span className="border p-5 rounded-full text-4xl text-info border-info">
                <TbTargetArrow />
              </span>
              <div>
                <h4 className="text-xl font-semibold">Our Mission</h4>
                <p>We believe charity is a lifetime investment.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="border p-5 rounded-full text-4xl text-info border-info">
                <FaMountainSun />
              </span>
              <div>
                <h4 className="text-xl font-semibold">Our Vision</h4>
                <p>We believe charity is a lifetime investment.</p>
              </div>
            </div>
          </div>
          <button className="theme-btn mt-2">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default WellcomeCharius;
