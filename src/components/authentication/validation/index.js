import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username is too short!")
    .max(50, "Username is too long!")
    .required("Required")
});

export const loginSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username is too short!")
    .max(50, "Username is too long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Password is too short!")
    .max(50, "Password is too long!")
    .required("Required")
});

export const registerSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username is too short!")
    .max(50, "Username is too long!")
    .required("Required"),
  first_name: Yup.string()
    .min(2, "Username is too short!")
    .max(50, "Username is too long!")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Username is too short!")
    .max(50, "Username is too long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Password is too short!")
    .max(50, "Password is too long!")
    .required("Required"),
  confirm_password: Yup.string()
    .min(3, "Password is too short!")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  email: Yup.string()
    .email()
    .required("Required")
});

export const vendorValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username is too short!")
    .max(50, "Username is too long!")
    .required("Required"),
  shop_name: Yup.string()
    .min(2, "Shop name is too short!")
    .max(50, "Shop name is too long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Password is too short!")
    .max(50, "Password is too long!")
    .required("Required"),
  confirm_password: Yup.string()
    .min(3, "Password is too short!")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  email: Yup.string()
    .email()
    .required("Required")
});
export const resetPasswordValidation = Yup.object({
  password: Yup.string()
    .min(6, "Password is too short!")
    .max(50, "Password is too long!")
    .required()
});
