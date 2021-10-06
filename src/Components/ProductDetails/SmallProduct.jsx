import React from "react";
import "./SmallProduct.css";
const SmallProduct = ({imgUrl}) => {
  return (
    <div className="smallProduct  mt-12 mr-2 ">
      <img
        src={imgUrl}
        alt=""
        className="shadow bg-white"
      />
    </div>
  );
};

export default SmallProduct;
