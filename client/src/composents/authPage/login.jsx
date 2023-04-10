import React from "react";
import {useState}from 'react';
import  axios from 'axios';
import {Link, useNavigate,Navigate } from "react-router-dom";
import Alert from '../../Utils/Alert'

function Login(){
const token = localStorage.getItem("token");

   
  const navigate = useNavigate()
  const [user, setUser] = useState({
  })
  
  const [error, setError] = useState(false)

//   if(token)
//   {
//    return<Navigate to ="/Dashboard" />
//   }
  const onchange = (e) => {
      setUser((prevState) =>({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }

  const onSubmit = (e) => {
      // console.log(user);
      setError(false)
      e.preventDefault()
      axios.post("http://localhost:5000/api/auth/login",user)
      .then( (response) => {
       
        localStorage.setItem("token", response.data.token) 
        localStorage.setItem("role", response.data.role) 
        localStorage.setItem("user", response.data.name) 


  
        // console.log(response.data.name)
        navigate("/Dashboard")
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
   {/* <img src={logo} alt='jgjhg'className='rounded-circle w-50 h-50 ' /> */}
   <h3 className="Auth-form-title">Login</h3>
   {/* <p className="text-center">Please create your account </p> */}
   <Alert error={error} />
       <form onSubmit={onSubmit}>
     
      <div className="form-group mt-3">
          <label>Email</label>
          <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter your email"
              name="email"
              id="email"
              // value={email}
              onChange={onchange}
           />
      </div>
      <div className="form-group mt-3">
          <label>Password</label>
          <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter your password"
              name="password"
              id="password"
              // value={password}
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
  
   
   <p className="mb-2 text-sm mx-auto">  
       <Link to="/forgetPassword" className="text-primary text-gradient font-weight-bold">Forget password?</Link>
    </p>
   <p className="mb-2 text-sm mx-auto">dont have an account?
       <Link to="/register" className="text-primary text-gradient font-weight-bold">Register</Link>
    </p>
       </form>
 </div>
</div>
</div>
</div>
)
}

export default Login;