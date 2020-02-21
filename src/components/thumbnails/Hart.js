import React from "react";
import { FaHeart } from "react-icons/fa";

const Star = ({ color }) => {
  return <FaHeart color={color || "#33a0ff"} />;
};

export default Star;
