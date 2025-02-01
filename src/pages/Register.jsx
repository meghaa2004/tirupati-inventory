import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let [x,data]=useState({fname:"",lname:"",age:"",phn:"",email:"",pass:"",rpass:"",})
    let nav = useNavigate()
    let getData=(e)=>{
        data({...x,[e.target.name]:e.target.value})
    }
    
    let submit=()=>{
        if (x.pass == x.rpass){
            alert ("Registered successfully ")
            nav("/login")
        }
        else{
            alert("the password does not match ")
        } 
    }

    let login_page =()=>{
        nav("/login")
    }

  return (
    <>
    <fieldset className='loginForm'>
    <h1>CREATE A NEW ACCOUNT </h1>
    <input type="text" onChange={getData} placeholder='First name' name='fname'/> <br />

    <input type="text" onChange={getData} placeholder='Last name' name='lname'/> <br />
    
    <input type="number" onChange={getData} placeholder='Age' name='age'/> <br />
    
    <input type="number" onChange={getData} placeholder='Phone no.' name='phn'/><br /> <br />
    
    <input type="email" onChange={getData} placeholder='Email' name='email'/><br />
    
    <input type="password" onChange={getData} placeholder='Password' name='pass'/>
    
    <input type="password" onChange={getData} placeholder=' Re-enter Password' name='rpass'/> <br /><br />
    
    <button onClick={submit}> SUBMIT </button>
    
    <button onClick={login_page}> Login </button>
    </fieldset>
    </>
    
  )
}

export default Register