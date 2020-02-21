import { EMAIL_VERIFY_FAIL, EMAIL_VERIFY_START, EMAIL_VERIFY_SUCCESS, EMAIL_VERIFY_END } from "./types";
import request from "../request"
import {retrieveMessage} from "../utils/helpers"
const emailVerifySuccess = payload =>({
    type:EMAIL_VERIFY_SUCCESS,
    payload
})

const emailVerifyFail = payload =>({
    type:EMAIL_VERIFY_FAIL,
    payload
})

const emailVerifyStart = payload =>({
    type:EMAIL_VERIFY_START,
    payload
})

const emailVerifyEnd = payload =>({
    type:EMAIL_VERIFY_END,
    payload
})

export const emailVerify = (email_verification_token) => async dispatch =>{
        try{
            dispatch(emailVerifyStart(true))
            let verify = await request.post("api/auth/verify-email/", {email_verification_token})
            dispatch(emailVerifySuccess(verify))
            dispatch(emailVerifyEnd(false))
        }
        catch(err){
            dispatch(emailVerifyFail(retrieveMessage(err)))
            dispatch(emailVerifyEnd(false))
        }
}