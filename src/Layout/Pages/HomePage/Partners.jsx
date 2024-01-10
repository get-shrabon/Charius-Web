import Partner1 from "../../../assets/partner1.png"
import Partner2 from "../../../assets/partner2.png"
import Partner3 from "../../../assets/partner3.png"
import Partner4 from "../../../assets/partner4.png"
import Partner5 from "../../../assets/partner5.png"
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Partners = () => {
    return (
      <div className="py-20 container relative z-0 mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{ delay: 2500 }}
          loop={true}
          className="p-5"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="grayscale duration-300 hover:grayscale-0 w-[100px] h-[100px] mx-auto object-cover rounded-full " src={Partner5} alt="" />
            </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Partners;