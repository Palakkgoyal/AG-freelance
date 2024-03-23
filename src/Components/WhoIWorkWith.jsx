import { whoIWorkWithImg } from "../assets";
import SectionTitle from "./SectionTitle";

const WhoIWorkWith = () => {
  return (
    <div
      className="bg-blue-900 select-none overflow-hidden relative text-white flex flex-col md:flex-row gap-0 min-h-screen py-10 justify-around items-center pt-16 px-4 text-center md:text-left"
      id="who-I-work-with"
    >
      <div className="md:ml-24 z-10">
        <SectionTitle
          title="Who I Work With"
          textClasses="text-[#FFD700]"
          spanClasses="bg-[#FFD700]"
        />
        <h3 className="text-3xl md:text-6xl mt-4 max-w-[18ch] font-semibold leading-normal">
          Educators & emerging Ed-techs trying to build online presence
        </h3>
        <p className="my-5 md:mt-12 max-w-[60ch]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quidem delectus dolore eligendi repudiandae reprehenderit eius
          voluptatum animi aliquam dolorem dolorum temporibus, nam nobis minus,
          illo obcaecati atque eum culpa.
        </p>
      </div>
      <div className="relative h-[400px]">
        <img
          src={whoIWorkWithImg}
          alt="A sketch rocket flying with smoke"
          className="h-full w-full"
        />
      </div>
      <span className="absolute border -right-20 border-solid w-[800px] h-[800px] border-gray-500 rounded-full "></span>
      <span className="absolute border -right-20 border-solid w-[1000px] h-[1000px] border-gray-500 rounded-full "></span>
    </div>
  );
};

export default WhoIWorkWith;
