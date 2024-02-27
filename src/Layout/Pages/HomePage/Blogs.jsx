import blog1 from "../../../assets/blog1.jpg";
import blog2 from "../../../assets/blog2.jpg";
import blog3 from "../../../assets/blog3.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Blogs = () => {
       useEffect(() => {
         Aos.init({ duration: 1000 });
       }, []);
  return (
    <div className="pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div data-aos="flip-up" className="">
            <img className="w-full rounded-t" src={blog1} alt="" />
            <div className="p-3 border-x border-b border-slate-300 rounded-b">
              <a href="#">
                <h2 className="text-3xl mt-5 font-semibold text-slate-700">
                  The Thirsty are Waiting For Your Help.
                </h2>
              </a>
              <p className="py-6">
                Leoardo et nisl mi at at blandit. Mauris nulla nec iaculis
                ultrices egestas consequat vitae facilisi dui.
              </p>
              <div className=" border p-2 rounded-xl bg-slate-100 text-black">
                <p className="text-right pr-10 text-warning py-3">90%</p>
                <progress
                  className="progress bg-white cursor-pointer progress-warning w-full h-5 p-1"
                  value="90"
                  max="100"
                ></progress>
                <div className="flex justify-between items-center my-3 ">
                  <p>Raised: $24,808.00</p>
                  <p>Goal: $26,000.00</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" className="">
            <img className="w-full rounded-t" src={blog2} alt="" />
            <div className="p-3 border-x border-b border-slate-300 rounded-b">
              <a href="#">
                <h2 className="text-3xl mt-5 font-semibold text-slate-700">
                  Changing a lives one meal at a time.
                </h2>
              </a>
              <p className="py-6">
                Leoardo et nisl mi at at blandit. Mauris nulla nec iaculis
                ultrices egestas consequat vitae facilisi dui.
              </p>
              <div className=" border p-2 rounded-xl bg-slate-100 text-black">
                <p className="text-right pr-10 text-success py-3">90%</p>
                <progress
                  className="progress bg-white cursor-pointer progress-success w-full h-5 p-1"
                  value="90"
                  max="100"
                ></progress>
                <div className="flex justify-between items-center my-3 ">
                  <p>Raised: $24,808.00</p>
                  <p>Goal: $26,000.00</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" className="">
            <img className="w-full rounded-t" src={blog3} alt="" />
            <div className="p-3 border-x border-b border-slate-300 rounded-b">
              <a href="#">
                <h2 className="text-3xl mt-5 font-semibold text-slate-700">
                  Let’s be one community in this cause.
                </h2>
              </a>
              <p className="py-6">
                Leoardo et nisl mi at at blandit. Mauris nulla nec iaculis
                ultrices egestas consequat vitae facilisi dui.
              </p>
              <div className=" border p-2 rounded-xl bg-slate-100 text-black">
                <p className="text-right pr-10 text-error py-3">90%</p>
                <progress
                  className="progress bg-white cursor-pointer progress-error w-full h-5 p-1"
                  value="90"
                  max="100"
                ></progress>
                <div className="flex justify-between items-center my-3 ">
                  <p>Raised: $24,808.00</p>
                  <p>Goal: $26,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
