import React from 'react'
import { Routes, Route} from 'react-router-dom'
import  Bookmarks  from "./Bookmarks";
import  Explore  from "./Explore";
import  Home  from "./Home";
import Notifications from "./Notifications"
import  Messages  from "./Messages";
import  Profile  from "./Profile";
const Content = () => {
  return (
    < >
    <div id="main_content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/Notifications" element={<Notifications/>} />
          <Route path="/Messages" element={<Messages/>} />
          <Route path="/Bookmarks" element={<Bookmarks/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
    </div>
    </>
  )
}

export default Content