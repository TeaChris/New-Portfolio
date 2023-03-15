import { works } from "../../data";
import { GrCode } from "react-icons/gr";

import { Fade } from "react-reveal";

const Work = () => {
  return (
    <div className="">
      <Fade bottom>
        <div className="flex flex-col items-center gap-3 mt-16">
          <h2 className="text-4xl font-bold text-green-900">/Work.</h2>
          <p className="text-slate-500 text-lg">
            Selected projects I've worked on in the past.
          </p>
        </div>
      </Fade>

      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:items-center md:gap-12">
        <Fade bottom>
          {works.map((work) => {
            const { id, name, type, desc, link } = work;
            return (
              <div key={id} className="mt-12 w-52 h-60 bg-green-200 rounded-xl">
                <div className="flex flex-col relative gap-24">
                  <div className="flex flex-col gap-2 mt-4 items-center">
                    <h4 className="text-3xl font-bold text-green-900">
                      {name}
                    </h4>
                    <p className="text-xs text-green-900 text-center p-4">
                      {desc}
                    </p>
                  </div>
                  <div className="flex gap-8 items-center w-full bg-green-700 h-28 p-8 absolute top-32 rounded-b-2xl shadow-inner">
                    <a href={link}>
                      <button className="w-8 h-8 bg-green-500 rounded-full text-lg grid place-items-center hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-in duration-500">
                        <GrCode className="text-green-900" />
                      </button>
                    </a>
                    <p className="capitalize text-lg font-bold text-green-300">
                      {type}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};
export default Work;
