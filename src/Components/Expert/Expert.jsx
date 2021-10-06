import React from "react";
import './Expert.css'
const Expert = ({imgUrl}) => {
  return (
    <div className="expert flex items-center flex-col m-2  z-0">
      <img src={imgUrl} alt="" className="rounded-full"  />
      <p className="flex">⭐</p>
    </div>
  );
};

export default Expert;
