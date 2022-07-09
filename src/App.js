import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import {Home} from './components/Maincontent/Home'
import {Explore} from './components/Maincontent/Explore'
import {Notifications} from './components/Maincontent/Notifications'
import {Messages} from './components/Maincontent/Messages'
import {Bookmarks} from './components/Maincontent/Bookmarks'
import {Profile} from './components/Maincontent/Profile'

import Navbar from "./components/Navbar/Navbar.jsx"

import {Subsection} from "./components/Subsection/Subsection.jsx"

import "./App.css"
 
export const App = () => {
  return (<>
  <div className='mainpage'>
  <Navbar className="Navbar"/> 
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Explore' element={<Explore/>} />
    <Route path='/Notifications' element={<Notifications/>} />
    <Route path='/Messages' element={<Messages/>} />
    <Route path='/Bookmarks' element={<Bookmarks/>} />
    <Route path='/Profile' element={<Profile/>} />
  </Routes>
  <Subsection/>
  </div>
    </>
    )
}

