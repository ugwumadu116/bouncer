import {
  FORGET_PASSWORD_END,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_START,
  FORGET_PASSWORD_SUCCESS
} from "../actions/types";

import request from "../request";
import { retrieveMessage } from "../utils/helpers";

const forgetPassowrdStart = payload => ({
  type: FORGET_PASSWORD_START,
  payload
});
const forgetPassowrdSuccess = payload => ({
  type: FORGET_PASSWORD_SUCCESS,
  payload
});
const forgetPassowrdFail = payload => ({
  type: FORGET_PASSWORD_FAIL,
  payload
});
const forgetPassowrdEnd = payload => ({
  type: FORGET_PASSWORD_END,
  payload
});

const forgetPassword = user_name => async dispatch => {
  try {
    dispatch(forgetPassowrdStart(true));
    let forgetPassword = await request.post("api/auth/forgot-password/",user_name)
    dispatch(forgetPassowrdSuccess(forgetPassword))
    dispatch(forgetPassowrdEnd(false));
    console.log(forgetPassword);
    
    
}
catch(err){
  
    dispatch(forgetPassowrdFail(retrieveMessage(err))) 
    dispatch(forgetPassowrdEnd(false));
  }
};

export default forgetPassword