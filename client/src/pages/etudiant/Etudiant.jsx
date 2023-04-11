import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../../composents/Sidebar";
// import Etudiant from "../pages/etudiant";


function Etudiant() {

  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [user, setuser] = useState("");
  const role = localStorage.getItem("role");
  axios.get(`http://localhost:5000/api/user/${role}/me`).then((resp) => {
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
        <div className="col">
          {" "}
          {/* <Etudiant Toggle={Toggle} />{" "} */}

          <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

          
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Etudiant;
