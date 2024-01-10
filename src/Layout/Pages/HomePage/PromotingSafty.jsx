import leftSideImg from "../../../assets/compo3.jpg";

const PromotingSafty = () => {
  return (
    <div className="pt-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <img
            className="w-full h-full object-cover"
            src={leftSideImg}
            alt=""
          />
        </div>
        <div className=" px-8 py-10 bg-[#101010]">
          <a href="#">
            <h2 className="2xl:text-6xl md:text-4xl text-3xl font-ubuntu font-semibold text-white">
              Promoting The Safety and Rights of Children
            </h2>
          </a>
          <p className="text-lg py-5 text-slate-100 pr-0 md:pr-16">
            Metus consequat vulputate ullamcorper sit blandit arcu pulvinar
            mauris. Tortor duis cum adipiscing egestas nunc. Feugiat lobortis
            commodo ut nulla velit. A auctor nisl ipsum gravida tristique eget
            vulputate ut. Non commodo sit purus parturient.
          </p>
          <div className="border-[#5c5b5b] border p-7 mb-20 rounded-xl bg-[#232323]">
            <p className="text-right pr-10 text-warning py-3">90%</p>
            <progress
              className="progress bg-white cursor-pointer progress-warning w-full h-5 p-1"
              value="90"
              max="100"
            ></progress>
            <div className="flex justify-between items-center my-3 text-white">
              <p>Raised: $24,808.00</p>
              <p>Goal: $26,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotingSafty;
