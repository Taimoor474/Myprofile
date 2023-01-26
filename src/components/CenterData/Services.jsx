import React from 'react';
import desktopicon from "../assest/Icons/coding.png";
import illustration from "../assest/Icons/illustration.png";
import microphone from "../assest/Icons/Microphone.png";
import game from "../assest/Icons/game-development.png";
import photographer from "../assest/Icons/Photographer.png";


const Services = () => {
  return (
    <div className="serveices text-center mt-20 space-x-6 py-16  " id='services'>
    <div className="servtxt  space-y-2 ">
      <h1 className="text-blk font-bold md:text-3xl sm:text-xl">My Services</h1>
  
      <p className='text-lightdark sm:text-xs md:text-xl xs:text-sm  ' >
        Amet minim mollit non deserunt ullamco <br /> est sit aliqua dolor 
        do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    
      
    </div>

    <div className="maincard grid   sm:grid-cols-1 sm:place-items-center md:grid-cols-3   space-y-7">
      <div className="max-h-min w-64 text-center px-5 py-5 mt-8  card1 hover:scale-110 bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={desktopicon} alt="" className="ml-16  h-20 w-15" />
        <p className="text-blk mt-4 font-bold text-xl">web development</p>
        <p className="text-lightdark mt-4 ">blog, e-commerce</p>
      </div>

      <div className="max-h-min w-64 text-center px-5 py-5 hover:scale-110  card2  bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={illustration} alt="" className="ml-16  h-20 w-15" />
        <p className="text-blk mt-4 font-bold text-xl">UI/UX Design</p>
        <p className="text-lightdark mt-4 ">Mobile app, website design</p>
      </div>

      <div className="max-h-min w-64 text-center px-5 py-5   card3 hover:scale-110 bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={microphone} alt="" className="ml-16  h-20 w-15" />
        <p className="text-blk mt-4 font-bold text-xl">Sound Design</p>
        <p className="text-lightdark mt-4 ">Voice Over, Beat Making</p>
      </div>

      <div className="max-h-min w-64 text-center px-5 py-5  card4 hover:scale-110  bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={game} alt="" className="ml-16  h-20 w-15" />
        <p className="text-blk mt-4 font-bold text-xl">Game Design</p>
        <p className="text-lightdark mt-4 ">Character Design, Props & Objects</p>
      </div>

      <div className="max-h-min w-64 text-center px-5 py-5  card5 hover:scale-110  bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={photographer} alt="" className="ml-16  h-20 w-15" />
        <p className="text-blk mt-4 font-bold text-xl">Photography</p>
        <p className="text-lightdark mt-4 ">portrait, product photography</p>
      </div>

      <div className="max-h-min w-64 text-center px-5 py-5  card6 hover:scale-110 bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      
        <p className="text-blk mt-4 font-bold text-xl">Advertising</p>
        <p className="text-lightdark mt-4 break-all box  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
      </div>
    </div>
  </div>
  )
}

export default Services