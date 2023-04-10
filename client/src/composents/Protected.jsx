import React from "react";
import { Navigate } from "react-router-dom";
import  axios from 'axios';
// import {useState}from 'react';

function Protected(){
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
// const [msg, setMsg] = useState(false)

axios.get(`http://localhost:5000/api/user/${role}/me`)
.then(function (response) {
    // setMsg(false)
    // setMsg(response)
console.log(response)
})
.catch(function (error) {
    console.log(error)
})
         
    return(
        <div className="">
  {/* {msg} */}
          {/* <center><h1>Welcom to Dashboard {role} </h1></center>   */}
        </div>
    )
}

export default Protected;