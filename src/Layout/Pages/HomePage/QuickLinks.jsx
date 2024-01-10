import { Link } from "react-router-dom";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { ImHeartBroken } from "react-icons/im";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const QuickLinks = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <div className="pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 container mx-auto px-5 md:px-0">
        <div data-aos="zoom-in-up" className="hover:shadow-lg duration-500 bg-slate-100 p-3 rounded flex items-center gap-3">
          <span className="h-[100px] px-8 text-4xl text-white bg-info rounded-lg items-center flex">
            <MdOutlineVolunteerActivism />
          </span>
          <div>
            <Link>
              <h4 className="text-2xl font-semibold text-black mb-2">
                Become a volunteer
              </h4>
            </Link>
            <p>Alone, I can do little. Together, we can do anything.</p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="shadow bg-white p-3 rounded flex items-center gap-3">
          <span className="h-[100px] px-8 text-4xl text-white bg-warning rounded-lg items-center flex">
            <ImHeartBroken />
          </span>
          <div>
            <Link>
              <h4 className="text-2xl font-semibold text-black mb-2">
                Quick fundraising
              </h4>
            </Link>
            <p>Alone, I can do little. Together, we can do anything.</p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="hover:shadow-lg duration-500 bg-slate-100 p-3 rounded flex items-center gap-3">
          <span className="h-[100px] px-8 text-4xl text-white bg-success rounded-lg items-center flex">
            <FaHandHoldingDollar />
          </span>
          <div>
            <Link>
              <h4 className="text-2xl font-semibold text-black mb-2">
                Start donating
              </h4>
            </Link>
            <p>Alone, I can do little. Together, we can do anything.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
