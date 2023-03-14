import { works } from "../../data";
import { GrCode } from "react-icons/gr";

const Work = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-3 mt-16">
        <h2 className="text-4xl font-bold text-green-900">/Work.</h2>
        <p className="text-slate-500 text-lg">
          Selected projects I've worked on in the past.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:items-center md:gap-12">
        {works.map((work) => {
          const { id, name, type, img, link } = work;
          return (
            <div className="mt-12 w-52 h-60 bg-green-200 rounded-xl">
              <div className="flex flex-col relative gap-24">
                <div className="flex gap-2 mt-4 items-center">
                  .
                  <img src={img} alt="" className="w-12" />
                  <h4 className="text-3xl font-bold text-green-900">{name}</h4>
                </div>
                <div className="flex gap-8 items-center w-full bg-green-900 h-28 p-8 absolute top-32 rounded-b-2xl hover:bg-transparent">
                  <a href={link}>
                    <GrCode />
                  </a>
                  <p>{type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Work;
