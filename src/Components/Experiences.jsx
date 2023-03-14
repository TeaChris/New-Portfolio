import { BsFillCaretRightFill } from "react-icons/bs";

// import { expirences } from "../../data";

const Experiences = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col md:flex md:flex-row items-center gap-8">
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-green-900">AIM</h4>
            <span className="text-sm text-slate-600">
              -- Computer Tutor / Web Developer
            </span>
          </div>
          <p className="text-sm text-slate-500">Nov 2019 - 2022</p>
        </div>
        <div className="">
          <p className="text-slate-600">
            Shaping the future of the student with over-all IT knowledge.
            Building and advocating for inclusive and thoughtful experiences for
            over a hundred student across the state.
          </p>
        </div>
      </div>

      {/* second */}
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col md:flex md:flex-row items-center gap-8">
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-green-900">Spirit Of Africa</h4>
            <span className="text-sm text-slate-600">-- Frontend Engineer</span>
          </div>
          <p className="text-sm text-slate-500">Jan 2022 - Sept 2022</p>
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-slate-600">
            I orchestrated and developed the frontend infrastructure, design and
            functionality for SOA new JavaScript-centric app powered by React +
            Typscript and also managed a co-engineer and product designers.
          </p>
          <ul className="flex flex-col items-start gap-2">
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Built frontend applications for our several clients. Most
              especially JavaScript and React applications.
            </li>
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Enforced healthy codebase, coding style and standards.
            </li>
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Completed projects on time and delivered to clients accordingly.
            </li>
          </ul>
        </div>
      </div>

      {/* sthird */}
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col items-start md:flex md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-green-900">Yamakuza NFTs</h4>
            <span className="text-sm text-slate-600">
              -- Frontend Developer (Contractor)
            </span>
          </div>
          <p className="text-sm text-slate-500">Sept 2022 - Oct 2022</p>
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-slate-600">
            I worked on a couple of projects for organizations and individuals
            as a frontend engineering contractor.
          </p>
          <ul className="flex flex-col items-start gap-2">
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Built a contest application from the ground up using React which
              enabled users of the product from all around the globe to post
              photos and share reviews about the product
            </li>
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Crafted a solid design system to enforce consistency across the
              application.
            </li>
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Eliminated Bootstrap and several other CSS libraries completely
              from the application, and replaced them with custom styles.
            </li>
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Communicated effectively with project managers and the team.
            </li>
            <li className="flex items-center text-xs text-green-900">
              <BsFillCaretRightFill />
              Delivered an overall fast, yet accessible and silky smooth user
              experience in the app.
            </li>
          </ul>
        </div>
      </div>

      {/* third */}
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col md:flex md:flex-row items-center gap-8">
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-green-900">Lord's Mint</h4>
            <span className="text-sm text-slate-600">-- Web Developer</span>
          </div>
          <p className="text-sm text-slate-500"></p>
        </div>
        <div className="">
          <p className="text-slate-600">
            I worked as the only engineer with this company. Built and
            maintained the backend and frontend of a couple of web apps for
            clients.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
