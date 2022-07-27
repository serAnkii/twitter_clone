import React from 'react'
import "../css/home.css"
import { Avatar } from '@web3uikit/core'
const Home = () => {
  return (
    <>
    <div id="homepage">
      <Avatar theme="image" isRounded id="avtar"/>
      <h1>Good Morning User</h1>
    </div>
    </>
  )
}

export default Home