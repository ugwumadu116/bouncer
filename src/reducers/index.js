import { combineReducers } from "redux";
import customerReducer from "./customer.reducer";
import vendorReducer from "./vendor.reducer";

import login from "./Login.reducer";
import emailVerification from "./emailVerification.reducer";
import forgotPassword from "./forgotPassword.reducer";
import resetPasswordReducer from "./resetPassword.reducer";

export default combineReducers({
  customer: customerReducer,
  vendor: vendorReducer,
  login,
  emailVerification,
  forgotPassword,
  resetPasswordReducer
});
