import React, { useEffect, useState } from "react";
import Input from "../form/input";
import { Formik } from "formik";
import { Wrapper, CustomButton } from "./styles";
import { registerSchema } from "./validation";
import { connect } from "react-redux";
import { createCustomer } from "../../actions/customer.action";
import izitoast from "izitoast";
import theme from "../theme";
import { BeatLoader } from "react-spinners";

const Register = props => {
  const { createCustomer, customer, creating } = props;
  const [created, setCreated] = useState(false);

  useEffect(() => {}, [customer]);

  const izitoasts = {
    title: "Signup message",
    position: "topCenter",
    backgroundColor: "green",
    messageColor: "white",
    transitionInMobile: "fadeInUp",
    transitionOutMobile: "fadeOutDown",
    titleColor: theme.colors.light,
    timeout: 5000
  };
  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: "",
          first_name: "",
          last_name: "",
          email: "",
          confirm_password: "",
          password: ""
        }}
        validationSchema={registerSchema}
        onSubmit={async values => {
          let info = { ...values, user_name: values.username };
          delete info["username"];
          setCreated(false);
          await createCustomer(info);
          setCreated(true);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              value={values.first_name}
              name="first_name"
              medium
              label="First name:"
              type="text"
            />
            {errors.first_name ? errors.first_name : null}

            <Input
              onChange={handleChange}
              value={values.last_name}
              name="last_name"
              medium
              label="Last name:"
              type="text"
            />
            {errors.last_name ? errors.last_name : null}
            <Input
              onChange={handleChange}
              value={values.username}
              name="username"
              medium
              label="Username:"
              type="text"
            />
            {errors.username ? errors.username : null}

            <Input
              onChange={handleChange}
              value={values.email}
              name="email"
              medium
              label="Email:"
              type="email"
            />
            {errors.email ? errors.email : null}

            <Input
              onChange={handleChange}
              value={values.password}
              name="password"
              medium
              label="Password:"
              type="password"
            />
            {errors.password ? errors.password : null}

            <Input
              onChange={handleChange}
              value={values.confirm_password}
              name="confirm_password"
              medium
              label="Confirm Password:"
              type="password"
            />
            {errors.confirm_password ? errors.confirm_password : null}
            <div className="d-flex justify-content-center w-100">
              <CustomButton
                className="d-flex justify-content-center"
                btndangerDark
                btnLarge
                type="submit"
              >
                {(creating && <BeatLoader color="#fff" size={5} />) ||
                  "Sign Up"}
              </CustomButton>
            </div>
          </form>
        )}
      </Formik>
      {created && customer.status >= 200 && customer.status <= 299
        ? izitoast.show({
            ...izitoasts,
            backgroundColor: theme.colors.success,
            message: `${customer.data["message"]}. Check your email for verification of account`,
            messageColor: "white",
            icon: "cancel-circle"
          })
        : created && customer.status >= 400 && customer.status <= 499
        ? izitoast.show({
            ...izitoasts,
            backgroundColor: theme.colors.danger,
            message: customer.data["message"],
            messageColor: "white"
          })
        : null}
    </Wrapper>
  );
};

const mapStateToProps = store => ({
  customer: store.customer.customer,
  creating: store.customer.creating
});
const mapDispatchToProps = {
  createCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
