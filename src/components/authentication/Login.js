import React, { useEffect, useState } from "react";
import Input from "../form/input";
import { connect, useSelector } from "react-redux";
import { authLogin } from "../../actions/Login.actions";
import { BeatLoader } from "react-spinners";
import izitoast from "izitoast";
import { Formik } from "formik";
import { Wrapper, CustomButton } from "./styles";
import { loginSchema } from "./validation";

const Login = props => {
  const {
    login: { loading, info }
  } = useSelector(state => state);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {}, [info]);

  const success = () => {
    izitoast.show({
      messageColor: "white",
      title: "Login sucess",
      backgroundColor: "green ",
      titleColor: "white",
      timeout: 5000,
      message: info.data["message"],
      onClosing: () => {
        info.status = 0;
      },
      onOpening: () => {
        info.status = 0;
      }
    });
    props.history.push(`/`);
  };

  const notValid = () => {
    izitoast.show({
      messageColor: "white",
      title: "Login Error",
      backgroundColor: "red",
      titleColor: "white",
      timeout: 5000,
      message: info.data["error"],
      onClosing: () => {
        info.status = 0;
      },
      onOpening: () => {
        info.status = 0;
      }
    });
  };
  const isAuthenticated = (isLogin, info) => {
    if (isLogin && info.status >= 200 && info.status <= 299) {
      success();
    } else if (isLogin && info.status >= 400 && info.status <= 499) {
      notValid();
    } else {
      return null;
    }
  };
  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={loginSchema}
        onSubmit={values => {
          setIsLogin(false);
          props.authLogin(values);
          setIsLogin(true);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name="username"
              medium
              label="Username:"
              type="text"
              onChange={handleChange}
              value={values.username}
            />
            {errors.username ? errors.username : null}
            <Input
              name="password"
              medium
              label="Password"
              type="password"
              onChange={handleChange}
              value={values.pass_word}
            />
            {errors.password ? errors.password : null}

            <CustomButton
              className="d-flex justify-content-center"
              btndangerDark
              btnLarge
              type="submit"
            >
              {(loading && <BeatLoader color="#fff" size={5} />) || "Login"}
            </CustomButton>
          </form>
        )}
      </Formik>
      {isAuthenticated(isLogin, info)}
    </Wrapper>
  );
};

const mapDispatchToProps = {
  authLogin
};

export default connect(null, mapDispatchToProps)(Login);
