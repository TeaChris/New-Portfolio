import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

import { Fade } from "react-reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container mx-auto mt-32 w-full">
      <Fade bottom>
        <div className="container mx-auto w-full h-1 bg-green-100"></div>
        <div className="mt-16 mb-8 flex flex-col gap-8 p-6 md:flex md:flex-row ">
          <div className=" container mx-auto flex gap-1 items-center">
            <p className="text-2xl font-bold text-green-900">&#169;</p>
            <h4 className="text-2xl font-bold text-green-900">Boluwatife</h4>
            <p className="text-2xl font-bold text-green-900">{currentYear}</p>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="github.com/TeaChris"
              className="text-xs text-green-900 transform hover:scale-125 transition ease-in duration-500"
              target="_blank"
            >
              <AiFillGithub className="text-xl" />
            </a>
            <a
              href="https://twitter.com/yourdevbermuda?t=30nXaXhYxGyLFHofBJcYtA&s=08"
              className="text-xs text-green-900 transform hover:scale-125 transition ease-in duration-500"
              target="_blank"
            >
              <AiOutlineTwitter className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/olasunkanmi-boluwatife-104307232"
              className="text-xs text-green-900 transform hover:scale-125 transition ease-in duration-500"
              target="_blank"
            >
              <GrLinkedinOption className="text-xl" />
            </a>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
