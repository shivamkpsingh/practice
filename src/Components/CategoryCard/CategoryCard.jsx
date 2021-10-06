import React from "react";
import "./CategoryCard.css";
const CategoryCard = ({ imgUrl }) => {
  return (
      <img src={imgUrl} alt="" className="mr-2 h-44 w-52 rounded-lg" />
  );
};

export default CategoryCard;
