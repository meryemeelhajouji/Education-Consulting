import React from "react";

function Sidebar(props) {
  // console.log(props.data)
  return (
    <div className="bg-white sidebar p-2">
      {" "}
      <div className="m-2">
        {" "}
        <span className="brand-name fs-4">{props.name}</span>{" "}
      </div>{" "}
      <hr className="text-dark" />{" "}
      {props.role == "admin" ? 
      

      <div className="list-group list-group-flush">
        {" "}
        <a className="list-group-item py-2">
          {" "}
          <i className="bi bi-speedometer2 fs-5 me-3"></i>{" "}
          <span>Dashboard</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2 ">
          {" "}
          <i className="bi bi-house fs-5 me-3"></i> <span>Enseignement </span>{" "}
        </a>{" "}
        <a className="list-group-item py-2" href="/Etudiant">
          {" "}
          <i className="bi bi-table fs-5 me-3"></i> <span>Etudiant</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2">
          {" "}
          <i className="bi bi-clipboard-data fs-5 me-3"></i>{" "}
          <span>rendez-vous</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2">
          {" "}
          <i className="bi bi-people fs-5 me-3"></i>{" "}
          <span>dossiers candidature</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2">
          {" "}
          <i className="bi bi-power fs-5 me-3"></i> <span>Logout</span>{" "}
        </a>{" "}
      </div> : <div className="list-group list-group-flush">
      <a className="list-group-item py-2">
          {" "}
          <i className="bi bi-speedometer2 fs-5 me-3"></i>{" "}
          <span>Dashboard</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2">
          {" "}
          <i className="bi bi-clipboard-data fs-5 me-3"></i>{" "}
          <span>rendez-vous</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2">
          {" "}
          <i className="bi bi-people fs-5 me-3"></i>{" "}
          <span>dossiers candidature</span>{" "}
        </a>{" "}
        </div>}
     
    </div>
  );
}
export default Sidebar;
