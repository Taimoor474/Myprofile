import React from "react";
import rating from "../assest/Rating.jpg";
import p1 from "../assest/p1.jpg";
import p2 from "../assest/p2.jpg";
import p3 from "../assest/p3.jpg";

const Recommandation = () => {
  return (
    <div className="Mainrec py-16">
      <div className="text text-center">
        <h2 className="text-blk font-bold md:text-3xl sm:text-xl">Recommandation</h2>
        <p className="text-lightdark sm:text-xs md:text-xl  ml-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor <br />
          do amet sint. Velit officia consequat duis enim velit mollit.
          <br /> lorem ipsum
        </p>
      </div>

      <div className="maincard grid md:grid-cols-3 sm:grid-cols-1 sm:place-items-center ml-2">

        <div className=" max-h-min w-80   py-5 mt-8 card1 hover:scale-105 space-y-6   bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="ml-8">
          <img src={rating} alt="" className="  h-5 w-15" />
          <h2 className="text-blk mt-4 font-bold text-xl">Great Quality!</h2>
          <p className="text-lightdark mt-4 ">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Vitae <br /> nulla diam in ac dictum a urna <br /> viverra morbi .
            Morbi donec amet....
          </p>

          <div className=" mt-4  flex space-x-4">
            <img src={p1} alt="" />
             <div className="mt-3">
              <h1 className="text-blk text-xl font-semibold">James Gouse</h1>
              <p className="text-lightdark">Graphic Designer</p>
             </div>
          </div>
          </div>
         
        </div>

        <div className=" max-h-min w-80   py-5 mt-8 card2 hover:scale-105 space-y-6   bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="ml-8">
          <img src={rating} alt="" className="  h-5 w-15" />
          <h2 className="text-blk mt-4 font-bold text-xl">Great Quality!</h2>
          <p className="text-lightdark mt-4 ">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Vitae <br /> nulla diam in ac dictum a urna <br /> viverra morbi .
            Morbi donec amet....
          </p>

          <div className=" mt-4   flex space-x-4">
            <img src={p2} alt="" />
             <div className="mt-3">
              <h1 className="text-blk text-xl font-semibold">James Gouse</h1>
              <p className="text-lightdark">Graphic Designer</p>
             </div>
          </div>
          </div>
        </div>

        <div className=" max-h-min w-80   py-5 mt-8 card3 hover:scale-105 space-y-6   bg-white border border-none border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="ml-8">
          <img src={rating} alt="" className="  h-5 w-15" />
          <h2 className="text-blk mt-4 font-bold text-xl">Great Quality!</h2>
          <p className="text-lightdark mt-4 ">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Vitae <br /> nulla diam in ac dictum a urna <br /> viverra morbi .
            Morbi donec amet....
          </p>

          <div className=" mt-3  flex space-x-4">
            <img src={p3} alt="" />
             <div className="mt-3">
              <h1 className="text-blk text-xl font-semibold">James Gouse</h1>
              <p className="text-lightdark">Graphic Designer</p>
             </div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Recommandation;
