import React from "react";
import { Navigate } from "react-router-dom";

function HomePage(){
  const token = localStorage.getItem("token");  
  // if(token)
  // {
  //  return<Navigate to ="/Dashboard" />
  // }
    return(
      <div>
      <div className="Auth-form-container  ">
     <div className="Auth-form">
       <div className="Auth-form-content">
         {/* <img src={logo} alt='jgjhg'className='rounded-circle w-50 h-50 ' /> */}
         <h3 className="Auth-form-title">Hello </h3>
         <p className="text-center">Please sing in </p>
          
       </div>
     </div>
   </div>
     </div>
    )
}

export default HomePage;