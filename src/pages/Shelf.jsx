import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { FaUsersCog } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { BsCodeSlash } from "react-icons/bs";
import Work from "../Components/Work";

const Shelf = () => {
  const [count, setCount] = useState(false);

  return (
    <main className="flex flex-col items-center gap-16">
      <div
        className="mt-32 flex flex-col items-start
      gap-8 md:flex md:flex-row md:items-center"
      >
        <div className="flex flex-col items-center gap-1">
          <FaUsersCog className="text-2xl text-green-700" />
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-4xl font-bold">
              {count && <CountUp start={0} end={58} duration={2} delay={0} />}
            </h1>
          </ScrollTrigger>
          <p className="text-slate-500">Happy Client</p>
        </div>
        {/* second */}
        <div className="flex flex-col items-center gap-1">
          <GrSettingsOption className="text-2xl text-purple-700" />
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-4xl font-bold">
              {count && <CountUp start={0} end={159} duration={2} delay={0} />}
            </h1>
          </ScrollTrigger>
          <p>Good Reviews</p>
        </div>
        {/* third */}
        <div className="flex flex-col items-center gap-1">
          <GoCommentDiscussion className="text-2xl text-red-700" />
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-4xl font-bold">
              {count && <CountUp start={0} end={30} duration={2} delay={0} />}
            </h1>
          </ScrollTrigger>
          <p className="text-slate-500">Case Study</p>
        </div>
        {/* third */}
        <div className="flex flex-col items-center gap-1">
          <BsCodeSlash className="text-2xl text-blue-700" />
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-4xl font-bold">
              {count && <CountUp start={0} end={30} duration={2} delay={0} />}
            </h1>
          </ScrollTrigger>
          <p className="text-slate-500">Issues Solved</p>
        </div>
      </div>

      <Work />
    </main>
  );
};

export default Shelf;
