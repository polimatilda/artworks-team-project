import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBar"> 
        <a href="#">about us</a>
        <Link to="/favorites">favorites</Link>
        <Link to="/">artworks</Link>
        <a href="#">blog</a>
        <a href="#">log in</a>
    </div>
  )
}

export default NavBar