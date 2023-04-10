import React from "react";
import  axios from 'axios';
import {useState}from 'react';

function Dashboard(){
  
  const [user, setuser] = useState("");
  const role = localStorage.getItem("role");
  axios.get(`http://localhost:5000/api/user/${role}/me`)
  .then((resp) => {
    setuser(resp.data);
  });
           
    return(
        <div className="">
          <center><h1>Welcom to Dashboard</h1></center>  
          <center><h1>{user} </h1></center>  

        </div>
    )
}

export default Dashboard;