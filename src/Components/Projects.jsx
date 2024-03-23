import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { projectData, blogsData, youtubeData } from "../staticData";
import { projectImg } from "../assets";

const Projects = () => {
  const [current, setCurrent] = useState("projects");

  return (
    <div
      className="px-4 overflow-hidden md:px-10 lg:px-24 min-h-screen pt-20 pb-20 bg-slate-50"
      id="projects"
    >
      <div>
        <SectionTitle title="Anukiran Ghosh" />
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
              current === "projects"
                ? "border-b-2 border-solid border-black"
                : "text-slate-300"
            }`}
            onClick={() => setCurrent("projects")}
          >
            Projects
          </button>
          <button
            className={`text-sm md:text-base font-bold pb-2 ${
              current === "blogs"
                ? "border-b-2 border-solid border-black"
                : "text-slate-300"
            }`}
            onClick={() => setCurrent("blogs")}
          >
            Blogs
          </button>
          <button
            className={`text-sm md:text-base font-bold pb-2 ${
              current === "youtube"
                ? "border-b-2 border-solid border-black"
                : "text-slate-300"
            }`}
            onClick={() => setCurrent("youtube")}
          >
            YouTube
          </button>
        </div>
      </div>

     {current === "projects" && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {projectData.map((card, idx) => (
          <ProjectCard {...card} key={idx} />
        ))}
      </div>
    }
    {current === "blogs" && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {blogsData.map((card, idx) => (
          <BlogAndYTCard {...card} key={idx} />
        ))}
      </div>
    }
     {current === "youtube" && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {youtubeData.map((card, idx) => (
          <BlogAndYTCard {...card} key={idx} />
        ))}
      </div>
    }
    </div>
  );
};

function ProjectCard({ src, title, desc, github, live }) {
  return (
    <div className="border border-solid overflow-hidden border-gray-200 flex flex-col lg:flex-row rounded-lg shadow-md hover:shadow-2xl transition-all ease-in-out">
      <div className="overflow-hidden h-[300px] md:w-[600px] rounded-s-lg">
        <img src={src} alt="title" className="min-w-full min-h-full" />
      </div>
      <div className="bg-white p-2 text-center w-full flex flex-col items-center justify-center leading-loose">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="leading-snug mt-2">{desc}</p>
        <ul className="flex gap-4 flex-wrap mt-4">
          {live && (
            <li className="bg-gray-100 text-sm px-2 py-1 rounded-lg">
              <a href="https://">Live Preview</a>
            </li>
          )}
          {github && (
            <li className="bg-gray-100 text-sm px-2 py-1 rounded-lg">
              <a href="https://">GitHub</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

function BlogAndYTCard({ src, linkToResource }) {
  return (
    <div className="border border-solid overflow-hidden border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-all ease-in-out">
      <a href={linkToResource} target="_blank" className="overflow-hidden h-[300px] md:w-[600px] rounded-s-lg">
        <img src={src} alt="title" className="min-w-full min-h-full" />
      </a>
    </div>
  );
}

export default Projects;
