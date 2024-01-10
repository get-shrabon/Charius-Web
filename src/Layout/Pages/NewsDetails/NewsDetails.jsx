import { Link, useLoaderData, useParams } from "react-router-dom";
import NewsDetailsBanner from "./NewsDetailsBanner";
import { SlCalender } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaRegComments,
  FaTwitter,
} from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const newsData = news.find((data) => data.id === idInt);
  const {
    title,
    description,
    image,
    author_name,
    author_des,
    comments_number,
    publish_date,
  } = newsData;
  return (
    <div>
      <NewsDetailsBanner />
      <div className="py-20 container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2 p-5">
            <img className="w-[70%] " src={image} alt="" />
            <div className="mt-5 flex items-center gap-4">
              <h3 className=" uppercase font-semibold text-slate-600">
                BY{" "}
                <a className="duration-300 hover:text-warning" href="#">
                  {author_name}
                </a>
              </h3>
              <h3 className="flex items-center uppercase font-semibold text-slate-600 gap-2">
                <span className="text-warning text-3xl">
                  <LuDot />
                </span>
                <span className="block">
                  <FaRegComments />
                </span>
                <p className="font-semibold">{comments_number} Comments</p>
              </h3>
              <h3 className="flex items-center uppercase font-semibold text-slate-600 gap-2">
                <span className="text-warning text-3xl">
                  <LuDot />
                </span>
                <span className="block">
                  <SlCalender />
                </span>
                <p className="font-semibold">{publish_date}</p>
              </h3>
            </div>
            <h2 className="text-4xl font-bold text-slate-700 my-5">{title}</h2>
            <p className="text-lg text-[#525252]">{description}</p>
            <Link to={`/`}>
              {" "}
              <button className="btn btn-outline btn-warning  mt-10">
                Back Home
              </button>
            </Link>
            <div className="mt-16">
              <div className="">
                <img className="rounded"
                  src="https://www.bradfordpubliclibrary.org/wp-content/uploads/2014/08/DONATIONS-sign.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-slate-50 p-5">
              <img
                className="mx-auto rounded-full w-36 h-36 bg-slate-200"
                src=""
                alt=""
              />
              <h3 className="text-center text-xl font-semibold my-3">
                {author_name}
              </h3>
              <p className="text-center">{author_des}</p>
              <div className="divider"></div>
              <div className="flex justify-center items-center gap-3 mt-5">
                <a
                  className="bg-slate-200 p-3 rounded-full duration-300 hover:text-black hover:bg-slate-400"
                  href=""
                >
                  <FaFacebookF />
                </a>
                <a
                  className="bg-slate-200 p-3 rounded-full duration-300 hover:text-black hover:bg-slate-400"
                  href=""
                >
                  <FaTwitter />
                </a>
                <a
                  className="bg-slate-200 p-3 rounded-full duration-300 hover:text-black hover:bg-slate-400"
                  href=""
                >
                  <FaLinkedin />
                </a>
                <a
                  className="bg-slate-200 p-3 rounded-full duration-300 hover:text-black hover:bg-slate-400"
                  href=""
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="p-5 mt-10">
              <div className="border-warning border flex pr-3 items-center rounded bg-yellow-50">
                <input
                  className="w-full  outline-none bg-transparent py-3 px-5 text-black"
                  type="text"
                  placeholder="Search.."
                />
                <button className="bg-warning p-2 rounded text-white text-2xl">
                  <IoSearchOutline />
                </button>
              </div>
              <div className="mt-10">
                <h3 className="text-slate-400">Related Tags :</h3>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a className="border p-1 rounded text-sm" href="#">
                    #Donations
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #Charity
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #Fundraising
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #Nonprofit
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #GivingBack
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #Philanthropy
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #Support
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #Community
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #SocialImpact
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #Volunteer
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #HelpingOthers
                  </a>
                  <a className="border p-1 rounded text-sm" href="#">
                    #DonateNow
                  </a>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-slate-400">Related Post :</h3>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 ">
                    <img
                      className="rounded-lg w-14  object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2bJdHrGUWb7Cef-AN2052TK24MNv_avAdQ&usqp=CAU"
                      alt=""
                    />
                    <a
                      className=" font-semibold text-slate-600 duration-500 hover:text-warning"
                      href=""
                    >
                      Making an Impact: The Power of Small Donations
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-lg w-14  object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjOD8dyLEz1HxOdCnqxBhjI3Y7UWvj8fKSQ&usqp=CAU"
                      alt=""
                    />
                    <a
                      className=" font-semibold text-slate-600 duration-500 hover:text-warning"
                      href=""
                    >
                      Give a Little, Change a Lot: Small Donations, Big
                      Differences
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-lg w-14  object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-xeVLqUjteLTfgUNqOiL1JM4UyHLz1c_kw&usqp=CAU"
                      alt=""
                    />
                    <a
                      className=" font-semibold text-slate-600 duration-500 hover:text-warning"
                      href=""
                    >
                      Tiny Tokens, Mighty Impact: The Beauty of Micro-Donations
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-lg w-14  object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJa1hTyqEw_ujj2n3bGv6-o8Alc5x2_erwA&usqp=CAU"
                      alt=""
                    />
                    <a
                      className=" font-semibold text-slate-600 duration-500 hover:text-warning"
                      href=""
                    >
                      Small Acts of Kindness: Donating on a Budget
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-lg w-14  object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRn_Oif_cpM43Gdza2P_U9Bm02tbmwyQ0h5w&usqp=CAU"
                      alt=""
                    />
                    <a
                      className=" font-semibold text-slate-600 duration-500 hover:text-warning"
                      href=""
                    >
                      The Ripple Effect: How Small Donations Create Big Waves
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
