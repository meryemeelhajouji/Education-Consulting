import React from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

function VerifyEmail() {

  
    const api = axios.create({
		baseURL: "http://localhost:5000/api/"
	});

    const { token } = useParams();
    console.log(token);

    
    api.get(`auth/verify-email/${token}`)
    .then((response)=>{
        console.log(response.data);
        Swal.fire({
            title: "Success",
            text: "Email Is verified Successfuly",
            icon: "success",
            footer: '<a href="/login">login</a>'
          });
    }).catch((error)=>{
        console.log(error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email Not Verified!'
          });
    })


  return (
    <div>
    </div>
  )
}

export default VerifyEmail