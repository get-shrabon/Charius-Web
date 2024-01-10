import Charity1 from "../../../assets/charity1.jpg";
import Charity2 from "../../../assets/charity2.jpg";
import Charity3 from "../../../assets/charity3.jpg";
import Charity4 from "../../../assets/charity4.jpg";
import Charity5 from "../../../assets/charity5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { FaPlus } from "react-icons/fa";

const CharitySlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        className="p-5"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity1}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity2}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity3}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity4}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity5}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity1}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity2}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity3}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity4}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-20 z-0">
          <div className="charity-card duration-500 relative py-20 px-5 z-50 rounded-xl">
            <div className="absolute w-full h-full top-0 right-0 ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Charity5}
                alt=""
              />
            </div>
            <div className="relative charity-info z-20">
              <a
                href="#"
                className="text-4xl p-4 rounded-full bg-warning text-white w-[fit-content] block z-30 mx-auto"
              >
                <FaPlus />
              </a>
              <p className="text-yellow-500 text-lg">Charity</p>
              <h3 className="text-3xl font-bold text-white">
                Pure Water Supply
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CharitySlider;
