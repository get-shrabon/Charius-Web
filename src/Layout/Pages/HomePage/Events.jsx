import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

import event1 from "../../../assets/event1.jpg";
import event2 from "../../../assets/event2.jpg";
import event3 from "../../../assets/event3.jpg";
const Events = () => {
  return (
    <div className="py-20 relative z-0">
      <div className="container mx-auto">
        <p className="text-yellow-500 text-3xl text-center">
          Let’s Help Them Together!
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-mono text-center mb-20 mt-5 w-full md:w-2/4 mx-auto">
          Join Our Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <div className=" relative event-card  w-full h-[500px] 2xl:h-[600px] flex p-5 items-end text-white rounded-2xl">
            <div className="date-box absolute top-[-20px] right-7 px-9 pt-8 pb-6 rounded-b-full text-center z-20 bg-[#EBA913]">
              <h2 className="text-white text-2xl font-bold">25</h2>
              <h2 className="text-white text-2xl font-bold">Jun</h2>
            </div>
            <div className="overflow-hidden h-full rounded-2xl  object-cover absolute top-0 bottom-0 right-0 left-0 z-0">
              <img
                className="w-full duration-300 event-img "
                src={event1}
                alt=""
              />
            </div>
            <div className="relative z-20">
              <a href="#">
                <h2 className=" text-white text-3xl font-bold font-ubuntu duration-500 hover:text-warning">
                  School For African Poor Children
                </h2>
              </a>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-2">
                  <p className="text-xl">
                    <IoIosTimer />
                  </p>
                  <p>4:00pm-6:00pm</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl">
                    <IoLocationOutline />
                  </p>
                  <p>New York</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative event-card  w-full h-[500px] 2xl:h-[600px] flex p-5 items-end text-white rounded-2xl">
            <div className="date-box data-box-2 absolute top-[-20px] right-7 px-9 pt-8 pb-6 rounded-b-full text-center z-20 bg-[#00A285]">
              <h2 className="text-white text-2xl font-bold">2</h2>
              <h2 className="text-white text-2xl font-bold">Sep</h2>
            </div>
            <div className="overflow-hidden h-full rounded-2xl  object-cover absolute top-0 bottom-0 right-0 left-0 z-0">
              <img
                className="w-full duration-300 event-img "
                src={event2}
                alt=""
              />
            </div>
            <div className="relative z-20">
              <a href="#">
                <h2 className=" text-white text-3xl font-bold font-ubuntu duration-500 hover:text-warning">
                  Solve the Water Problem of World
                </h2>
              </a>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-2">
                  <p className="text-xl">
                    <IoIosTimer />
                  </p>
                  <p>4:00pm-6:00pm</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl">
                    <IoLocationOutline />
                  </p>
                  <p>New York</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative event-card  w-full h-[500px] 2xl:h-[600px] flex p-5 items-end text-white rounded-2xl">
            <div className="date-box data-box-3 absolute top-[-20px] right-7 px-9 pt-8 pb-6 rounded-b-full text-center z-20 bg-[#CC1517]">
              <h2 className="text-white text-2xl font-bold">12</h2>
              <h2 className="text-white text-2xl font-bold">Jan</h2>
            </div>
            <div className="overflow-hidden h-full rounded-2xl  object-cover absolute top-0 bottom-0 right-0 left-0 z-0">
              <img
                className="w-full duration-300 event-img "
                src={event3}
                alt=""
              />
            </div>
            <div className="relative z-20">
              <a href="#">
                <h2 className=" text-white text-3xl font-bold font-ubuntu duration-500 hover:text-warning">
                  Your Old Clothes are Their Happiness.
                </h2>
              </a>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-2">
                  <p className="text-xl">
                    <IoIosTimer />
                  </p>
                  <p>4:00pm-6:00pm</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl">
                    <IoLocationOutline />
                  </p>
                  <p>New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
