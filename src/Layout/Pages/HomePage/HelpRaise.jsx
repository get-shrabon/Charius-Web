import { PiHandHeart } from "react-icons/pi";

const HelpRaise = () => {
  return (
    <div className="py-20">
      <div className="py-5 help__Compo">
        <div className="container mx-auto bg-[#0c5447c4] p-16 text-center">
          <p className=" text-6xl text-warning mx-auto w-[fit-content]">
            <PiHandHeart />
          </p>
          <p className="text-yellow-500 text-3xl ">
            Help us raise them up.
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-semibold  my-10 font-mono w-full md:w-2/3 mx-auto">
            Your donation means a lot to them. Donate what you can.
          </h2>
          <button className="theme-btn">
            Start Donationg Them
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpRaise;
