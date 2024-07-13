import whiteLogo from "../../assets/whiteLogo.svg";
import { FaLinkedin, FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#161C2D] p-[5rem] grid gap-[3rem]">
      <div>
        <img src={whiteLogo} alt="Logo" />
      </div>
      <div className="flex text-white gap-[5rem]">
        <div className="w-[100%]"></div>
        <div className="w-[100%] grid">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <ul className="flex gap-[1rem]">
            <li><FaLinkedin size={24} /></li>
            <li><FaFacebook size={24} /></li>
            <li><AiFillInstagram size={24} /></li>
            <li><FaTelegram size={24} /></li>
          </ul>
        </div>
        <ul className="w-[50%] grid g-[100%] gap-[0.5rem]">
          <li className="text-[#a5a5a5]">Company</li>
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact us</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>
        <ul className="w-[50%] grid g-[100%] gap-[0.5rem]">
          <li className="text-[#a5a5a5]">Products</li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#help-desk">Help desk</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
        <ul className="w-[50%] grid g-[100%] gap-[0.5rem]">
          <li className="text-[#a5a5a5]">Services</li>
          <li><a href="#connect-icon">Connect icon</a></li>
          <li><a href="#verification">Verification</a></li>
          <li><a href="#quality">Quality</a></li>
        </ul>
        <ul className="w-[50%] grid g-[100%] gap-[0.5rem]">
          <li className="text-[#a5a5a5]">Legal</li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-conditions">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
