import React from "react";
import Card from 'react-bootstrap/Card';

function Profile(){

           
    return(
        <div className="">
          
          <Card className="text-center">
      <Card.Header className="h3 m-5 ">Your Profil</Card.Header>
      <Card.Body className="m-5 ">
        <Card.Title>your name : {localStorage.getItem("user")} </Card.Title>
        <Card.Title>your email : </Card.Title>
        <Card.Title>your role : {localStorage.getItem("role")} </Card.Title>


        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
      </Card.Body>
      
    </Card>
        </div>
    )
}

export default Profile;