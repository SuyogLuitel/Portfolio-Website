import React from "react";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import data from "../assets/projects.json";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="ml-11 mb-20 flex flex-col gap-7">
      {data
        ?.filter((item) => item.home)
        ?.map((item, index) => (
          <Link to={item?.link} target="_blank" key={index}>
            <div className="group flex gap-7 p-8 items-start cursor-pointer rounded-md transition motion-reduce:transition-none hover:bg-slate-800/50">
              <img
                src={item?.image}
                alt="project"
                className="w-40 h-auto border-2 border-slate-900 group-hover:border-slate-200/50 transition"
              />
              <div className="flex flex-col gap-6">
                <div className="flex items-center text-slate-200 text-xl font-semibold tracking-tight group-hover:text-teal-300">
                  <span>{item?.name}</span>
                  <RxArrowTopRight className="ml-2" />
                </div>

                <p className="text-[#94A3B8] leading-normal text-justify text-[15px] font-medium">
                  {item?.description}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {item?.lang?.map((langItem, index1) => (
                    <div
                      key={index1}
                      className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 flex items-center text-teal-300"
                    >
                      {langItem}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
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
