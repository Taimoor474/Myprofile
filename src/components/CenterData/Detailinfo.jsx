import React from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import Education from "./Education";
import Priceplan from "./Priceplan";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Recommandation from "./Recommandation";
import Services from "./Services";
import Work from "./Work";


const Detailinfo = () => {
  return (
    <div className="second flex-1 space-x-10  border-none rounded-sm   min-h-max w-80">

     
       <Profile />
            {/* Profile ............. */}
    


{/* services............ */}

 <Services />


{/* PRICE PLAIN ........... */}

  <Priceplan/>
{/* 
RECOMMONADATION............ */}


<Recommandation />

    {/* EDUCATION........... */}
    
   <Education />

    {/* work........... */}
  
     <Work />

     {/* preject........... */}
    
   <Portfolio/>

        {/* blog........... */}
      
       <Blog/>

        
        {/* blog........... */}
       

      <Contact />
     
  
    </div>
  );
};

export default Detailinfo;
