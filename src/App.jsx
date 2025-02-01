
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './pages/Header'
import Register from './pages/Register'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

import Nav2 from './pages/after login/Nav2'
import Item from './pages/after login/Item'
import Customer from './pages/after login/Customer'
import Sale from './pages/after login/Sale'
import ItemO from './pages/after login/ItemO'
import Forgot from './pages/Forgot'

function App() {

  return (
    <>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/login" element={<Login/>}/>
          <Route path ="/register" element = {<Register/>} />
          <Route path ="/services" element = {<Services/>} />
          <Route path ="/about" element = {<About/>} />
          <Route path ="/contact" element = {<Contact/>} />
          <Route path ="/nav2" element = {<Nav2/>} />
          <Route path ="/item" element = {<Item/>} />
          <Route path ="/itemO" element = {<ItemO/>} />
          <Route path ="/customer" element = {<Customer/>} />
          <Route path ="/sale" element = {<Sale/>} />
          <Route path ="/forgot" element = {<Forgot/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
