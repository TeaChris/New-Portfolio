import React from "react";
import Design from "../Components/Design";
import Form from "../Components/Form";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <header className="container mx-auto mt-16 w-full md:grid md:grid-cols-2 w-full gap-0">
        {/* left */}
        <div className="flex flex-col items-start gap-4 h-96 p-6">
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
        </div>
        {/* right */}
        <div className="flex flex-col items-start gap-2 bg-blue-800"></div>
      </header>
      <Design />
      <Form />
    </div>
  );
};

export default Home;
