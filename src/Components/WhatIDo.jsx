import { whatIDoImg } from "../assets";
import SectionTitle from "./SectionTitle";

const WhatIDo = () => {
  return (
    <div className="w-full pt-10" id="what-I-do">
      <div className="max-w-[1600px] mx-auto flex-col-reverse justify-center lg:flex-row flex items-center lg:justify-between gap-8 px-6 md:px-20 min-h-screen p-4">
        <div className="h-[250px] md:h-[300px]">
          <img
            src={whatIDoImg}
            alt="A sketch rocket flying with smoke"
            className="h-full w-full"
          />
        </div>
        <div className="">
          <SectionTitle title="What I Do" />
          <h3 className="text-lg md:text-2xl max-w-[30ch] font-bold mt-8 mb-10">
            I enjoy creating delightful, human-centered digital experiences.
          </h3>
          <h1 className="text-3xl md:text-7xl m-0 p-0 font-bold pt-10 border-t border-slate-300 border-solid w-fit">
            Think. Make. Solve.
          </h1>
          <a href="#contact">
            <button className="mt-8 bg-blue-400 text-white px-7 py-2 md:px-10 md:py-3 md:text-lg font-semibold rounded-lg hover:scale-105 transition-all ease-out active:bg-blue-200">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
