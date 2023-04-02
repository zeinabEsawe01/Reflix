import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
  
    return (
    <div>
       <nav className="navbar">
      <Link to="/">
        <div className="navbar-link">Home</div>
        </Link>
        <Link to="/catalog">
        <div className="navbar-link">Catalog</div>
      </Link>
      <Link to="/">
      <div className="logo">REFLIX</div>
      </Link>
    </nav>
    </div>
  )
}
