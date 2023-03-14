import { techs } from "../../data";

export function Skills({ tech, id, name, other }) {
  return (
    <div className="">
      <div className="flex flex-row gap-8 ml-4 md:flex md:flex-col gap-20">
        <div className="flex flex-col gap-2">
          <div className="">
            <h6 className="text-green-900 text-lg font-bold">
              Core Technologies:
            </h6>
          </div>
          <ul className="flex flex-col gap-2">
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
        </div>
        {/* others */}
        <div className="flex flex-col gap-2">
          <div className="text-green-900 text-lg font-bold">Others:</div>
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
        </div>
      </div>
    </div>
  );
}
