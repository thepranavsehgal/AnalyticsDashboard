import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Exchange(){
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <div className="p-4">
            <ul className="inline-block w-full mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                <li role="presentation" className="inline-block w-[47%]">
                    <button className={activeIndex === 1 ? 'px-4 py-1 text-sm font-semibold rounded-md w-full duration-500 text-white bg-indigo-600':'px-4 py-1 text-sm font-semibold rounded-md w-full duration-500'} onClick={()=>setActiveIndex(1)}>Buy or Sell</button>
                </li>
                <li role="presentation" className="inline-block w-[47%]">
                    <button className={activeIndex === 2 ? 'px-4 py-1 text-sm font-semibold rounded-md w-full duration-500 text-white bg-indigo-600':'px-4 py-1 text-sm font-semibold rounded-md w-full duration-500'} onClick={()=>setActiveIndex(2)}>Calculator</button>
                </li>
            </ul>

            <div id="StarterContent" className="mt-4">
                {activeIndex === 1 ? 
                <div className="">
                    <form action="">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="">
                                <label className="form-label font-semibold hidden">Username:</label>
                                <div className="relative">
                                    <span className="absolute top-0.5 start-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1">Amount</span>

                                    <input type="text" className="form-input ps-[88px] pe-[52px] w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Username" required/>

                                    <span className="absolute top-0.5 end-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1">BTC</span>
                                </div>
                            </div>

                            <div className="">
                                <div className="relative rounded overflow-hidden">
                                    <div className="absolute bg-gray-100 dark:bg-slate-800">
                                        <select className="form-select form-input w-[100px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 outline-none border-0 focus:ring-0">
                                            <option value="USA">USA</option>
                                            <option value="CAD">Canada</option>
                                            <option value="CHINA">China</option>
                                        </select>
                                    </div>

                                    <input type="number" className="form-input ps-28 w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="$ 25,000" required/>

                                    <span className="absolute top-0.5 end-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1">$ Dollar</span>
                                </div>
                            </div>

                            <div className="">
                                <div className="relative">
                                    <span className="absolute top-0.5 start-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1">Total</span>

                                    <input type="number" className="form-input ps-[88px] pe-[52px] w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="" required/>

                                    <span className="absolute top-0.5 end-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1">$ Dollar</span>
                                </div>
                            </div>

                            <div>
                                <Link to="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md me-1">Buy Now</Link>
                                <Link to="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Sell Now</Link>
                            </div>
                        </div>
                    </form>
                </div> :''
                }
                {activeIndex === 2 ?
                    <div className="">
                        <form action="">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="">
                                    <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Enter Amount" required/>
                                </div>

                                <div className="">
                                    <select className="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                        <option value="Bitcoin (BTC)">Bitcoin (BTC)</option>
                                        <option value="LTC"> Litecoin (LTC)</option>
                                        <option value="CNY">Coinye (CNY)</option>
                                        <option value="PTC">Potcoin (PTC)</option>
                                        <option value="XPM">Prime coin (XPM)</option>
                                    </select>
                                </div>

                                <div className="">
                                    <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Enter Amount" required/>
                                </div>

                                <div className="">
                                    <select className="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                        <option value="USD">US Dollar (USD)</option>
                                        <option value="Indian Rupee">Indian Rupee</option>
                                        <option value="CAD">Canadian Dollar (CAD)</option>
                                        <option value="SEK">Swedish Krona (SEK)</option>
                                        <option value="AUD">Australian Dollar (AUD)</option>
                                    </select>
                                </div>
                            </div>
                            <button className="py-2 px-5 w-full mt-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Convert</button>
                        </form>
                    </div>  : ""                                             
                }
            </div>
        </div>
    )
}