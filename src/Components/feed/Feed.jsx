import React from 'react'

import "../../css/feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
const Feed = () => {
  return (
    <div id='feed'>
    <div id='feed_header'>
      <h1>Home</h1>
    </div>
    <TweetBox/>
    <Post/>
    
    </div>
  )
}

export default Feed