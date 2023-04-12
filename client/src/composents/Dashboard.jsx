import React, { useReducer } from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";

function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [user, setuser] = useState("");
  const role = localStorage.getItem("role");
  // console.log(role);
  axios.get(`http://localhost:5000/api/user/${role}/me`).then((resp) => {
    console.log(user)
    setuser(resp.data);
  });

  return (
    <div className="container-fluid bg-secondary min-vh-100 ">
      {" "}
      <div className="row ">
        {" "}
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            {" "}
            <Sidebar data={user} />{" "}
            
          </div>
        )}{" "}
        {toggle && <div className="col-4 col-md-2"></div>}{" "}
        <div className="col"> {/* <Home Toggle={Toggle} />{" "} */}</div>{" "}
      </div>{" "}
    </div>
  );
}

export default Dashboard;
