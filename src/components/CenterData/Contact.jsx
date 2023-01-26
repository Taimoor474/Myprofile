import React from "react";

const Contact = () => {
  return (
    <div className="main_contact mt-20 md:text-xl sm:text-sm  md:flex sm:flex-none  justify-between">
      <div className="md:w-1/2 md:max-h-min  sm:w-full sm:max-h-min ">
        <h3 className="font-bold text-3xl ml-5 text-blk mb-4 ">
          Leave us your info
        </h3>
        <div className="info_main bg-divbg max-h-min w-full p-5  space-y-5  ">
          <div>
            <label htmlFor="" className="text-lightdark  font-bold">
              Your Full Name ( Required)
            </label>
            <br />
            <input
              type="text"
              className=" border-2 border-lighter bg-lighter h-12 w-full"
            />
          </div>

          <div>
            <label htmlFor="" className="text-lightdark  font-bold">
              Your Email ( Required)
            </label>
            <br />
            <input
              type="text"
              className=" border-2 border-lighter bg-lighter h-12 w-full"
            />
          </div>

          <div>
            <label htmlFor="" className="text-lightdark  font-bold">
              Subject
            </label>
            <br />
            <input
              type="text"
              className=" border-2 border-lighter bg-lighter h-12 w-full"
            />
          </div>

          <div>
            <label htmlFor="" className="text-lightdark  font-bold">
              Message
            </label>
            <br />
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full h-60  text-sm text-gray-900
         bg-lighter rounded-lg border border-lighter focus:ring-blue-500 
"
              placeholder="Write your thoughts here..."
            ></textarea>

            <button id="contact" className=" bg-yellow text-white font-semibold hover:scale-105 text-base mt-3 px-4 p-2 rounded-sm">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="contact_main space-y-6 ml-14  ">
        <h5 className=" text-blk font-bold text-3xl">Contact information</h5>
        
    <div className="md:max-h-min md:w-80  text-center sm:w-60 sm:max-h-min sm:text-xs  px-5  py-3 mt-8 hover:scale-105 card1 
  bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800
   dark:border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-20  icon icon-tabler icon-tabler-device-mobile"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffec00"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="7" y="4" width="10" height="16" rx="1" />
            <line x1="11" y1="5" x2="13" y2="5" />
            <line x1="12" y1="17" x2="12" y2="17.01" />
          </svg>
          <div className="innertext sm:text-sm md:text-xl    ">
            <div className="flex justify-between text-divbg space-x-10">
              <p className="text-blk mt-4 font-bold ">Country:</p>
              <p className="text-lightdark mt-4 ">Pakistan</p>
            </div>

            <div className="flex justify-between text-divbg space-x-10">
              <p className="text-blk mt-4 font-bold ">City:</p>
              <p className="text-lightdark mt-4 ">Islamabad</p>
            </div>
            <div className="flex justify-between text-divbg space-x-10">
              <p className="text-blk mt-4 font-bold">Street:</p>
              <p className="text-lightdark mt-4 ">block b</p>
            </div>
          </div>
        </div>
        <div
          className="md:max-h-min md:w-80 text-center px-5 sm:w-60 sm:max-h-min sm:text-xs  py-5 3t-8 text-lighter hover:scale-105  card1 
  bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800
   dark:border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-20 icon icon-tabler icon-tabler-mail"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffec00"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <div className="innertext text-divbg md:text-xl sm:text-sm">
            <div className="flex justify-between space-x-10">
              <p className="text-blk mt-4 font-bold ">Email:</p>
              <p className="text-lightdark mt-4 ">youremail@gmail.com</p>
            </div>

            <div className="flex justify-between space-x-10 ">
              <p className="text-blk mt-4 font-bold ">Skype:</p>
              <p className="text-lightdark mt-4 ">@yourusername</p>
            </div>
            <div className="flex justify-between space-x-10">
              <p className="text-blk mt-4 font-bold ">Telegram:</p>
              <p className="text-lightdark mt-4 ">@yourusername</p>
            </div>
          </div>
        </div>
        <div
          className="md:max-h-min text-lighter md:w-80 text-center px-5 sm:w-60 sm:max-h-min sm:text-xs   py-3 mt-8 hover:scale-105 card1 
  bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800
   dark:border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-20  icon icon-tabler icon-tabler-device-mobile"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffec00"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="7" y="4" width="10" height="16" rx="1" />
            <line x1="11" y1="5" x2="13" y2="5" />
            <line x1="12" y1="17" x2="12" y2="17.01" />
          </svg>
          <div className="innertext md:text-xl sm:text-sm   ">
            <div className="flex justify-between text-divbg space-x-10">
              <p className="text-blk mt-4 font-bold ">
                Support services:
              </p>
              <p className="text-lightdark mt-4 ">15369</p>
            </div>

            <div className="flex justify-between text-divbg space-x-10">
              <p className="text-blk mt-4 font-bold ">Office:</p>
              <p className="text-lightdark mt-4 "> +5356 587 235</p>
            </div>
            <div className="flex space-x-10 justify-between text-divbg">
              <p className="text-blk mt-4 font-bold ">Personal:</p>
              <p className="text-lightdark mt-4 ">(021)356 587 235</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
