import {
  RESET_PASSWORD_END,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS
} from "./types";
import { retrieveMessage } from "../utils/helpers";
import request from "../request";

const resetPasswordStart = payload => ({
  type: RESET_PASSWORD_START,
  payload
});
const resetPasswordSuccess = payload => ({
  type: RESET_PASSWORD_SUCCESS,
  payload
});
const resetPasswordFail = payload => ({
  type: RESET_PASSWORD_FAIL,
  payload
});
const resetPasswordEnd = payload => ({
  type: RESET_PASSWORD_END,
  payload
});

export const resetPasswordAction = data => async dispatch => {
  try {
    dispatch(resetPasswordStart(true));
    let resetPassword = await request.post("api/auth/reset_password/", data);
    dispatch(resetPasswordSuccess(resetPassword));
    dispatch(resetPasswordEnd(false));
  } catch (err) {
    dispatch(resetPasswordFail(retrieveMessage(err)));
    dispatch(resetPasswordEnd(false));
  }
};
