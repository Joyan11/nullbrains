/** @format */
import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import ceo from "../assets/images/pexels-stefan-stefancik-91227.jpg";
import { team } from "../data";
export const Team = () => {
  const renderedList = React.Children.toArray(
    team.map((person) => {
      return (
        <div className="team-card hover:shadow-xl">
          <img
            src={person.image}
            alt={person.name}
            className="rounded-full h-48 w-48 object-cover border-8"
          />
          <div className="space-y-1 text-center">
            <p className="font-semibold pt2">{person.name}</p>
            <p className="text-indigo-500">{person.title}</p>
            <div className="flex space-x-2 justify-center items-center">
              <a>
                <AiOutlineTwitter className="text-gray-400 text-2xl" />
              </a>
              <a>
                <AiFillGithub className="text-gray-400 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      );
    })
  );

  return (
    <section id="team" className="mt-20">
      <div className="px-5 md:pl-32 md:w-6/12">
        <h6 className="uppercase text-indigo-400 text-sm">Our Team</h6>
        <p className="font-semibold text-4xl pt-2">
          An incredible team of amazing individuals
        </p>
      </div>
      <div className=" flex flex-wrap items-center justify-center pt-5">
        {renderedList}
      </div>
    </section>
  );
};
