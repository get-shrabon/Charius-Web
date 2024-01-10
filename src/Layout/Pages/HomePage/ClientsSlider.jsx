import { TfiQuoteRight } from "react-icons/tfi";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import client1 from "../../../assets/client1.jpg";
import client2 from "../../../assets/client2.jpg";
import client3 from "../../../assets/client3.jpg";

const ClientsSlider = () => {
  return (
    <div>
      <div className="container mx-auto pb-20 px-20 relative z-0">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          loop={true}
          grabCursor={true}
          className="p-5"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="p-3">
            <div className="bg-white p-5 w-full h-auto rounded-xl client-box relative">
              <span className="bg-[#EBA314] mt-10 p-5 text-5xl w-[fit-content] rounded-full text-white relative block">
                <TfiQuoteRight />
              </span>
              <p className="py-7 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                ab quia vero dicta, quae, illo ad dolorem quod animi, quam ipsam
                cum doloremque perferendis possimus sint facilis id vel quasi.
              </p>
            </div>
            <div className="p-2 mt-10 flex items-center gap-3">
              <img className="rounded-full" src={client1} alt="" />
              <div>
                <h3 className="font-bold">Elizabed Joe</h3>
                <p>Founder of B.B.L</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="bg-white p-5 w-full h-auto rounded-xl client-box relative">
              <span className="bg-[#EBA314] mt-10 p-5 text-5xl w-[fit-content] rounded-full text-white relative block">
                <TfiQuoteRight />
              </span>
              <p className="py-7 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                ab quia vero dicta, quae, illo ad dolorem quod animi, quam ipsam
                cum doloremque perferendis possimus sint facilis id vel quasi.
              </p>
            </div>
            <div className="p-2 mt-10 flex items-center gap-3">
              <img className="rounded-full" src={client2} alt="" />
              <div>
                <h3 className="font-bold">Lord Jang</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="bg-white p-5 w-full h-auto rounded-xl client-box relative">
              <span className="bg-[#EBA314] mt-10 p-5 text-5xl w-[fit-content] rounded-full text-white relative block">
                <TfiQuoteRight />
              </span>
              <p className="py-7 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                ab quia vero dicta, quae, illo ad dolorem quod animi, quam ipsam
                cum doloremque perferendis possimus sint facilis id vel quasi.
              </p>
            </div>
            <div className="p-2 mt-10 flex items-center gap-3">
              <img className="rounded-full" src={client3} alt="" />
              <div>
                <h3 className="font-bold">Sumit Joy</h3>
                <p>Designer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="bg-white p-5 w-full h-auto rounded-xl client-box relative">
              <span className="bg-[#EBA314] mt-10 p-5 text-5xl w-[fit-content] rounded-full text-white relative block">
                <TfiQuoteRight />
              </span>
              <p className="py-7 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                ab quia vero dicta, quae, illo ad dolorem quod animi, quam ipsam
                cum doloremque perferendis possimus sint facilis id vel quasi.
              </p>
            </div>
            <div className="p-2 mt-10 flex items-center gap-3">
              <img className="rounded-full" src={client1} alt="" />
              <div>
                <h3 className="font-bold">Elizabed Joe</h3>
                <p>Founder of B.B.L</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="bg-white p-5 w-full h-auto rounded-xl client-box relative">
              <span className="bg-[#EBA314] mt-10 p-5 text-5xl w-[fit-content] rounded-full text-white relative block">
                <TfiQuoteRight />
              </span>
              <p className="py-7 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                ab quia vero dicta, quae, illo ad dolorem quod animi, quam ipsam
                cum doloremque perferendis possimus sint facilis id vel quasi.
              </p>
            </div>
            <div className="p-2 mt-10 flex items-center gap-3">
              <img className="rounded-full" src={client2} alt="" />
              <div>
                <h3 className="font-bold">Lord Jang</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="bg-white p-5 w-full h-auto rounded-xl client-box relative">
              <span className="bg-[#EBA314] mt-10 p-5 text-5xl w-[fit-content] rounded-full text-white relative block">
                <TfiQuoteRight />
              </span>
              <p className="py-7 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                ab quia vero dicta, quae, illo ad dolorem quod animi, quam ipsam
                cum doloremque perferendis possimus sint facilis id vel quasi.
              </p>
            </div>
            <div className="p-2 mt-10 flex items-center gap-3">
              <img className="rounded-full" src={client3} alt="" />
              <div>
                <h3 className="font-bold">Sumit Joy</h3>
                <p>Designer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsSlider;
