import React, { useState } from 'react'
import Nav2 from './Nav2'


const Item = () => {
  let [x,data]= useState({icode:"",iname:"",qty:"",rate:"",date:""})
  let [y,displayData]= useState({icode:"",iname:"",qty:"",rate:"",date:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Item added")
    displayData({icode:x.icode,iname:x.iname,qty:x.qty,rate:x.rate,date:x.date})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='loginForm'>
    <h1>Items</h1>
     Item code : <input type="number" onChange={getData} name="icode" /> <br />
     Item Name : <input type="text" onChange={getData} name="iname" /><br />
     Item Quantity : <input type="number" onChange={getData} name="qty" /><br />
     Item Rate : <input type="number" onChange={getData} name="rate" /><br />
     Date : <input type="date" onChange={getData} name="date" /> <br /><br />

     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New Item</h4>
     Item code : {y.icode} <br />
     Item Name : {y.iname} <br />
     Item Quantity :{y.qty} <br />
     Item Rate : {y.rate} <br />
     Date : {y.date} <br />
     
    </fieldset>
    </>
  )
}

export default Item
