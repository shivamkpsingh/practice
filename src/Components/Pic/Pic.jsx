import React from "react";
import "./Pic.css";
const Pic = ({imgUrl}) => {
  return (
      
        <img
          src={imgUrl}
          alt=""
          className=" mr-2 z-0 pic__img rounded-3xl  border  object-contain  h-64"

        />
        
      
  );
};

export default Pic;
