import vol1 from "../../../assets/volenter1.png";
import vol2 from "../../../assets/volenter2.png";
import vol3 from "../../../assets/volenter3.png";
import vol4 from "../../../assets/volenter4.png";
import vol5 from "../../../assets/volenter5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const BannerSlide = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="overflow-x-hidden w-[250px]"
      >
        <SwiperSlide >
          <img
            src={vol1} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol2} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol3} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol4} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol5} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol1} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol2} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol3} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol4} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vol5} className="rounded-full border p-1" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlide;
