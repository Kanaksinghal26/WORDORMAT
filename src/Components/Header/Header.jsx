import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
   return (
      <nav className='navbar'>
         <div className='heading'>
            Word Analyze and Format
            <li class="nav-item">
               <Link  class="nav-link" to="/">
                  Textform
               </Link>
Rou
               <Link  class="nav-link" to="/about">
                  About
               </Link>
            </li>
         </div>
      </nav>
   )
}

export default Header 

