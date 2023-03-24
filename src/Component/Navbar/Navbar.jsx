import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import {Box,Image,Container,Text,Button} from "@chakra-ui/react";
const Navbar = () => {
  return (
    <div>

<div className='Nav-wrapper'>
<Link to='/' className='brand-logo'>Todo App</Link>
<ul className='right'>
    <li><Link to='/signin'>SignIn</Link></li>
    <li><Link to='/register'>Register</Link></li>
    <li>
        <button className='btn'>Logout</button>
    </li>
</ul>
</div>
    </div>
  )
}

export default Navbar