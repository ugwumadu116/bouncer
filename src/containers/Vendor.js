import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../components/theme";
import Nav from "../components/authentication/AuthenticationNav";
import VendorComponent from "../components/authentication/Vendor";

const Vendor = () => (
  <ThemeProvider theme={theme}>
    <Nav />
    <VendorComponent />
  </ThemeProvider>
);

export default Vendor;
