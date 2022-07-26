import React from 'react'
import { Link } from 'react-router-dom'
import "./css/nav.css"
import {RiHomeSmileFill} from "react-icons/ri"
import {MdOutlineExplore} from 'react-icons/md'
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiMessageSquareDetail} from "react-icons/bi"
import {BsBookmarks} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {GiBirdTwitter} from "react-icons/gi"




const Nav = () => {
  return (
    <>
    <div id='icon_twit'>
    <h1><GiBirdTwitter/>   </h1>
    <h2>Sasta Twitter</h2>
    </div>
    <div id='nav'>
    <Link className='link' to="/"><RiHomeSmileFill/>   Home</Link>
    <Link className='link' to="/Explore"><MdOutlineExplore/>   Explore</Link>
    <Link className='link' to="/Notifications"><IoMdNotificationsOutline/>   Notifications</Link>
    <Link className='link' to="/Messages"><BiMessageSquareDetail/>   Messages</Link>
    <Link className='link' to="/Bookmarks"><BsBookmarks/>   Bookmarks</Link>
    <Link className='link' to="/Profile"><CgProfile/>  Profile</Link>
    </div>
    <div id='tweet'>
    <button>Tweet</button>
    </div>
    </>
  )
}

export  {Nav}