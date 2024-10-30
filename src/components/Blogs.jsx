import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import project from "../assets/project1.webp";

const Blogs = () => {
  return (
    <div className="ml-11 mb-20 flex flex-col gap-7">
      <div className="group pl-8 text-sm font-bold tracking-widest uppercase text-[#94A3B8] flex items-center gap-4 cursor-pointer">
        WRITING
      </div>
      <div className="group flex gap-7 p-8 items-center cursor-pointer rounded-md transition motion-reduce:transition-none hover:bg-slate-800/50">
        <img
          src={project}
          alt="project"
          className="w-40 h-auto border-2 border-slate-900 group-hover:border-slate-200/50 transition"
        />
        <div className="flex flex-col gap-2">
          <p className="text-[#94A3B8] leading-normal text-justify text-[15px] font-medium">
            2024
          </p>
          <p
            className={`flex items-center text-slate-200 text-xl font-semibold tracking-tight group-hover:text-teal-300`}
          >
            Integrating Algolia Search with WordPress
            <RxArrowTopRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
