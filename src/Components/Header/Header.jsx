import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ColorChange from '../ColorChange/ColorChange'

const Header = () => {
   return (
      <>
         <ColorChange />
         <nav className='navbar'>
            <div className='heading'>
               Word Analyze and Format
               <li className="nav-item">
                  <Link className="nav-link" to="/">
                     Textform
                  </Link>
                  
                  <Link className="nav-link" to="/about">
                     About
                  </Link>
               </li>
            </div>
         </nav>
      </>
   )
}

export default Header

