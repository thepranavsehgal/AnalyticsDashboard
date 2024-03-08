import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "../../assets/icons/vander";
import { MdUploadFile, MdDeleteForever } from "react-icons/md";
import { teamData } from "../../data/data";


useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, []);

const users = () => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
      {teamData.map((item, index) => {
        return (
          <div className="group text-center" key={index}>
            <div className="relative inline-block mx-auto max-h-[208px] max-w-[208px] rounded-full overflow-hidden shadow dark:shadow-gray-700">
              <img src={item.image} className="" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black max-h-[208px] max-w-[208px] rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

              <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                <li className="inline">
                  <Link
                    to="#"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                  >
                    <MdUploadFile className="h-4 w-4" />
                  </Link>
                </li>

                <li className="inline">
                  <Link
                    to="#"
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                  >
                    <MdDeleteForever className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="content mt-3">
              <Link
                to=""
                className="text-lg font-semibold hover:text-indigo-600 duration-500"
              >
                {item.name}
              </Link>
              <p className="text-slate-400">{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default users;
