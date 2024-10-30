import React from "react";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import project from "../assets/project1.webp";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-11 mb-20 flex flex-col gap-7">
      <div className="group flex gap-7 p-8 items-start cursor-pointer rounded-md transition motion-reduce:transition-none hover:bg-slate-800/50">
        <img
          src={project}
          alt="project"
          className="w-40 h-auto border-2 border-slate-900 group-hover:border-slate-200/50 transition"
        />
        <div className="flex flex-col gap-6">
          <p
            className={`flex items-center text-slate-200 text-xl font-semibold tracking-tight group-hover:text-teal-300`}
          >
            Build a Spotify Connected
            <RxArrowTopRight />
          </p>
          <p className="text-[#94A3B8] leading-normal text-justify text-[15px] font-medium">
            Video course that teaches how to build a web app with the Spotify
            Web API. Topics covered include the principles of REST APIs, user
            auth flows, Node, Express, React, Styled Components, and more.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300">
              JavaScript
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300">
              TypeScript
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300">
              React
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300">
              Next.js
            </div>
          </div>
        </div>
      </div>
      <p
        onClick={() => navigate("/archive")}
        className="group flex items-center gap-1 hover:underline text-slate-200 text-xl font-semibold tracking-tight hover:text-teal-300 pl-8 cursor-pointer"
      >
        View Full Project Archive
        <RxArrowRight className="mt-1 group-hover:ml-1" />
      </p>
    </div>
  );
};

export default Projects;
