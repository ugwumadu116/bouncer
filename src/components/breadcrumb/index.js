import React from "react";
import { Crumb } from "./styles";

// Breadcrumb component implementation
function Breadcrumb({ children, ...props }) {
  return <Crumb {...props}>{children}</Crumb>;
}

export default Breadcrumb;
