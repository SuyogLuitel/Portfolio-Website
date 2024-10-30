import React from "react";
import { BsDot } from "react-icons/bs";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="mt-20 ml-11 mb-20 flex flex-col gap-7">
      <div className="group flex gap-3 p-8 items-start cursor-pointer rounded-md transition motion-reduce:transition-none hover:bg-slate-800/50">
        <p className="text-[#94A3B8] leading-normal text-sm font-medium w-80">
          2024 - PRESENT
        </p>
        <div className="flex flex-col gap-6">
          <p
            className={`flex items-center text-slate-200 text-xl font-semibold tracking-tight group-hover:text-teal-300`}
          >
            Junior Frontend Engineer
            <BsDot />
            Ayata Inc.
            <RxArrowTopRight className="mt-1 group-hover:ml-1" />
          </p>
          <p className="text-[#94A3B8] leading-normal text-justify text-[15px] font-medium">
            Build and maintain critical components used to construct Klaviyo’s
            frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300">
              JavaScript
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300">
              TypeScript
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300">
              HTML & CSS
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
      <Link to="/resume.pdf" target="_blank">
        <p className="group flex items-center hover:underline text-slate-200 text-xl font-semibold tracking-tight hover:text-teal-300 pl-8 cursor-pointer">
          View Full Resume
          <RxArrowTopRight className="mt-1 group-hover:ml-1" />
        </p>
      </Link>
    </div>
  );
};

export default Experience;
