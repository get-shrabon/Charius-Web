import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaHeart } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import logo from "../../../assets/logo.svg"




const Navbar = () => {
    const Links = (
        <>
        <li><NavLink className="uppercase text-slate-700 font-semibold hover:text-yellow-500 duration-500" to="/">Home</NavLink></li>
        <li><NavLink className="uppercase text-slate-700 font-semibold hover:text-yellow-500 duration-500" to="/donations">Donations</NavLink></li>
        <li><NavLink className="uppercase text-slate-700 font-semibold hover:text-yellow-500 duration-500" to="/events">Events</NavLink></li>
        <li><NavLink className="uppercase text-slate-700 font-semibold hover:text-yellow-500 duration-500" to="/blog">Blog</NavLink></li>
        <li><NavLink className="uppercase text-slate-700 font-semibold hover:text-yellow-500 duration-500" to="/contact">Contact</NavLink></li>
        </>
    )
  return (
    <Headroom className="z-[999]">
      <header className="bg-white py-3">
        <div className="container mx-auto px-3 md:px-0">
          <div className="flex items-center justify-between ">
            <div className="navbar-logo">
              <a href="/">
                <img className="" src={logo} alt="" />
              </a>
            </div>
            <div className=" hidden lg:flex">
              <ul className="flex items-center gap-5">{Links}</ul>
            </div>
            <div className="flex items-center gap-5">
              <div className="drawer lg:hidden">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer" className="text-2xl drawer-button">
                    <FaBarsStaggered />
                  </label>
                </div>
                <div className="drawer-side ">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu z-50 p-4 w-80 min-h-full bg-white text-base-content">
                    {/* Sidebar content here */}
                    <img className="mb-5 mx-auto" src={logo} alt="" />
                    {Links}
                  </ul>
                </div>
              </div>

              <button
                className="text-3xl"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <GoSearch />
              </button>
              <dialog
                id="my_modal_5"
                className="modal bg-white modal-top sm:modal-middle"
              >
                <div className="modal-box bg-white">
                  <div className="flex items-center justify-between border border-yellow-500 rounded pr-3">
                    <input
                      className="bg-transparent outline-none  w-full p-3 text-black "
                      type="text"
                      placeholder="Search..."
                    />
                    <button className="text-2xl text-black font-bold">
                      {" "}
                      <GoSearch />
                    </button>
                  </div>
                  <div>
                    <p className="my-2 text-slate-600 font-semibold">
                      Related Tag
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        className="border p-1 text-xs rounded text-slate-500"
                        href="#"
                      >
                        Economic Estublish
                      </a>
                      <a
                        className="border p-1 text-xs rounded text-slate-500"
                        href="#"
                      >
                        Economic Estublish
                      </a>
                      <a
                        className="border p-1 text-xs rounded text-slate-500"
                        href="#"
                      >
                        Economic Estublish
                      </a>
                      <a
                        className="border p-1 text-xs rounded text-slate-500"
                        href="#"
                      >
                        Economic Estublish
                      </a>
                      <a
                        className="border p-1 text-xs rounded text-slate-500"
                        href="#"
                      >
                        Economic Estublish
                      </a>
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="text-3xl">
                        <IoClose />
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>

              <div className="dropdown dropdown-end ">
                <div tabIndex={0} role="button" className="text-3xl">
                  <CgProfile />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-[fit-content]"
                >
                  <li>
                    <Link to={`/login`} className="text-black text-nowrap ">Login</Link>
                  </li>
                  <li>
                    <Link to={`/signup`} className="text-black text-nowrap ">Sign Up</Link>
                  </li>
                </ul>
              </div>
              <div className="sm-d-none hidden lg:flex">
                <button className="btn btn-warning font-bold">
                  <FaHeart /> Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Navbar;
