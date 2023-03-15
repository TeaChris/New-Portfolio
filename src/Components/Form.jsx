import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { Fade } from "react-reveal";
// import { AiOutlineSwapRight } from "react-icons/ai";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tvvbm6f",
        "template_5hb44hr",
        form.current,
        "cSfCB_fQMQ8n04-ZW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(user);
  //   };

  return (
    <section className="mt-24 container mx-auto flex flex-col gap-16 items-start md:items-center w-full mb-8">
      <Fade bottom>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-green-900">
            Send Me A Message!
          </h2>
          <p className="text-xs md:text-2xl font-bold text-slate-500 text-start p-4 md:text-center">
            Got a question or proposal, or just want
            <br /> to say hello? Go ahead.
          </p>
        </div>
        <form
          ref={form}
          action=""
          onSubmit={sendEmail}
          className="flex flex-col p-4 md:items-center gap-8 items-start"
        >
          {/* name */}
          <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-4">
            <div className="">
              <label htmlFor="name"></label>
              <input
                name="name"
                type="name"
                value={user.name}
                id="name"
                placeholder="enter your name"
                required
                onChange={handleChange}
                className="w-80 h-12 p-4 border-b border-green-500"
              />
            </div>
            <div className="">
              <label htmlFor="email"></label>
              <input
                name="email"
                type="email"
                value={user.email}
                id="email"
                placeholder="email"
                required
                onChange={handleChange}
                className="w-80 h-12 p-4 border-b border-green-500"
              />
            </div>
          </div>
          {/* position */}
          <div className="">
            <label htmlFor="message"></label>
            <input
              name="message"
              type="text"
              value={user.message}
              id="apply"
              placeholder="Hi, I think we need a design system"
              required
              onChange={handleChange}
              className="w-80 md:w-96 p-4 border-b border-green-500"
            />
          </div>
          <button
            // onClick={handleSubmit}
            className="w-52 h-12 p-3 border border-green-500 hover:bg-green-900 hover:text-white transition ease-out duration-500"
          >
            Shoot
            {/* <AiOutlineSwapRight /> */}
          </button>
        </form>
        {/* </Fade> */}
      </Fade>
    </section>
  );
};
export default Form;
