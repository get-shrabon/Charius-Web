import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import ClientsSlider from "./ClientsSlider";
import CharitySlider from "./CharitySlider";

const Clients = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div className="py-20 relative z-0">
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="client-bg bg-no-repeat  bg-center bg-cover pt-20 pb-52">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-white text-6xl font-bold font-mono">
                  {" "}
                  {counter && (
                    <CountUp start={0} end={326} duration={2.75}></CountUp>
                  )}
                </h3>
                <p className="text-lg text-white font-semibold">
                  Total <br /> Campaigns
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-white text-6xl font-bold font-mono">
                  {" "}
                  {counter && (
                    <CountUp start={0} end={325} duration={2.75}></CountUp>
                  )}
                  M
                </h3>
                <p className="text-lg text-white font-semibold">
                  Total Fund
                  <br /> Raisd
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-white text-6xl font-bold font-mono">
                  {" "}
                  {counter && (
                    <CountUp start={0} end={120} duration={2.75}></CountUp>
                  )}
                </h3>
                <p className="text-lg text-white font-semibold">
                  Happy <br /> Volunteers
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-white text-6xl font-bold font-mono">
                  {" "}
                  {counter && (
                    <CountUp start={0} end={15} duration={2.75}></CountUp>
                  )}
                </h3>
                <p className="text-lg text-white font-semibold">
                  Years Of <br /> Fund Raising
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-[-130px]">
          <ClientsSlider />
        </div>
        <div>
            <CharitySlider/>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Clients;
