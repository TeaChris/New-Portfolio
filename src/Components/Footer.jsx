import { ImMail } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="h-96 bg-purple-700">
      {/* top */}
      <div className="">
        <div className="">
          <h4>Say Hello</h4>
          <a href="mailto: olasunkanmiboluwatife110@gmail.com">
            <ImMail />
          </a>
          <a href="">
            <AiOutlineTwitter />
          </a>
        </div>
        <div className=""></div>
      </div>
    </footer>
  );
};

export default Footer;
