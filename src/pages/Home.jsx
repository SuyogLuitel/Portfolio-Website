import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const [active, setActive] = useState("about");

  const sections = [
    { id: "about", name: "ABOUT" },
    { id: "experience", name: "EXPERIENCE" },
    { id: "projects", name: "PROJECTS" },
  ];

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleScroll, options);
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="bg-slate-900 w-full h-screen flex relative">
      <div className="w-[40%] pl-40 pt-20 flex flex-col gap-6">
        <h1 className="text-[#C4D1EC] text-6xl font-bold tracking-tight">
          Suyog Luitel
        </h1>
        <p className="text-slate-200 text-2xl font-semibold tracking-tight">
          Junior Frontend Engineer
        </p>
        <p className="text-slate-400 leading-normal text-lg font-medium w-80">
          Crafting seamless, high-quality, and user-friendly digital experiences
          for all.
        </p>
        <div className="flex flex-col gap-8 mt-10">
          {sections.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setActive(item.id);
              }}
              className={`group text-sm font-bold tracking-widest uppercase text-[#94A3B8] flex items-center gap-4 cursor-pointer ${
                active === item.id && "text-slate-200"
              }`}
            >
              <hr
                className={`border-t-2 group-hover:w-20 group-hover:border-slate-200 ${
                  active === item.id
                    ? "w-20 border-slate-200"
                    : "w-10 border-[#94A3B8]"
                }`}
              />
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5 mt-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suyogluitel235@gmail.com&su=Your%20Subject%20Here&body=Your%20Message%20Here"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="Send Email"
          >
            <MdOutlineEmail className="w-8 h-8 transition-transform transform hover:scale-110 text-[#94A3B8] hover:text-teal-300 cursor-pointer" />
          </a>
          <Link to="https://github.com/SuyogLuitel" target="_blank">
            <FaGithub className="w-7 h-7 transition-transform transform hover:scale-110 text-[#94A3B8] hover:text-teal-300 cursor-pointer" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/suyog-luitel-4349312a0/"
            target="_blank"
          >
            <FaLinkedin className="w-7 h-7 transition-transform transform hover:scale-110 text-[#94A3B8] hover:text-teal-300 cursor-pointer" />
          </Link>
          <Link to="https://codepen.io/" target="_blank">
            <FaCodepen className="w-7 h-7 transition-transform transform hover:scale-110 text-[#94A3B8] hover:text-teal-300 cursor-pointer" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <IoLogoInstagram className="w-7 h-7 transition-transform transform hover:scale-110 text-[#94A3B8] hover:text-teal-300 cursor-pointer" />
          </Link>
          <Link to="https://x.com/" target="_blank">
            <FaXTwitter className="w-7 h-7 transition-transform transform hover:scale-110 text-[#94A3B8] hover:text-teal-300 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="w-[60%] flex flex-col gap-20 mt-32 overflow-y-auto pr-32">
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
