import { heroImg } from "../assets";
import SectionTitle from "./SectionTitle";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden flex items-center h-screen pt-16"
      id="hero"
    >
      <div className="md:pl-24 z-10 overflow-hidden text-center md:text-left mx-auto max-w-[1600px] flex flex-col justify-center items-center md:items-start w-full select-none">
        <SectionTitle title="Anukiran Ghosh" />
        <h1 className="text-2xl md:text-5xl text-gray-800 w-[20ch] md:w-[11ch] xl:w-[20ch] m-0 p-0 font-bold">
          Hello, my name is Anukiran.
        </h1>
        <div className="mt-4 md:text-lg max-w-[40ch]">
          <p>☆ Social Media Marketer</p>
          <p>☆ No Code Website Creator</p>
          <p>☆ Creator of tech blog with 1k monthly visits (2020-2022)</p>
        </div>
        <a href="#contact">
          <button className="mt-8 bg-blue-400 text-white px-7 py-2 md:px-10 md:py-3 md:text-lg font-semibold rounded-lg hover:scale-105 transition-all ease-out active:bg-blue-200">
            Hire me
          </button>
        </a>
      </div>
      <div className="absolute -right-40 bottom-0 h-[600px] opacity-20 lg:opacity-100 lg:h-full">
        <img
          src={heroImg}
          alt="A sketch rocket flying with smoke"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
