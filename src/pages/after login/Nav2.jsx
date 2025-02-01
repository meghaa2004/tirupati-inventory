import React from 'react'
import { Link } from 'react-router-dom'

const Nav2 = () => {
  return (
    <>
    <div className='nav'>
      <h1 align="center" > Inventory  </h1>
      <ul>
            <li> <Link to={"/customer"} > Customer </Link> </li>
            <li> <Link to={"/item"} > Item </Link> </li>
            <li> <Link to={"/itemO"} > Item Order </Link> </li>
            <li> <Link to={"/sale"} > Sale </Link> </li>
        </ul>
    </div>
    </>
  )
}

export default Nav2