import React from 'react'

import "../../css/sidebaroption.css";

const Sidebaroption = ({text , Icon}) => {
  return (
    <div id='option'>
        <h1>{<Icon/>}</h1>
        <h1>{text}</h1>
    </div>
  )
}

export default Sidebaroption