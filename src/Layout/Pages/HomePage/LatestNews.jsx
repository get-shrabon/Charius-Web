import { FaRegComments } from "react-icons/fa";
import News1 from "../../../assets/news1.jpg";
import News2 from "../../../assets/news2.jpg";
import News3 from "../../../assets/news3.jpg";
import Author1 from "../../../assets/newsAuth1.jpg";
import Author2 from "../../../assets/newsAuth2.jpg";
import Author3 from "../../../assets/newsAuth3.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const LatestNews = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <p className="text-yellow-500 text-3xl text-center">From The Blog</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 mt-5 w-full md:w-2/4 mx-auto">
          Our Latest News and Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="custom-shadow rounded-lg">
            <div className="p-5">
              <div className="h-[fit-content]  relative">
                <img className="rounded-t-lg w-full" src={News1} alt="" />
                <div className="bg-warning px-10 py-5 rounded-r-full w-[fit-content] absolute news-card bottom-3 left-[-15px]">
                  <p className="text-white font-semibold">25 Jan, 22</p>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between my-5">
                  <div className="flex items-center gap-2">
                    <img className="rounded-full" src={Author1} alt="" />
                    <p className="font-semibold">Jenny Wilson</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="block">
                      <FaRegComments />
                    </span>
                    <p className="font-semibold">03 Comments</p>
                  </div>
                </div>
                <a href="#">
                  <h3 className=" font-semibold duration-300 hover:text-warning text-2xl 2xl:text-3xl">
                    Your clothes give them a warm hug.
                  </h3>
                </a>
                <p className="my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium architecto sit aut aspernatur.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 flex items-center justify-between rounded-b-lg">
              <a className="capitalize text-warning font-semibold" href="#">
                read more...
              </a>
              <a href="#" className="text-3xl text-warning">
                <MdOutlineArrowRightAlt />
              </a>
            </div>
          </div>
          <div className="custom-shadow rounded-lg">
            <div className="p-5">
              <div className="h-[fit-content]  relative">
                <img className="rounded-t-lg w-full" src={News2} alt="" />
                <div className="bg-success px-10 py-5 rounded-r-full w-[fit-content] absolute news-card news-card2 bottom-3 left-[-15px]">
                  <p className="text-white font-semibold">25 Jan, 22</p>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between my-5">
                  <div className="flex items-center gap-2">
                    <img className="rounded-full" src={Author2} alt="" />
                    <p className="font-semibold">Summit Joy</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="block">
                      <FaRegComments />
                    </span>
                    <p className="font-semibold">07 Comments</p>
                  </div>
                </div>
                <a href="#">
                  <h3 className=" font-semibold duration-300 hover:text-success text-2xl 2xl:text-3xl">
                    They also deserve proper education as you.
                  </h3>
                </a>
                <p className="my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium architecto sit aut aspernatur.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 flex items-center justify-between rounded-b-lg">
              <a className="capitalize text-success font-semibold" href="#">
                read more...
              </a>
              <a href="#" className="text-3xl text-success">
                <MdOutlineArrowRightAlt />
              </a>
            </div>
          </div>
          <div className="custom-shadow rounded-lg">
            <div className="p-5">
              <div className="h-[fit-content]  relative">
                <img className="rounded-t-lg w-full" src={News3} alt="" />
                <div className="bg-error px-10 py-5 rounded-r-full w-[fit-content] absolute news-card news-card3 bottom-3 left-[-15px]">
                  <p className="text-white font-semibold">25 Jan, 22</p>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between my-5">
                  <div className="flex items-center gap-2">
                    <img className="rounded-full" src={Author3} alt="" />
                    <p className="font-semibold">Mehera Ulson</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="block">
                      <FaRegComments />
                    </span>
                    <p className="font-semibold">03 Comments</p>
                  </div>
                </div>
                <a href="#">
                  <h3 className=" font-semibold duration-300 hover:text-error text-2xl 2xl:text-3xl">
                    Help make their dreams come true.
                  </h3>
                </a>
                <p className="my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium architecto sit aut aspernatur.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 flex items-center justify-between rounded-b-lg">
              <a className="capitalize text-error font-semibold" href="#">
                read more...
              </a>
              <a href="#" className="text-3xl text-error">
                <MdOutlineArrowRightAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
