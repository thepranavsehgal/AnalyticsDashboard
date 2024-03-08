import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "../../assets/icons/vander";
import { MdUploadFile, MdDeleteForever } from "react-icons/md";
import { teamData } from "../../data/data";

export default function Team() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // State to manage which data to display
  const [showAdminData, setShowAdminData] = useState(true);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleToggleData = (isAdmin) => {
    setShowAdminData(!isAdmin);
    // console.log(isAdmin);
  };
  

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
    // Optionally, you can close the modal after form submission
    setIsModalVisible(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="container-fluid relative px-3">
      <div className="layout-specing">
        <div className="md:flex justify-between items-center space-x-2">
          <div className="flex items-center">
            <h5 className="text-lg font-semibold">Team Members</h5>
            <button
              onClick={() => handleToggleData(false)}
              to=""
              className="py-1 px-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md ml-2"
            >
              Admin
            </button>
            <button
              onClick={() => handleToggleData(false)}
              to=""
              className="py-1 px-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md ml-2"
            >
              User
            </button>
          </div>
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {showAdminData &&
            teamData.map((item, index) => (
              <div className="group text-center" key={index}>
                {<div className="relative inline-block mx-auto max-h-[208px] max-w-[208px] rounded-full overflow-hidden shadow dark:shadow-gray-700">
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
                </div>}
                
              </div>
            ))}
        </div>

          <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
            {/* Modal toggle */}
            <Link
              onClick={toggleModal}
              className="py-1 px-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md ml-2"
            >
              Create
            </Link>
            <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
              <Link to="/index">BrandScape</Link>
            </li>
            <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight />
            </li>
            <li
              className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white"
              aria-current="page"
            >
              Team
            </li>
          </ul>
        </div>

        {/* <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
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
        </div> */}
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-black bg-opacity-30 absolute inset-0"></div>
            <div className="relative bg-white rounded-lg p-8">
              {/* Modal content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create An Admin
                </h3>
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  {/* Your form fields go here */}
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="name@company.com"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="RegisterName"
                    id="RegisterName"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="Harry"
                    required
                  />

                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    required
                  />

                  <button
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                  >
                    Register
                  </button>
                </form>
              </div>
              {/* Modal close button */}
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>

                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}