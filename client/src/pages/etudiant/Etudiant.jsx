import React from "react";
import axios from "axios";
import { useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../../composents/Sidebar";
// import Etudiant from "../pages/etudiant";

function Etudiant() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [Etudiant, setEtudiant] = useState([]);
  const [user, setuser] = useState("");
  const role = localStorage.getItem("role");
  axios.get(`http://localhost:5000/api/user/${role}/me`).then((resp) => {
    setuser(resp.data);
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/etudiant`)
      .then((response) => {
        setEtudiant(response.data.etudiant);
        console.log(Etudiant)

      })
      .catch((error) => {
        // setError(true);
        console.log("error")
      });
  }, []);
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
                  + New Etudiant{" "}
                </button>
              </div>
            </nav>
            <div class="card-body">
              <table class="table table-hover bg-white">
                <thead>
                  <tr className="table-secondary">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">phone</th>
                    <th scope="col">status</th>
                    <th scope="col">Action</th>


                  </tr>
                </thead>
                {Etudiant.map((app) => (
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td></td>
                    <td>{app.status}</td>
                    <td>voir</td>
                  </tr>
               
                
                </tbody>
                 ))} 
              </table>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Etudiant;
