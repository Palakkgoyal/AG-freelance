import SectionTitle from "./SectionTitle";
import { useState } from "react";
import {
  websiteProject,
  illustrationProject,
  mobileProject,
} from "../staticData";
import { projectImg } from "../assets";

const Projects = () => {
  const [current, setCurrent] = useState("website");

  let data;

  if (current === "website") {
    data = websiteProject;
  } else if (current === "illustration") {
    data = illustrationProject;
  } else {
    data = mobileProject;
  }

  return (
    <div className="px-4 overflow-hidden md:px-10 lg:px-24 min-h-screen pt-20 pb-20 bg-slate-50" id="projects">
      <div>
        <SectionTitle title="Jack Gross" />
        <div className="relative w-fit">
          <h3 className="text-3xl md:text-6xl font-semibold w-[15ch] leading-tight">
            Look at My Products.
          </h3>
          <img
            src={projectImg}
            alt="view my projects"
            className="absolute opacity-15 md:opacity-100 -right-20 top-0"
          />
        </div>
      </div>
      <div className="mt-12">
        <div className="flex gap-8">
          <button
            className={`text-sm md:text-base font-bold pb-2 ${
              current === "website"
                ? "border-b-2 border-solid border-black"
                : "text-slate-300"
            }`}
            onClick={() => setCurrent("website")}
          >
            Website
          </button>
          <button
            className={`text-sm md:text-base font-bold pb-2 ${
              current === "illustration"
                ? "border-b-2 border-solid border-black"
                : "text-slate-300"
            }`}
            onClick={() => setCurrent("illustration")}
          >
            Illustration
          </button>
          <button
            className={`text-sm md:text-base font-bold pb-2 ${
              current === "mobile"
                ? "border-b-2 border-solid border-black"
                : "text-slate-300"
            }`}
            onClick={() => setCurrent("mobile")}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {data.map((card, idx) => (
          <ProjectCard {...card} key={idx} />
        ))}
      </div>
    </div>
  );
};

function ProjectCard({ src, title, desc }) {
  return (
    <div className="border border-solid overflow-hidden border-gray-200 flex flex-col lg:flex-row rounded-lg shadow-md hover:shadow-2xl transition-all ease-in-out">
      <div className="overflow-hidden h-[300px] md:w-[600px] rounded-s-lg">
        <img src={src} alt="title" className="min-w-full min-h-full" />
      </div>
      <div className="bg-white p-2 text-center w-full flex flex-col items-center justify-center leading-loose">
        <h4 className="font-bold text-lg">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Projects;
