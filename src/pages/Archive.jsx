import React from "react";
import { RxArrowLeft, RxArrowTopRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Archive = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 w-full h-screen px-28 py-20">
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
        <div className="flex justify-between items-center text-slate-200 leading-normal text-base font-medium border-b border-slate-800 pb-2">
          <div className="flex-1 text-center">Year</div>
          <div className="flex-1 text-center">Project</div>
          <div className="flex-1 text-center">Made at</div>
          <div className="flex-[3] text-center">Built with</div>{" "}
          <div className="flex-1 text-center">Link</div>
        </div>

        <div className="flex justify-between items-center text-slate-200 leading-normal text-base font-medium my-5 border-b border-slate-800 pb-2">
          <div className="flex-1 text-center text-sm text-[#94A3B8]">2023</div>
          <div className="flex-1 text-center">Emerson Collective</div>
          <div className="flex-1 text-center text-sm text-[#94A3B8]">
            Upstatement
          </div>
          <div className="flex-[3] flex items-center gap-3 justify-center flex-wrap">
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 text-teal-300">
              JavaScript
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 text-teal-300">
              TypeScript
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 text-teal-300">
              React
            </div>
            <div className="bg-teal-400/10 text-sm font-medium leading-5 rounded-full px-4 py-2 text-teal-300">
              Next.js
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center text-sm text-[#94A3B8] cursor-pointer hover:text-teal-300 hover:underline">
            emersoncollective.com
            <RxArrowTopRight className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
