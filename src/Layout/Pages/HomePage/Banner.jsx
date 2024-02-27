import { FaPlay } from "react-icons/fa";

import { HiOutlineUserGroup } from "react-icons/hi";
import "swiper/css";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import BannerSlide from "./BannerSlide";

const Banner = () => {
  return (
    <div className="relative z-0">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 px-5 md:px-0 ">
          <div className="pt-0 2xl:pt-20">
            <p className="text-[#ED861D] text-center md:text-left text-3xl">
              Give them a chance.
            </p>
            <h1 className="text-2xl banner-title md:text-5xl 2xl:text-6xl my-3 text-center md:text-left">
              Believe in The Better Future of Others.
            </h1>
            <p className="text-slate-600  mt-2 text-center md:text-left 2xl:text-xl ">
              Lorem ipsum dolor sit amet consectetur. Quisque quisque cursus
              tellus dui gravida. Sed at a massa nunc at.
            </p>
            <div className="flex-none md:flex items-center gap-4 mt-10">
              <div
                style={{
                  backgroundImage: `url("https://wpocean.com/html/tf/charius/assets/images/slider/video.png")`,
                }}
                className="w-[230px] mx-auto flex items-center justify-center rounded-xl shadow-lg h-[200px] p-2 border-[4px] border-yellow-500 bg-no-repeat bg-center bg-cover"
              >
                <button
                  onClick={() =>
                    document.getElementById("banner-video").showModal()
                  }
                  className="text-3xl text-yellow-500 border-yellow-500 border pulse-animation p-3 rounded-full bg-white"
                  href=""
                >
                  <FaPlay />
                </button>
                <dialog id="banner-video" className="modal">
                  <div className="modal-box bg-white">
                    <iframe
                      className="w-full h-[300px]"
                      src="https://www.youtube.com/embed/XKiufX6n1uQ?si=-mxsO_yZcEv5hcvA"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
              <div className="">
                <h3 className="text-3xl 2xl:text-4xl text-center md:text-left font-semibold">
                  Join Our Upcoming Campaign
                </h3>
                <p className="mt-3 font-medium text-center md:text-left 2xl:text-xl">
                  Make an impact one piece of clothing at a time to need of
                  others.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                className="rounded-full w-[150px] md:w-[250px] 2xl:w-[350px] relative left-0 md:left-20 2xl:left-0 2xl:top-0 border-[15px] z-10 border-white"
                src={banner1}
                alt=""
              />
              <div className="w-[300px] lg:w-[500px] 2xl:w-[600px] rounded-full z-0 relative sm-mx-auto overflow-hidden right-0 ms-auto top-[-100px] md:top-[-150px] 2xl:top-[-250px]">
                <img className="  zoom-animation" src={banner2} alt="" />
              </div>
            </div>
            <div className="bg-white shadow rounded p-7 sm-mx-auto 2xl:mt-[-250px] md:mt-[-200px] top-[-100px]  z-1 relative w-[fit-content]">
              <div className="flex items-center gap-5">
                <p className="bg-red-100 p-5 text-3xl rounded-full text-black">
                  <HiOutlineUserGroup />
                </p>
                <div>
                  <h2 className="text-4xl font-semibold">120+</h2>
                  <p className="text-lg text-slate-500">Happy Volunteer</p>
                </div>
              </div>
              <div className="mt-5 ">
                <BannerSlide></BannerSlide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
