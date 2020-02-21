import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { LoginContainer, Navigation } from "./styles";
import Nav from "./AuthenticationNav";
import { ClipLoader } from "react-spinners";
import theme from "../theme";
import VerifyEmail from "../verify-email/Verify";
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Vendor = lazy(() => import("./Vendor"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./resetPassword"));
const SignIn = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div>
      <Nav />
      <div
        className="container d-flex align-items-center mt-5"
        style={{ height: "100%" }}
      >
        <LoginContainer className="d-flex align-items-start">
          <div className="loginImageContainer equal">
            <div className="d-flex justify-content-center">
              <img
                src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576756310/bouncer-frontend/jonh_sv_vrsxva.svg"
                alt="Login"
              />
            </div>
          </div>

          <div className="equal  w-100">
            <div className="d-flex justify-content-center w-100">
              <div className="w-70">
                <div className="d-flex  justify-content-between">
                  {location.pathname === "/login" ||
                  location.pathname === "/register" ? (
                    <>
                      <div>
                        <Navigation
                          activeClassName="active"
                          className="boldLink"
                          to="/login"
                        >
                          Sign in
                        </Navigation>
                      </div>
                      <div className="kk">
                        <Navigation
                          activeClassName="active"
                          to="/register"
                          className=" boldLink"
                        >
                          Register
                        </Navigation>
                      </div>
                    </>
                  ) : location.pathname === "/vendor" ? (
                    <div>
                      <Navigation
                        activeClassName="active"
                        className="boldLink"
                        to="/vendor"
                      >
                        Become a vendor
                      </Navigation>
                    </div>
                  ) : location.pathname === "/forgot-password" ? (
                    <div>
                      <Navigation
                        activeClassName="active"
                        className="boldLink"
                        to="/forgot-password"
                      >
                        Forgot Password
                      </Navigation>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div className="pt-x">
                    <Suspense
                      fallback={
                        <div className="d-flex justify-content-center align-items-center h-100">
                          <ClipLoader color={theme.colors.dangerDark} />
                        </div>
                      }
                    >
                      <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/vendor" component={Vendor} />
                        <Route
                          exact
                          path="/forgot-password"
                          component={ForgotPassword}
                        />
                        <Route
                          exact
                          path="/verify_email"
                          component={VerifyEmail}
                        />
                        <Route
                          exact
                          path="/login/reset-password"
                          component={ResetPassword}
                        />
                      </Switch>
                    </Suspense>
                  </div>
                  {location.pathname === "/login" ||
                  location.pathname === "/register" ? (
                    <div className="footer mt-5 mb-5">
                      <Navigation
                        activeClassName="active"
                        className="boldLink pb-2"
                        to="/vendor"
                      >
                        Become a vendor
                      </Navigation>

                      <Navigation to="/forgot-password">
                        Forgot password
                      </Navigation>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </LoginContainer>
      </div>
    </div>
  );
};

export default SignIn;
