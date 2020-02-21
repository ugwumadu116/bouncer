import React, { useState } from "react";
import Input from "../form/input";
import { forgotPasswordSchema } from "./validation";
import { Formik } from "formik";
import { Wrapper, CustomButton } from "./styles";
import { connect, useSelector } from "react-redux";
import forgetPasswordAction from "../../actions/forgotPassword.action";
import izitoast from "izitoast";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";
const Password = props => {
  const [forgetPasswordSent, setForgetPasswordSent] = useState(false);

  const {
    forgotPassword: { success, error, sending }
  } = useSelector(state => state);
  
  useEffect(() => {}, []);

  return (
    <Wrapper className="form mt-6">
      <Formik
        initialValues={{ username: "" }}
        validationSchema={forgotPasswordSchema}
        onSubmit={async values => {
          let user_name = { ...values, user_name: values.username };
          await props.forgetPasswordAction(user_name);
          setForgetPasswordSent(true);
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
              value={values.email}
            />
            {errors.email ? errors.email : null}

            <CustomButton
              className="d-flex justify-content-center"
              btndangerDark
              btnLarge
              type="submit"
            >
              {(sending && <BeatLoader color="#fff" size={5} />) || "Submit"}
            </CustomButton>
          </form>
        )}
      </Formik>

      {success && forgetPasswordSent === true
        ? izitoast.show({
            messageColor: "white",
            title: "Success:",
            backgroundColor: "green ",
            titleColor: "white",
            timeout: 5000,
            message: "A message has been sent to your mail",
            onClosed: ()=>{setForgetPasswordSent(false)
            props.history.push("/login/reset-password")
            } 
          })
        : error.length > 1 && forgetPasswordSent === true
        ? izitoast.show({
            messageColor: "white",
            title: "Error:",
            backgroundColor: "red",
            titleColor: "white",
            timeout: 5000,
            message: error,
            onClosed: setForgetPasswordSent(false)
          })
        : null}
    </Wrapper>
  );
};

const mapDispatchToProps = {
  forgetPasswordAction
};
export default connect(null, mapDispatchToProps)(Password);
