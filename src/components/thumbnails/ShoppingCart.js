import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Star = ({ color }) => {
    return <FaShoppingCart color={color || "#33a0ff"} />;
};

export default Star;
