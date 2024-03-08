import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as Icon from "react-feather";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  AiOutlineClose,
  FiDollarSign,
} from "../../assets/icons/vander";

import { productData } from "../../data/data";
// console.log(productData);
export default function AiDashboard() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, []);

  let [modal, setModal] = useState(false);
  let [uploadFile, setUpoadFile] = useState();

  function handleChange(event) {
    if (event.target.files && event.target.files.length !== 0) {
      setUpoadFile(URL.createObjectURL(event.target.files[0]));
    }
  }
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating - fullStars >= 0.5; // Check for half star
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-red-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          {
            <path
              fill="yellow"
              d="M12 2.75l2.76 5.62 6.24.9-4.51 4.39 1.07 6.22-5.56-2.92-5.56 2.92 1.07-6.22-4.51-4.39 6.24-.9z"
            />
          }
        </svg>
      );
    }

    // Add half star if applicable
    if (halfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-red-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          {
            <path fill="https://upload.wikimedia.org/wikipedia/commons/8/81/Star_half.svg" />
          }
        </svg>
      );
    }

    // Add empty stars to fill up to 5 stars
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          {
            <path
              fill="url(#halfStarGradient)"
              d="M12 2.75l2.76 5.62 6.24.9-4.51 4.39 1.07 6.22-5.56-2.92-5.56 2.92 1.07-6.22-4.51-4.39 6.24-.9z"
            />
          }
        </svg>
      );
    }

    return stars;
  };
  return (
    <div className="container-fluid relative px-3">
      <div className="layout-specing">
        <div className="md:flex justify-between items-center">
          <div>
            <h5 className="text-lg font-semibold">Shop Items</h5>

            <ul className="tracking-[0.5px] inline-flex items-center mt-2">
              <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                <Link to="/index">Techwind</Link>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <MdKeyboardArrowRight />
              </li>
              <li
                className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white"
                aria-current="page"
              >
                Shop
              </li>
            </ul>
          </div>

          <div>
            <Link
              to="#"
              onClick={() => setModal(!modal)}
              className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"
            >
              <Icon.Plus className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {productData.map((product, id) => (
            <div
              key={id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={product.image}
                  alt="product image"
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ml-2 hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h5>
              </a>
              <div className="px-5 pb-5">
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {generateStars(product.rating)}{" "}
                    {/* Call generateStars function */}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {product.rating}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`fixed z-50 flex items-center justify-center overflow-hidden inset-0 m-auto bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${
            modal ? "" : "hidden"
          }`}
        >
          <div className="relative w-full h-auto max-w-lg p-4">
            <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
              <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
                <h5 className="text-xl font-semibold">Add shop item</h5>
                <button
                  type="button"
                  onClick={() => setModal(!modal)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <AiOutlineClose className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <div>
                  <p className="font-semibold mb-4">
                    Upload your shop image here, Please click "Upload Image"
                    Button.
                  </p>
                  {uploadFile ? (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      <img
                        src={uploadFile}
                        alt=""
                        className="preview-content"
                      />
                    </div>
                  ) : (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Supports JPG, PNG and MP4 videos. Max file size : 10MB.
                    </div>
                  )}
                  <input
                    type="file"
                    id="input-file"
                    name="input-file"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                    htmlFor="input-file"
                  >
                    Upload Image
                  </label>
                </div>

                <form className="mt-4">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12">
                      <label className="font-semibold">
                        Item Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Name"
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <label className="form-label font-semibold">Price</label>
                      <div className="relative mt-2">
                        <span
                          className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                          id="basic-addon1"
                        >
                          <FiDollarSign />
                        </span>
                        <input
                          type="text"
                          className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Price"
                          required
                        />
                      </div>
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <label className="font-semibold">Label</label>
                      <input
                        name="name"
                        id="name2"
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Label"
                      />
                    </div>

                    <div className="col-span-12">
                      <button
                        type="submit"
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        Add Item
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <Link
                  to="#"
                  className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-current="page"
                  className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600"
                >
                  3
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  4
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  5
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
