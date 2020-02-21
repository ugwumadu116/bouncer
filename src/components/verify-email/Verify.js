import React, { useEffect } from "react";
import Success from "./Success";
import Fail from "./Fail";
import { emailVerify } from "../../actions/emailVerify.actions";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import theme from "../theme";
const VerifyEmail = props => {
  const param = new URLSearchParams(window.location.search);
  const verifyToken = param.get("token") || null;
  const { emailVerify, data, error, sending } = props;
  useEffect(() => {
      emailVerify(verifyToken);
}, []);

  let message = data.message
  console.log(data);
  
  return (
    <div>
      {sending ? (
        <div className="d-flex justify-content-center align-items-center h-100">
        <ClipLoader color={theme.colors.dangerDark} />
      </div>
      ) : error ? (
        <Fail message={error} />
      ) :data ? (
        <Success message={message} />
      ):null}
    </div>
  );
};
const mapStateToProps = ({ emailVerifification }) => ({
  data: emailVerifification.data,
  sending: emailVerifification.sending,
  error: emailVerifification.error
});
const mapDispatchToProps = {
  emailVerify
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
