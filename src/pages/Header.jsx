import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='logo'>
        <h1>TIRUPATI RETAILER INVENTORY SERVICE PORTAL </h1>
        </div>
        <div className='login '>
            <button><Link to={"/login"}>login</Link></button>
        </div>
     </div>
    <div className='nav'>
        <ul>
            <li> <Link to={"/"} > Home </Link> </li>
            <li> <Link to={"/services"} >Customer  Services </Link> </li>
            <li> <Link to={"/about"} > About </Link> </li>
            <li> <Link to={"/contact"} > Contact </Link> </li>
        </ul>
    </div>
    </>
  )
}

export default Header