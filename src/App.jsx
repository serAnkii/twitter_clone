import React from 'react'
import "./app.css"
import {Nav} from "./components/Nav"
import Content from "./components/content/Content"
import Adds from "./components/Adds"
export default function App(){
return (
  <>
  <div id='main_div'>
    <div id='section1' className='section' ><Nav /></div>
    <div id="section2"  className='section'><Content/></div>
    <div id="section3"  className='section'><Adds/></div>
  </div>
  </>
)
}
