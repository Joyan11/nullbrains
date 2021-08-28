/** @format */
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="sticky top-0 z-10 bg-white relative">
      <div className=" md:container md:mx-auto px-2 py-6 flex flex-wrap justify-between border-solid border-coolgray-300 border-b-2 items-center">
        <a href="#home" className="font-extrabold text-3xl md:text-2xl ">
          nullbrains<span className="text-indigo-700">.</span>
        </a>
        <div className="hidden md:block font-semibold text-gray-700 ">
          <div className="flex items-center  space-x-6">
            {" "}
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <AiOutlineSearch className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="space-x-6 hidden md:block">
          <a href="#home">Sign in</a>
          <a
            href="#home"
            className="rounded-full px-2 py-2 bg-indigo-500 text-white">
            Sign up
          </a>
        </div>
        <div className="block md:hidden">
          <GiHamburgerMenu
            className="text-3xl"
            onClick={() => setNavbar(() => !navbar)}
          />
        </div>
      </div>
      {navbar && (
        <div className="bg-white border absolute w-full h-auto py-10">
          <div className="flex flex-col items-center  space-y-5 text-2xl font-semibold">
            {" "}
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <p>Search</p>
            <div className="space-x-3 pt-5 border-t-4">
              <a href="#home">Sign in</a>
              <a
                href="#home"
                className="rounded-full px-3 py-2 bg-indigo-500 text-white">
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
