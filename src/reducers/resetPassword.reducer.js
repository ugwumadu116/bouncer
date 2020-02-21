import {
  RESET_PASSWORD_END,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS
} from "../actions/types";

const initialState = {
  passwordResetSuccess: {},
  passwordResetFail: "",
  passwordResetSending: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_START:
      return {
        ...state,
        passwordResetSending: action.payload
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordResetSuccess: action.payload,
        passwordResetFail: ""
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        passwordResetFail: action.payload,
        passwordResetSuccess: null
      };
    case RESET_PASSWORD_END:
      return {
        ...state,
        passwordResetSending: action.payload
      };
    default:
      return state;
  }
}
