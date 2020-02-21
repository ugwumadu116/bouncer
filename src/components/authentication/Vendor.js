import React, { useState, useEffect } from "react";
import { Wrapper, CustomButton } from "./styles";
import Input from "../form/input";
import { vendorValidationSchema } from "./validation";
import { Formik } from "formik";
import { createVendor } from "../../actions/vendor.action";
import { connect } from "react-redux";
import izitoast from "izitoast";
import theme from "../theme";
import { BeatLoader } from "react-spinners";

const Vendor = props => {
  const { createVendor, vendor, creating } = props;
  const [created, setCreated] = useState(false);

  useEffect(() => {}, [vendor]);

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
          shop_name: "",
          email: "",
          confirm_password: "",
          password: ""
        }}
        validationSchema={vendorValidationSchema}
        onSubmit={async values => {
          let info = { ...values, user_name: values.username };
          delete info["username"];
          setCreated(false);
          await createVendor(info);
          setCreated(true);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              value={values.shop_name}
              name="shop_name"
              medium
              label="Shop name:"
              type="text"
            />
            {errors.shop_name ? errors.shop_name : null}

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
              value={values.username}
              name="username"
              medium
              label="Username:"
              type="text"
            />
            {errors.username ? errors.username : null}

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

            <CustomButton
              className="d-flex justify-content-center"
              btndangerDark
              btnLarge
              type="submit"
            >
              {(creating && <BeatLoader color="#fff" size={5} />) || "Sign Up"}
            </CustomButton>
          </form>
        )}
      </Formik>

      {created && vendor.status >= 200 && vendor.status <= 299
        ? izitoast.show({
            ...izitoasts,
            backgroundColor: theme.colors.success,
            message: `${vendor.data["message"]}. Check your email for verification of account`,
            messageColor: "white",
            icon: "cancel-circle"
          })
        : created && vendor.status >= 400 && vendor.status <= 499
        ? izitoast.show({
            ...izitoasts,
            message: vendor.data["message"],
            backgroundColor: theme.colors.danger,
            messageColor: "white"
          })
        : null}
    </Wrapper>
  );
};

const mapStateToProps = store => ({
  vendor: store.vendor.vendor,
  creating: store.vendor.creating
});
const mapDispatchToProps = {
  createVendor
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
