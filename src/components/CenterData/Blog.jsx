import React from 'react';
import b1 from '../assest/b3.jpg'
import b2 from "../assest/b2.jpg";
import b3 from "../assest/b1.jpg";

const Blog = () => {
  return (
    <div className='mainblogss mt-10 md:text-xl sm:text-sm '  id='blog'>
     <div className='text text-center'>
     <h2 className='font-bold text-blk md:text-3xl sm:text-xl '> BLOG</h2>
     <p className='text-lightdark  sm:text-xs md:text-xl'>Amet minim mollit non deserunt ullamco est sit
      aliqua dolor <br/> do amet sint. 
     Velit officia consequat duis enim velit mollit. <br/> lorem ipsum</p>
        </div>
          <div className='images grid md:grid-cols-3 sm:grid-cols-1 place-items-center mt-5 space-y-5 '>
             <div className='bg-divbg w-72  card3 hover:scale-105 max-h-min '>
                <img src={b1} alt=""  />
                <div className='imgtext p-4 space-y-3 '>
                <h3 className=' text-blk font-bold'>How to make web </h3>
                <p  className='text-lightdark break-all'>lorem ipsum dolor sit amet, consectetur adipiscing elit
                    . Vitae  nulla diam in ac dictum a urna </p>
                    <a href="#hhh" className='mt-4  text-yellow'> Learn more</a>

                </div>

             </div>


             <div className='bg-divbg w-72 max-h-min space-x-3 card2 hover:scale-105'>
                <img src={b2} alt="" />
                <div className='imgtext p-4 space-y-2'>
                <h3 className=' text-blk font-bold'>Make Business card</h3>
                <p  className='text-lightdark break-all'>lorem ipsum dolor sit amet, consectetur adipiscing elit
                    . Vitae  nulla diam in ac dictum a urna </p>
                    <a href="#hhh" className='mt-4  text-yellow'> Learn more</a>

                </div>

             </div>


             <div className='bg-divbg w-72 max-h-min md:text-xl sm:text-sm hover:scale-105  card3'>
                <img src={b3} alt="" />
                <div className='imgtext p-4 space-y-3'>
                <h3 className=' text-blk font-bold'>How to make Flyer Design</h3>
                <p  className='text-lightdark break-all'>lorem ipsum dolor sit amet, consectetur adipiscing elit
                    . Vitae  nulla diam in ac dictum a urna </p>
                    <a href="#hhh" className='mt-4  text-yellow'> Learn more</a>

                </div>

             </div>

          </div>


    </div>
  )
}

export default Blog