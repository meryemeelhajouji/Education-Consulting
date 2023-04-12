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
    <div className="container-fluid bg-light min-vh-100 ">
      {" "}
      <div className="row ">
        {" "}
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            {" "}
            <Sidebar key={user.id} name={user.name} role={user.role} />{" "}
          </div>
        )}{" "}
        {toggle && <div className="col-4 col-md-2"></div>}{" "}
        <div className="col">
          {" "}
          {/* <Etudiant Toggle={Toggle} />{" "} */}
          <div className="h-25"></div>
          <nav class="navbar navbar-light bg-light mb-3">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 display-1">Etudiant</span>
            </div>
          </nav>
          <div class="card">
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
                <button
                  class="btn btn-outline-success btn-primary text-white"
                  type="submit"
                >
                  {" "}
                  + add{" "}
                </button>
              </div>
            </nav>
            <div class="card-body">
              <table class="table table-hover bg-white">
                <thead>
                  <tr className="table-secondary">
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
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Etudiant;
