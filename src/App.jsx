import React from 'react'
import Feed from "./Components/feed/Feed.jsx"
import Sidebar from "./Components/sidebar/Sidebar"
import Widgets from "./Components/Widgets"

//css files
import "./css/main.css"


export default function App(){
return (
  <>
  <div id='top_container'>
    <Sidebar />
    <Feed/>
    <Widgets/>
  </div>
  </>
)
}
