import React from "react";
import {useState}from 'react';
import  axios from 'axios';
import Alert from '../../Utils/Alert'
import Swal from 'sweetalert2'

function ForgetPassword(){
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)


  const onchange = (e) => {
      setUser((prevState) =>({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }

  const onSubmit = (e) => {
      setError(false)
      e.preventDefault()
      axios.post("http://localhost:5000/api/auth/forgetpassword",user)
      .then( (response) => {
        console.log(response)
         Swal.fire({
                title: "Success",
                text: "verification email is send to your email account",
                icon: "success",
                confirmButtonText: "OK",
               });
           
      })
      .catch(function (error) {
        setError(error.response.data)
        console.log(error.response.data);
      });
  } 


     
return(
<div>


<div className="Auth-form-container  ">
<div className="Auth-form">

 <div className="Auth-form-content">
   <h3 className="Auth-form-title">Forget password</h3>
   <Alert error={error} />
       <form onSubmit={onSubmit}>
     
      <div className="form-group mt-3">
          <label>Email</label>
          <input
              type="email"
              className="form-control m-4"
              placeholder="Enter your email"
              name="email"
              id="email"
              onChange={onchange}
           />
      </div>

      <div className="form-group d-grid gap-2 mt-3">
          <button 
              type="submit" 
              className="btn btn-dark">
              Submit
          </button>
      </div>
  
   
   {/* <p className="mb-2 text-sm mx-auto">  
       <Link to="/" className="text-primary text-gradient font-weight-bold">****</Link>
    </p> */}

       </form>
 </div>
</div>
</div>
</div>
)
}

export default ForgetPassword;