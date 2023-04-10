import React from 'react';
import './App.css';
// import Login from  './composents/auth/login'
import Login from "./composents/authPage/login";
import Home from "./composents/authPage/HomePage";
import Register from "./composents/authPage/Register";
import VerifyEmail from "./composents/VerifyEmail";
import ForgetPassword from "./composents/authPage/ForgetPassword";
import VerifyEmailforgPass from "./composents/VerifyEmailforgPass";
import Dashboard from "./composents/Dashboard";
import Profile from "./composents/Profile";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./composents/Header";
import ProtectRoute from "./Utils/ProtectRoute"


function App() {
  return (
  
  <Router>
  <div className="">
    <Header/>
     
   <Routes>
    {/* public routes */}
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>
   <Route path="/VerifyEmail/:token" element={<VerifyEmail/>}/>
   <Route path="/forgetPassword" element={<ForgetPassword/>}/>
   <Route path="/VerifyEmailforgPass/:token" element={<VerifyEmailforgPass/>}/>

   {/* private routes */}
   <Route  element={<ProtectRoute/>}>
    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/profile" element={<Profile/>} />
   </Route>




   </Routes>

    </div>
  </Router>
 
  );
}

export default App;
