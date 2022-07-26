import React from 'react'
import { Input } from '@web3uikit/core'
import "./css/ads.css"
const Adds = () => {
  return (
    <>
    <div id="adds">
    <Input
  hasCopyButton
  label="Search Twitter"
  name="search"
  onBlur={function noRefCheck(){}}
  onChange={function noRefCheck(){}}
  type="text"
/>
</div>

<div id='developer'>
      <iframe src="https://bio.link/serAnkii" frameborder="12" height={300}>Reach out the developer</iframe>
      </div>
    </>
  )
}

export default Adds