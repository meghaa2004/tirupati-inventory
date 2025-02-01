import React, { useState } from 'react'
import Nav2 from './Nav2'

const Sale = () => {
  
    let [x,data]= useState({srno:"",odrno:"",qty:"",rate:""})
  let [y,displayData]= useState({srno:"",odrno:"",qty:"",rate:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Sale record added")
    displayData({srno:x.srno,odrno:x.odrno,qty:x.qty,rate:x.rate})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='loginForm'>
    <h1>Sale</h1>
     Sr no. : <input type="number" onChange={getData} name="srno" /> <br />
     Order no. : <input type="text" onChange={getData} name="odrno" /><br />
     Quantity : <input type="number" onChange={getData} name="qty" /><br />
     Rate : <input type="number" onChange={getData} name="rate" /><br />
     

     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New sale </h4>
     Sr no. : {y.srno} <br />
     Order no.  : {y.odrno} <br />
     Quantity :{y.qty} <br />
     Rate : {y.rate} <br />
     
     
    </fieldset>
    </>
  )
}

export default Sale