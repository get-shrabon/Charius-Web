import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { TfiEmail, TfiHeadphone, TfiLocationArrow } from "react-icons/tfi";

import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-no-repeat bg-center bg-cover px-5 py-10">
      <div className="container mx-auto">
        <div className="flex-none md:flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="flex items-center gap-2">
            <a
              className="bg-slate-500 text-white p-3 text-2xl rounded-full hover:bg-yellow-600 duration-500"
              href=""
            >
              <FaFacebookF></FaFacebookF>
            </a>
            <a
              className="bg-slate-500 text-white p-3 text-2xl rounded-full hover:bg-yellow-600 duration-500"
              href=""
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              className="bg-slate-500 text-white p-3 text-2xl rounded-full hover:bg-yellow-600 duration-500"
              href=""
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              className="bg-slate-500 text-white p-3 text-2xl rounded-full hover:bg-yellow-600 duration-500"
              href=""
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4 text-white py-5">
          <div>
            <h3 className="text-2xl font-bold mb-3">About Charius</h3>
            <p>
              Purus tellus arcu consequat neque nisl integer fames ac venenatis.
              Neque ornare ut viverra purus suscipit morbi. Lorem pretium purus
              sagittis congue rhoncus et mi lacus duis ut.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
            <ul className="list-inside list-disc space-y-3">
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Mission & Vision
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Campaign
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Mission & Vision</h3>
            <ul className="list-inside list-disc space-y-3">
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Economic Estublishment
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Jobs & Unemployment
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Business & wpo
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Roads & Transport
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-semibold hover:text-yellow-500 duration-500"
                  href=""
                >
                  Culture and Recreation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
            <p className="mb-3">
              Nulla nequeut molestie interdum nisl ut consequat.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">
                  <TfiEmail />
                </span>
                example@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">
                  <TfiHeadphone />
                </span>
                01787464648{" "}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">
                  <TfiLocationArrow />
                </span>
                19 Thordge Shiloh,Hawai 863
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
          <p>
            © 2023 <a href="">charius</a> . All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-yellow-500 duration-500 font-semibold" href="">Privace & Policy</a>
            <a className="hover:text-yellow-500 duration-500 font-semibold" href="">Terms</a>
            <a className="hover:text-yellow-500 duration-500 font-semibold" href="">About Us</a>
            <a className="hover:text-yellow-500 duration-500 font-semibold" href="">FAQ</a>
            <a className="hover:text-yellow-500 duration-500 font-semibold" href="">Volunteer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
