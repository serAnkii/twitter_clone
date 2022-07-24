import React from 'react'
import "./index.css"
import {Nav} from "./components/Nav"
export default function App(){
return (
  <>
  <div id='main_div'>
    <div id='section1' className='section' ><Nav /></div>
    <div id="section2"  className='section'> this is 2</div>
    <div id="section3"  className='section'>and i am 3</div>
  </div>
  </>
)
}
