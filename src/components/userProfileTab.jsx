import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import client from "../assets/images/client/05.jpg";
import {
  AiOutlineDashboard,
  TbNotebook,
  AiOutlineCreditCard,
  FaRecycle,
  LuBellRing,
  BiCog,
  CgLogOff,
} from "../assets/icons/vander";

export default function UserProfileTab() {
  const location = useLocation();

  let [uploadFile, setUpoadFile] = useState(client);

  function handleChange(event) {
    if (event.target.files && event.target.files.length !== 0) {
      setUpoadFile(URL.createObjectURL(event.target.files[0]));
    }
  }
  return (
    <>
      <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
        <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
          <div className="profile-pic text-center mb-5">
            <input
              id="pro-img"
              name="profile-image"
              type="file"
              className="hidden"
              onChange={(e) => handleChange(e)}
            />
            <div>
              <div className="relative h-24 w-24 mx-auto">
                <img
                  src={uploadFile}
                  className="rounded-full shadow dark:shadow-gray-700 ring-4 ring-slate-50 dark:ring-slate-800"
                  id="profile-image"
                  alt=""
                />
                <label
                  className="absolute inset-0 cursor-pointer"
                  htmlFor="pro-img"
                ></label>
              </div>

              <div className="mt-4">
                <h5 className="text-lg font-semibold">Cristina Murfy</h5>
                <p className="text-slate-400">cristina@hotmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700">
            <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
              <li className="navbar-item account-menu">
                <Link
                  to="/profile"
                  className={`${
                    location.pathname === "/profile"
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-400"
                  } navbar-link  flex items-center py-2 rounded hover:text-indigo-600`}
                >
                  <span className="me-2 text-[18px] mb-0">
                    <AiOutlineDashboard />
                  </span>
                  <h6 className="mb-0 font-semibold">Profile</h6>
                </Link>
              </li>

              <li className="navbar-item account-menu">
                <Link
                  to="/profile-billing"
                  className={`${
                    location.pathname === "/profile-billing"
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-400"
                  } navbar-link  flex items-center py-2 rounded hover:text-indigo-600`}
                >
                  <span className="me-2 text-[18px] mb-0">
                    <TbNotebook />
                  </span>
                  <h6 className="mb-0 font-semibold">Billing Info</h6>
                </Link>
              </li>

              <li className="navbar-item account-menu">
                <Link
                  to="/profile-payment"
                  className={`${
                    location.pathname === "/profile-payment"
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-400"
                  } navbar-link  flex items-center py-2 rounded hover:text-indigo-600`}
                >
                  <span className="me-2 text-[18px] mb-0">
                    <AiOutlineCreditCard />
                  </span>
                  <h6 className="mb-0 font-semibold">Payment</h6>
                </Link>
              </li>

              <li className="navbar-item account-menu">
                <Link
                  to="/profile-social"
                  className={`${
                    location.pathname === "/profile-social"
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-400"
                  } navbar-link  flex items-center py-2 rounded hover:text-indigo-600`}
                >
                  <span className="me-2 text-[18px] mb-0">
                    <FaRecycle />
                  </span>
                  <h6 className="mb-0 font-semibold">Social Profile</h6>
                </Link>
              </li>

              <li className="navbar-item account-menu">
                <Link
                  to="/profile-notification"
                  className={`${
                    location.pathname === "/profile-notification"
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-400"
                  } navbar-link  flex items-center py-2 rounded hover:text-indigo-600`}
                >
                  <span className="me-2 text-[18px] mb-0">
                    <LuBellRing />
                  </span>
                  <h6 className="mb-0 font-semibold">Notifications</h6>
                </Link>
              </li>

              <li className="navbar-item account-menu">
                <Link
                  to="/profile-setting"
                  className={`${
                    location.pathname === "/profile-setting"
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-400"
                  } navbar-link  flex items-center py-2 rounded hover:text-indigo-600`}
                >
                  <span className="me-2 text-[18px] mb-0">
                    <BiCog />
                  </span>
                  <h6 className="mb-0 font-semibold">Settings</h6>
                </Link>
              </li>

              <li className="navbar-item account-menu">
                <Link
                  to="/auth-lock-screen"
                  className={`${
                    location.pathname === "/auth-lock-screen"
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-400"
                  } navbar-link  flex items-center py-2 rounded hover:text-indigo-600`}
                >
                  <span className="me-2 text-[18px] mb-0">
                    <CgLogOff />
                  </span>
                  <h6 className="mb-0 font-semibold">Sign Out</h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
