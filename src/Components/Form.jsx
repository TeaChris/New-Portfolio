import { useState } from "react";
// import { AiOutlineSwapRight } from "react-icons/ai";

const Form = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <section className="mt-24 container mx-auto flex flex-col gap-16 items-start md:items-center w-full mb-8">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-4xl font-bold text-green-900">
          Send Me A Message!
        </h2>
        <p className="text-2xl font-bold text-slate-500 text-center">
          Got a question or proposal, or just want
          <br /> to say hello? Go ahead.
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col md:items-center gap-8 items-start"
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
            className="w-96 p-4 border-b border-green-500"
          />
        </div>
        <button
          // onClick={handleSubmit}
          className="w-52 h-12 p-3 border border-green-500 hover:bg-green-900 hover:text-white hover:transition hover:ease-out hover:duration-100"
        >
          Shoot
          {/* <AiOutlineSwapRight /> */}
        </button>
      </form>
      {/* </Fade> */}
    </section>
  );
};
export default Form;
