import React from "react";

import "../../css/sidebaroption.css";

const Sidebaroption = ({ text, Icon, active }) => {
  return (
    <>
      
        <div className={`option ${active && "sidebaroption--active"}`}>
          {<Icon className="icon" />}
          <h1 className="optiontext">{text}</h1>
          
        </div>
    </>
  );
};

export default Sidebaroption;
