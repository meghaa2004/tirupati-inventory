import React, { useState } from 'react'
import Nav2 from './Nav2'

const Customer = () => {
  let [x,data]= useState({ccode:"",cname:"",cphn:"",address:""})
  let [y,displayData]= useState({ccode:"",cname:"",cphn:"",address:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Customer details added")
    displayData({ccode:x.ccode,cname:x.cname,cphn:x.cphn,address:x.address})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='loginForm'>
    <h1>Customers </h1>
     Customer code : <input type="number" onChange={getData} name="ccode" /> <br />
     Customer Name : <input type="text" onChange={getData} name="cname" /><br />
     Customer Phone : <input type="number" onChange={getData} name="cphn" /><br />
     Customer Address : <input type="text" onChange={getData} name="address" /><br />
     

     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New Customer</h4>
     Customer code : {y.ccode} <br />
     Customer Name : {y.cname} <br />
     Customer Phone :{y.cphn} <br />
     Customer Address : {y.address} <br />
     
     
    </fieldset>
    </>
  )
}

export default Customer