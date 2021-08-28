/** @format */
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center mt-20 pb-10 space-y-3 text-gray-500">
      <ul className="flex space-x-4 ">
        <li>
          <a href="#home"> About </a>
        </li>
        <li>
          <a href="#blog"> Blog </a>
        </li>
        <li>
          <a href="#team"> Team </a>
        </li>
        <li>
          <a href="#"> Pricing </a>
        </li>
        <li>
          <a href="#contact/"> Contact </a>
        </li>
        <li>
          <a href="#"> Terms </a>
        </li>
      </ul>
      <ul className="flex space-x-4 ">
        <li>
          <a href="#">
            <FaFacebook className="text-xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter className="text-xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram className="text-xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGithub className="text-xl" />
          </a>
        </li>
      </ul>
      <div>
        <p className="text-gray-400">
          &#169; SomeCompany.inc All rights reserved.
        </p>
      </div>
    </footer>
  );
};
