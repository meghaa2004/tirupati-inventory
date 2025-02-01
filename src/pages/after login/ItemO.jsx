import React, { useState } from 'react'
import Nav2 from './Nav2'

const ItemO = () => {
  let [x,data]= useState({ordno:"",ocode:"",icode:"",qty:"",date:""})
  let [y,displayData]= useState({ordno:"",ocode:"",icode:"",qty:"",date:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Item Order added")
    displayData({ordno:x.ordno,ocode:x.ocode,icode:x.icode,qty:x.qty,date:x.date})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='loginForm'>
    <h1>Item Order</h1>
     Order no. : <input type="number" onChange={getData} name="ordno" /> <br />
     Order Code: <input type="text" onChange={getData} name="ocode" /><br />
     Item Code: <input type="number" onChange={getData} name="icode" /><br />
     Quantity : <input type="number" onChange={getData} name="qty" /><br />
     Date : <input type="date" onChange={getData} name="date" /> <br /><br />

     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New item order </h4>
     Order no. : {y.ordno} <br />
     Order Code: {y.ocode} <br />
     Item Code: {y.icode} <br />
     Quantity :{y.qty} <br />
     Date : {y.date} <br />
     
    </fieldset>
    </>
  )
}

export default ItemO