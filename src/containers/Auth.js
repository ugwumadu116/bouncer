import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import UserAuth from "../components/authentication/Auth";

const Auth = () => (
  <ThemeProvider theme={theme}>
    <UserAuth />
  </ThemeProvider>
);

export default Auth;
