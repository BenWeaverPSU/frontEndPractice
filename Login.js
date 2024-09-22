import React, { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  
  const [verifyCreds, setVerifyCreds] = useState({
    email:"",
    password:"",
    checks:0
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVerifyCreds((credData) => ({
      ...credData,
      [name]: value,
    }));
  };

  const Redirect = () => {
    if (verifyCreds.email !== "sample@email.com"){
      alert("Invalid Login Credentials")
      verifyCreds.email=""
    }
    else{
      verifyCreds.checks += 1
    }
    if (verifyCreds.password !== 'password123!'){
      alert("Invalid Login Credentials")
      verifyCreds.password=""
    }
    else{
      verifyCreds.checks += 1
    }
    if (verifyCreds.checks === 2){
      navigate('./Dashboard')
    }
  
  }

    
  return (
    <div className='App-header'>
      <div>
        Camping Co.
      </div>
      <div>
        <input placeholder='Enter email...' name='email' value={verifyCreds.email} onChange={handleInputChange}></input>
      </div>
      <div>
        <input placeholder='Enter password...' name='password' value={verifyCreds.password} onChange={handleInputChange}></input>
      </div>
      <div className='App'>
        <button onClick={() => Redirect()}>login</button>
      </div>
    </div>
  );
}

export default Login;
