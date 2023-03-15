// import { Skills } from "./Skills";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";

import { others, techs } from "../../data";
import Experiences from "../Components/Experiences";

import ME from "../assets/Resume.pdf";

import { Fade } from "react-reveal";

const Resume = () => {
  return (
    <main className="container mx-auto flex flex-col items-end gap-16 bg-green-100 h-fit p-2 md:p-8 rounded-2xl shadow-md mt-16">
      {/* socials -- download */}
      <div className="flex flex-row items-center gap-3 cursor-pointer">
        <Fade bottom>
          <div className="flex flex-row items-center gap-2">
            <a
              href="https://www.linkedin.com/in/olasunkanmi-boluwatife-104307232"
              target="_blank"
            >
              <FaLinkedinIn className="text-xs text-green-900 transform hover:scale-125 transition ease-in duration-500" />
            </a>
            <a
              href="https://twitter.com/yourdevbermuda?t=30nXaXhYxGyLFHofBJcYtA&s=08"
              target="_blank"
            >
              <GrTwitter className="text-xs text-green-900 transform hover:scale-125 transition ease-in duration-500" />
            </a>
          </div>
          <a
            href={ME}
            download
            className="flex flex-row items-center transform hover:scale-125 transition ease-in duration-500"
          >
            <AiOutlineDownload className="text-xs text-green-900" />
            <p className="text-xs text-green-900">Download</p>
          </a>
        </Fade>
      </div>
      {/* resume */}
      <div className="flex flex-col gap-12 md:grid grid-cols-2 items-start md:gap-0">
        {/* details & skills */}
        <div className="flex flex-col gap-8 items-start">
          {/* top */}
          <div className="hidden md:flex flex-col items-start gap-1">
            <Fade bottom>
              <p className="text-xs font-bold text-green-900 underline cursor-pointer">
                olasunkanbolu.netlify.app
              </p>
              <p className="text-xs font-bold text-green-700">
                Ogun State, Nigeria
              </p>
              <p className="text-xs font-bold text-green-900 underline cursor-pointer">
                olasunkanmiboluwatife110@gmail.com
              </p>
            </Fade>
          </div>
          {/* bottom */}
          <div className="">
            <div className="flex flex-row gap-8 ml-4 md:flex md:flex-col gap-20">
              <div className="flex flex-col gap-2">
                <Fade bottom>
                  <div className="">
                    <h6 className="text-green-900 text-lg pl-4 font-bold">
                      Core Technologies:
                    </h6>
                  </div>
                  <ul className="flex flex-col gap-2 pl-4">
                    {techs.map((tech) => {
                      const { id, name } = tech;
                      return (
                        <li
                          key={id}
                          className="flex items-center gap-1 text-sm text-slate-600"
                        >
                          <BsFillCaretRightFill />
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                </Fade>
              </div>
              {/* others */}
              <div className="flex flex-col gap-2">
                <Fade bottom>
                  <div className="text-green-900 text-lg font-bold">
                    Others:
                  </div>
                  <ul className="flex flex-col gap-2">
                    {others.map((other) => {
                      const { id, name } = other;
                      return (
                        <li
                          key={id}
                          className="flex items-center gap-1 text-sm text-slate-600"
                        >
                          <BsFillCaretRightFill />
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* right -- experience */}
        <div className="flex flex-col items-start">
          {/* top */}
          {/* name */}
          <div className="flex flex-col items-start gap-8">
            <Fade bottom>
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl pl-8 font-bold text-green-900">
                  Boluwatife
                  <br />
                  Olasunkanmi
                </h2>
                <p className="font-semibold pl-8 text-lg text-slate-800">
                  Expert Frontend Developer And IT Specialist
                </p>
              </div>
              {/* desc */}
              <div className="">
                <p className="text-sm pl-8 text-slate-600">
                  Engineer valued for driving high-performance accessible web
                  experiences. I design quality, user-friendly and scalable
                  products regardless of the stack.
                </p>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="mt-4 bg-green-900 h-line w-lineW"></div>
          </Fade>
          {/* experience */}
          <div className="flex flex-col items-start gap-2 mt-16">
            <Fade bottom>
              <h4 className="text-2xl font-bold pl-8 text-green-900 underline">
                Experience
              </h4>
              <p className="text-slate-500 pl-8">
                I've Worked on a handful of web projects over the past 3 years,
                some of which were the following organization
              </p>
            </Fade>
          </div>
          {/* list of experiences */}
          <Experiences />
        </div>
        <Fade bottom>
          <div className="">
            <p className="font-bold text-4xl pl-8 text-green-900">Bermuda</p>
          </div>
        </Fade>
      </div>
    </main>
  );
};

export default Resume;
