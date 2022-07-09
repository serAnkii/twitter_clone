import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (<>
  <div id='main'>
    <Link to="/">Home</Link>
    <Link to="/Explore">Explore</Link>
    <Link to="/Notifications">Notifications</Link>
    <Link to="/Messages">Messages</Link>
    <Link to="/Bookmarks">Bookmarks</Link>
    <Link to="/Profile">Profile</Link>
    </div>
    </>
    )
}

export default Navbar