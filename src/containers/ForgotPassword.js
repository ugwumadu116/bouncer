import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../components/theme";
import Nav from "../components/authentication/AuthenticationNav";
import SignIn from "../components/authentication/ForgotPassword";

const ForgotPassword = () => (
  <ThemeProvider theme={theme}>
    <Nav />
    <SignIn />
  </ThemeProvider>
);

export default ForgotPassword;
