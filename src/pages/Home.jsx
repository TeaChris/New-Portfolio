import React from "react";
import Design from "../Components/Design";
import Form from "../Components/Form";
import Me from "../assets/me.jpg";

import { Fade } from "react-reveal";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8 ">
      <header className="container mx-auto mt-28 w-full md:grid md:grid-cols-2 w-full gap-4">
        {/* left */}
        <div className="flex flex-col items-start gap-4 h-96 p-6">
          <Fade bottom>
            {/* top */}
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-2xl md:text-5xl font-bold text-green-900">
                Frontend
                <br />
                Developer.
              </h2>
              <p className="mt-1 text-slate-500 md:text-lg">
                I like to craft solid and scalable
                <br /> frontend products with great
                <br /> user experiences.
              </p>
            </div>
            {/* bottom */}
            <div className="flex items-center gap-6 mt-4 text-green-700">
              <p>
                Highly skilled at progressive
                <br /> enhancement, design systems
                <br /> & UI Engineering.
              </p>
              <p>
                Over a decade of experience
                <br /> building products for clients
                <br /> across several countries.
              </p>
            </div>
          </Fade>
        </div>
        {/* right */}
        <Fade bottom>
          <div className="hidden md:flex md:flex-col md:items-start md:gap-2 md:bg-green-800">
            <div className="relative top-4 left-4 saturate-0 backdrop-brightness-50 transition ease-in duration-500 hover:saturate-100 brightness-90 top-0 left-0">
              <img src={Me} alt="ME" className="h-me w-mee" />
            </div>
            <div className="absolute w-mee h-me overflow-hidden hover:opacity-0 transition ease-out duration-500 ">
              <img src={Me} alt="ME" />
            </div>
          </div>
        </Fade>
      </header>
      <Design />
      <Form />
    </div>
  );
};

export default Home;
