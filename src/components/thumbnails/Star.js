import React from 'react';
import { FaStar } from "react-icons/fa";

const Star = ({color}) => {
    return <FaStar color={color || "#c1c8ce"} size="10.9px" />;
}
 
export default Star;
