import { GiBookmarklet, GiWaterBottle } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";


const DonationMeans = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <p className="text-yellow-500 text-3xl text-center">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 mt-5 w-full md:w-2/4 mx-auto">Your Donation Means Another Smile.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="shadow-lg p-6 rounded-xl">
            <p className="border border-info bg-slate-100 rounded-full p-5 text-7xl text-info w-[fit-content] my-5 mx-auto">
              <GiBookmarklet />
            </p>
            <a href="#">
              <h2 className="font-semibold text-slate-500 text-2xl duration-500 hover:text-info text-center">
                Kids Education
              </h2>
            </a>
            <p className="text-center py-5">
              Accumsan phallus lorem tortor koielit eget. Placat tortor sede
              pharetra eget.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <p className="border border-warning bg-yellow-100 rounded-full p-5 text-7xl text-warning w-[fit-content] my-5 mx-auto">
              <GiWaterBottle />
            </p>
            <a href="#">
              <h2 className="font-semibold text-slate-500 text-2xl duration-500 hover:text-warning text-center">
                Pure Water
              </h2>
            </a>
            <p className="text-center py-5">
              Accumsan phallus lorem tortor koielit eget. Placat tortor sede
              pharetra eget.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <p className="border border-success bg-green-100 rounded-full p-5 text-7xl text-success w-[fit-content] my-5 mx-auto">
              <IoFastFoodOutline />
            </p>
            <a href="#">
              <h2 className="font-semibold text-slate-500 text-2xl duration-500 hover:text-success text-center">
                Healthy Food
              </h2>
            </a>
            <p className="text-center py-5">
              Accumsan phallus lorem tortor koielit eget. Placat tortor sede
              pharetra eget.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <p className="border border-error bg-red-100 rounded-full p-5 text-7xl text-error w-[fit-content] my-5 mx-auto">
              <CiMedicalCross />
            </p>
            <a href="#">
              <h2 className="font-semibold text-slate-500 text-2xl duration-500 hover:text-error text-center">
                Medical Care
              </h2>
            </a>
            <p className="text-center py-5">
              Accumsan phallus lorem tortor koielit eget. Placat tortor sede
              pharetra eget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationMeans;
