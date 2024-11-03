import React from "react";
import { RxArrowLeft, RxArrowTopRight } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import data from "../assets/projects.json";

const shortenText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const Archive = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 w-full h-full px-20 py-14">
      <div className="flex flex-col gap-1">
        <p
          onClick={() => navigate("/")}
          className="group flex items-center gap-1 text-teal-300 text-xl font-semibold tracking-tight cursor-pointer hover:underline"
        >
          <RxArrowLeft className="mt-1" />
          Suyog Luitel
        </p>
        <h1 className="text-[#C4D1EC] text-6xl font-bold tracking-tight">
          All Projects
        </h1>
      </div>

      <div className="mt-16">
        <div className="flex items-center text-slate-200 leading-normal text-base font-medium border-b border-slate-800 pb-2">
          <div className="w-[5%] text-center">Year</div>
          <div className="w-[10%] text-center">Made with</div>
          <div className="w-[27%] text-center">Project</div>
          <div className="w-[40%] text-center">Built with</div>
          <div className="w-[20%] text-center">Link</div>
        </div>

        {data?.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-slate-200 leading-normal text-base font-medium my-5 border-b border-slate-800 pb-2"
          >
            <div className="w-[5%] text-center text-sm text-[#94A3B8]">
              {item?.year}
            </div>
            <div className="w-[10%] text-center text-sm text-[#94A3B8]">
              {item?.madeAt}
            </div>
            <div className="w-[27%] text-center">{item?.name}</div>
            <div className="w-[40%] flex items-center justify-center flex-wrap gap-3">
              {item?.lang?.map((langItem, index1) => (
                <div
                  key={index1}
                  className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 text-teal-300"
                >
                  {langItem}
                </div>
              ))}
            </div>
            <Link
              to={item?.link}
              target="_blank"
              className="w-[20%] flex items-center justify-start"
            >
              <div className="text-sm flex items-center text-[#94A3B8] cursor-pointer hover:text-teal-300 hover:underline">
                <span>{shortenText(item?.link, 30)}</span>
                {item?.github ? (
                  <FaGithub className="text-lg" />
                ) : (
                  <RxArrowTopRight className="text-lg" />
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
