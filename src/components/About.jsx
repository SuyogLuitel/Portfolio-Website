import React from "react";

const About = () => {
  return (
    <div className="text-[#94A3B8] text-base font-medium flex flex-col gap-10 pl-20">
      <p>
        I started my journey into web development with{" "}
        <span className="text-teal-300">Ayata Inc.</span> in February 2024,
        diving deep into creating user-friendly interfaces. My adventure began
        with working on project such{" "}
        <span className="text-teal-300">learning management system</span>, where
        I learned the importance of accessibility and engaging design. Since
        then, I’ve expanded my skill set by working in project such as{" "}
        <span className="text-teal-300">billing management system</span> and{" "}
        <span className="text-teal-300">attendance management system</span>, all
        crafted with React to deliver smooth and interactive user experiences.
      </p>
      <p>
        I thrive in frontend development, blending creativity with
        functionality. I enjoy transforming complex challenges into simple,
        elegant solutions that enhance user experiences. In my free time, I
        explore new technologies and work on personal projects to keep my coding
        passion alive.
      </p>
      <div className="flex items-center gap-5">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          className="w-10 cursor-pointer"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          className="w-11 cursor-pointer"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          className="w-10 cursor-pointer"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          className="w-10 cursor-pointer"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          className="w-10 cursor-pointer"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          className="w-10 cursor-pointer"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          className="w-10 cursor-pointer"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          className="w-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default About;
