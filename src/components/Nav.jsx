import React from 'react'
import { Link } from 'react-router-dom'
import "./css/nav.css"

const Nav = () => {
  return (
    <>
    <div id='nav'>
    <Link className='link' to="/">Home</Link>
    <Link className='link' to="/Explore">Explore</Link>
    <Link className='link' to="/Notifications">Notifications</Link>
    <Link className='link' to="/Messages">Messages</Link>
    <Link className='link' to="/Bookmarks">Bookmarks</Link>
    <Link className='link' to="/Profile">Profile</Link>
    </div>
    </>
  )
}

export  {Nav}