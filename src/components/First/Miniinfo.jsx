import React from "react";
import tw from "../assest/Twitter.jpg";
import yt from "../assest/Youtube.jpg";
import it from "../assest/Instagram.jpg";
import lin from "../assest/Linkeding.jpg";
import icon from "../assest/Icons.jpg";
import icon2 from "../assest/Vector.png";
import mainimg from "../assest/myimg.jpg";
const Miniinfo = () => {
  return (
    <div className="first  space-y-5 p-8 divide-y divide-backroundcol  content-center  bg-divbg shadow-lg border rounded-sm  text-center border-white min-h-fit w-80">
      <div className="first">
        <img
          className="rounded-full border-gray-100 shadow-sm h-20 w-20 ml-16 "
          src={mainimg}
          alt=""
        />

        <p className="text-txtcol  font-bold md:text-xl  texto-blk ">
          Taimoor Hussain
        </p>
        <p className="text-txtcol2 font-bold  md:text-xl   text-lightdark ">
          Front-end Developer
        </p>

        <div className="flex justify-evenly shrink ">
          <img className="hover:scale-105" src={tw} alt="" />
          <img className="hover:scale-105" src={yt} alt="" />
          <img className="hover:scale-105" src={it} alt="" />
          <img className="hover:scale-105" src={lin} alt="" />
        </div>
      </div>

      <div className=" second flex space-x-6 text-justify  indent-14  py-7  ">
        <div className="space-y-4">
          <h2 className="bg-yellow  rounded-sm">Age</h2>
          <h1 className="bg-yellow  rounded-sm">Residence</h1>
          <h1 className="bg-yellow  rounded-sm">Freelancer</h1>
          <h1 className="bg-yellow  rounded-sm">Address</h1>
        </div>
        <div className="space-y-4">
          <h1>24</h1>
          <h1>BD</h1>
          <h1>Available</h1>
          <h1>islamabad</h1>
        </div>
      </div>

      <div className=" third langauge1 space-y-5 ">
        <h1 className="text-xl text-blk font-bold">Languages</h1>

        <div className="flex justify-between mb-1">
          <span className="md:text-base font-medium text-blue-700 dark:text-white">
            Urdu
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            100%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-full h-2.5 rounded-full "></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="md:text-base font-medium text-blue-700 dark:text-white">
            English
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            100%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-full h-2.5 rounded-full "></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="md:text-base font-medium text-blue-700 dark:text-white">
            Spanish
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            30%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-1/3 h-2.5 rounded-full "></div>
        </div>
      </div>

      <div className=" fourth  Skills   space-y-5 mt-4">
        <h1 className="text-xl text-blk font-bold">Skills</h1>

        <div className="flex justify-between mb-1">
          <span className="md:text-base font-medium text-blue-700 dark:text-white">
            Html
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            100%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-full h-2.5 rounded-full "></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="md:text-base font-medium text-blue-700 dark:text-white">
            CSS
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            100%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-full h-2.5 rounded-full "></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Javascript
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            100%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-full h-2.5 rounded-full "></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            React
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            100%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-full h-2.5 rounded-full "></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Nodejs
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            70%
          </span>
        </div>
        <div className="w-full bg-lighter rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow w-40 h-2.5 rounded-full "></div>
        </div>
      </div>

      <div className="fifith p-2 md:text-xl sm:text-lg ">
        <p className=" font-bold text-blk ">Extra Skills</p>
        <div className=" list mt-5 space-y-4 ">
          <div className="flex space-x-3">
            <img src={icon} className=" md:h-6 sm:h-4 " alt="" />
            <label htmlFor="" className="text-lightdark  font-semibold">
            
              Tailwindcss
            </label>
          </div>
          <div className="flex space-x-3">
            <img src={icon} className= "md:h-6 sm:h-4 " alt="" />
            <label htmlFor="" className="text-lightdark  font-semibold">
           
              Nodejs
            </label>
          </div>
          <div className="flex space-x-3">
            <img src={icon} className="w- md:h-6 sm:h-4 " alt="" />
            <label htmlFor="" className="text-lightdark  font-semibold">
              
              Mongo
            </label>
          </div>
          <div className="flex space-x-3">
            <img src={icon} className=" md:h-6 sm:h-4 " alt="" />{" "}
            <label htmlFor="" className="text-lightdark  font-semibold">
              {" "}
              Expressjs
            </label>
          </div>
        </div>
      </div>

      <div className="sixth p-2 flex  justify-center rounded-md hover:scale-105 bg-yellow md:text-lg text-lightdark font-semibold">
        <button className="flex">
          DOWNLOAD CV <img className="ml-2 mt-2" src={icon2} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Miniinfo;
