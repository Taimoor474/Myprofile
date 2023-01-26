import React from 'react'
import mainimg from "../assest/myimg.jpg";

const Profile = () => {
  return (
    <div className="flex flex-row  p-5 space-x-11 font-poppins " id='profile'>
    <div className="md:p-20  text-blk xs:p-16  ">
      <h2 className=" font-bold text-3xl">I’m Taimoor Hussain </h2>
      <div className="    ">
        <p className="font-bold  text-3xl text-yellow "> Front End</p> 
        <h2 className=" font-bold text-3xl  "> Developer </h2>
      </div>

      <p className="mt-5 sm:text-sm md:text-xl  sm:break-after-all sm:box-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Et,
        volutpat feugiat placerat lobortis. <br /> Natoque rutrum semper sed
        suspendisse nunc lectus.
      </p>

      <button className=" mt-5 hover:scale-105  bg-yellow text-blk border rounded-md hover:opacity-95 px-7 py-3  text-xl font-bold border-none">
        HIRE ME
      </button>
    </div>
    <div className="bg-none hover:scale-105">
     
      <img src={mainimg} alt="" className='object-contain h-80 w-96 ' />
    </div>
  </div>
  )
}

export default Profile