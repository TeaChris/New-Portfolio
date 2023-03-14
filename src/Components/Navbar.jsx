import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { useState } from "react";
import Buttons from "./Buttons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm h-14 z-20 top-0 left-0">
      <div className="md:flex container mx-auto">
        <div className="md:flex container items-center justify-between py-3 md:px10">
          <Link to="/">
            <h2 className="text-3xl font-bold text-green-900 cursor-pointer">
              Bermuda
            </h2>
          </Link>
          {/* imported button component */}
          {/* passed the state value as a prop */}
          <Buttons isOpen={isOpen} setIsOpen={setIsOpen} />
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isOpen ? "top-20" : "top-[-490px]"
            }`}
          >
            {links.map(({ name, path }, index) => {
              return (
                <li key={index} className="md:ml-8 text=xl md:my-0 my-7">
                  <NavLink
                    to={path}
                    className="text-gray-800 hover:text-slate-500
                duration-500 font-semibold"
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
