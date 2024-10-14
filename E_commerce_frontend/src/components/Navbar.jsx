import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "../index.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>shoepy</h1>
        <input type="text" placeholder='Search...' />
        <nav>
            <li><FaRegHeart size={30}/></li>
            <li><FaShoppingCart size={30}/></li>
        </nav>
    </div>
  )
}

export default Navbar