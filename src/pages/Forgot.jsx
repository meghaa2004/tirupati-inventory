import React, { useState } from 'react'

const Forgot = () => {
  let [x,setData] = useState({email :"" ,pass :"",rpass:""})
  
  let input=(e)=>{
    setData({...x,[e.target.name]:e.target.value})
  }
  let verify=()=>{
    if (x.pass == x.rpass){
        alert (" Password Changed ")
        nav("/login")
    }
    else{
        alert("the passwords do not match ")
    } 
}
  return (
    <>
    <fieldset className='loginForm'>
   
    <h4>ENTER YOUR EMAIL / PHONE NO.</h4>
    <input onChange={input} type="email" name="email" />
    <h4> ENTER PASSWORD</h4>
    <input onChange={input} type="password" name="pass" />
    <h4>RE-ENTER PASSWORD</h4>
    <input onChange={input} type="password" name="rpass" /> <br /> <br />
    <button onClick={verify}> NEXT </button>

    </fieldset>
    </>
  )
}

export default Forgot




