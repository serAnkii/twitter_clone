import React from 'react'
import { Link } from 'react-router-dom'
import "./css/nav.css"
import {RiHomeSmileFill} from "react-icons/ri"
import {MdOutlineExplore} from 'react-icons/md'
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiMessageSquareDetail} from "react-icons/bi"
import {BsBookmarks} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"

const Nav = () => {
  return (
    <>
    <div id='nav'>
    <Link className='link' to="/"><RiHomeSmileFill/>   Home</Link>
    <Link className='link' to="/Explore"><MdOutlineExplore/>   Explore</Link>
    <Link className='link' to="/Notifications"><IoMdNotificationsOutline/>   Notifications</Link>
    <Link className='link' to="/Messages"><BiMessageSquareDetail/>   Messages</Link>
    <Link className='link' to="/Bookmarks"><BsBookmarks/>   Bookmarks</Link>
    <Link className='link' to="/Profile"><CgProfile/>   Profile</Link>
    </div>
    </>
  )
}

export  {Nav}