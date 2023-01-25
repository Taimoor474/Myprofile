import React from 'react';
import img1 from "../assest/img1.png";
import img2 from "../assest/img2.png";
import img3 from "../assest/img3.png";
import img4 from "../assest/img4.png";
import img5 from "../assest/img5.png";
import img6 from "../assest/img6.png";
import img7 from "../assest/img7.png";
import img8 from "../assest/img8.png";
import img9 from "../assest/img9.png";
const Portfolio = () => {
  return (
    <div className='mainproj' id='portfolio'>
  <div className='text text-center'>
     <h2 className='font-bold text-blk md:text-3xl sm:text-xl'> Portfolio</h2>
     <p className='text-lightdark sm:text-xs md:text-xl '>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet sint. 
         officia consequat duis enim velit mollit. <br /> lorem ipsum</p>
        </div>

        <div className=' space-y-6 images grid grid-cols-3'>
            <img className='hover:scale-105 mt-6' src={img1} alt=""  />
            <img className='hover:scale-105' src={img2} alt="" />
            <img className='hover:scale-105' src={img3} alt="" />
            <img className='hover:scale-105' src={img4} alt="" />
            <img className='hover:scale-105' src={img5} alt="" />
            <img className='hover:scale-105' src={img6} alt="" />
            <img className='hover:scale-105' src={img7} alt="" />
            <img className='hover:scale-105' src={img8} alt="" />
            <img className='hover:scale-105' src={img9} alt="" />
            
        </div>

    </div>
  )
}

export default Portfolio