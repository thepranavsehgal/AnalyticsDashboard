import React, { useEffect ,useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo-icon-64.png";
import contactImg from "../../assets/images/contact.svg";

import Switcher from "../../components/switcher";
import BackButton from "../../components/backButton";
import axios from "axios"
import { toast } from "react-toastify";


export default function AuthResetPassword() {
  const navigate= useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const otpChange = (e) => {
    setOtp(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
const resetPassword= async()=>{
   try {
    const response= await axios.patch('https://brandscape-backend.onrender.com/user/resetPassword',{
      otp,email,password
    })
    // setOtp("");
    // setEmail("");
    // setPassword("");
    if (response.status === 200) {
      toast.success(response.data.message);
      navigate("/login");
    }
   } catch (error) {
    console.log(error)
    toast.error(error.response.data.error)
   }
}
  const HandlResetpassword = async (e) => {
    e.preventDefault();
    resetPassword()
  };
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/[0.02]"></div>
        <div className="container-fluid relative">
          <div className="md:flex items-center">
            <div className="xl:w-[30%] lg:w-1/3 md:w-1/2">
              <div className="relative md:flex flex-col md:min-h-screen justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 md:px-10 py-10 px-4 z-1">
                <div className="text-center">
                  <Link to="/">
                    <img src={logoImg} className="mx-auto" alt="" />
                  </Link>
                </div>
                <div className="title-heading text-center md:my-auto my-20">
                  <form className="text-start" onSubmit={HandlResetpassword}>
                    <div className="grid grid-cols-1">
                      <div className="mb-4">
                        <label className="font-semibold" htmlFor="OTP">
                          OTP:
                        </label>
                        <input
                          id="OTP"
                          type="password"
                          className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="OTP:"
                          onChange={otpChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="font-semibold" htmlFor="LoginEmail">
                          Email Address:
                        </label>
                        <input
                          id="LoginEmail"
                          type="email"
                          className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="name@example.com"
                          onChange={emailChange}
                        />
                      </div>

                      <div className="mb-4">
                        <label className="font-semibold" htmlFor="NewPassword">
                          New Password:
                        </label>
                        <input
                          id="NewPassword"
                          type="password"
                          className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Password:"
                          onChange={passwordChange}
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="submit"
                          className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                          value="Send"
                        />
                      </div>

                      <div className="text-center">
                        <span className="text-slate-400 me-2">
                          Remember your password ?{" "}
                        </span>
                        <Link
                          to="/login"
                          className="text-black dark:text-white font-bold inline-block"
                        >
                          Sign in
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <div className="text-center">
                  <p className="mb-0 text-slate-400">
                    © {new Date().getFullYear()} Design & Develop with
                    {"❤️ "}
                    <i className="mdi mdi-heart text-red-600"></i> by BrandScape
                    .
                  </p>
                </div> */}
              </div>
            </div>

            <div className="xl:w-[70%] lg:w-2/3 md:w-1/2 flex justify-center mx-6 md:my-auto my-20">
              <div>
                <div className="relative">
                  <div className="absolute top-20 start-20 bg-indigo-600/[0.02] h-[1200px] w-[1200px] rounded-full"></div>
                  <div className="absolute bottom-20 -end-20 bg-indigo-600/[0.02] h-[600px] w-[600px] rounded-full"></div>
                </div>

                <div className="text-center">
                  <div>
                    <img src={contactImg} className="max-w-xl mx-auto" alt="" />
                    <div className="relative max-w-xl mx-auto text-start">
                      <div className="relative p-8 border-2 border-indigo-600 rounded-[30px] before:content-[''] before:absolute before:w-28 before:border-[6px] before:border-white dark:before:border-slate-900 before:-bottom-1 before:start-16 before:z-2 after:content-[''] after:absolute after:border-2 after:border-indigo-600 after:rounded-none after:rounded-e-[50px] after:w-20 after:h-20 after:-bottom-[80px] after:start-[60px] after:z-3 after:border-s-0 after:border-b-0">
                        <span className="font-semibold leading-normal">
                          Launch your campaign and benefit from our expertise on
                          designing and managing conversion centered latest
                          Tailwind CSS html page.
                        </span>

                        <div className="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                          <i className="mdi mdi-format-quote-open"></i>
                        </div>
                      </div>

                      <div className="text-lg font-semibold mt-6 ms-44">
                        - Brandscape
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Switcher />
      <BackButton />
    </>
  );
}
