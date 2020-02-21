import { FORGET_PASSWORD_END, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_START, FORGET_PASSWORD_SUCCESS } from "../actions/types";


const initialState = {
    success:{},
    error:"",
    sending: false
}

export default function (state= initialState, action){

    switch(action.type){
        case FORGET_PASSWORD_START:
            return {
                ...state,
                sending:action.payload
            }
        case FORGET_PASSWORD_SUCCESS:
            return {
                ...state,
                success:action.payload,
                error:""
            }
        case FORGET_PASSWORD_FAIL:
            return {
                ...state,
                error:action.payload,
                success:null
            }
        case FORGET_PASSWORD_END:
            return {
                ...state,
                sending:action.payload
            }
        default:
            return state
    }

}