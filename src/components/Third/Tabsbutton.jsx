import React from 'react';
import { Link } from "react-scroll";
  const Tabsbutton=()=>{
  return (
<div className="third border border-none rounded-sm bg-divbg ml-4 w-20  p-5  ">
  <div className='space-y-5'>
  <Link activeClass="active" className=' block hover:bg-yellow bg-lighter rounded-full p-2'to="profile" spy={true} smooth={true} offset={50} duration={500} >
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="5 12 3 12 12 3 21 12 19 12" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <rect x="10" y="12" width="4" height="4" />
</svg>
</Link>  

 
<Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500}  className='block hover:bg-yellow bg-lighter rounded-full p-2'>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 8 3 12 7 16" />
  <polyline points="17 8 21 12 17 16" />
  <line x1="14" y1="4" x2="10" y2="20" />
</svg>
   </Link>
   <Link activeClass="active" to="education" spy={true} smooth={true} offset={50} duration={500} className='block hover:bg-yellow bg-lighter rounded-full p-2'>
    
   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
</svg>
   </Link>
   <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500}  className='block hover:bg-yellow bg-lighter rounded-full p-2'>
   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="7" width="18" height="13" rx="2" />
  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <path d="M3 13a20 20 0 0 0 18 0" />
</svg>
   </Link>
   <Link activeClass="active" to="blog" spy={true} smooth={true} offset={50} duration={500} className='block hover:bg-yellow bg-lighter rounded-full p-2'>
   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-blogger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 21h8a5 5 0 0 0 5 -5v-3a3 3 0 0 0 -3 -3h-1v-2a5 5 0 0 0 -5 -5h-4a5 5 0 0 0 -5 5v8a5 5 0 0 0 5 5zm-1 -14m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h3a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 -1.5 -1.5zm0 5.5m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z"></path>
</svg>
   

   </Link>
   <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className='block hover:bg-yellow bg-lighter rounded-full p-2'>
   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2zm-10 10h6m-3 -5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m-7 -3h3m-3 4h3m-3 4h3"></path>
</svg>

   </Link>
  
    
    </div>   

  </div>
  )
  }

export default Tabsbutton;