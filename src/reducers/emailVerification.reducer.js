import { EMAIL_VERIFY_FAIL, EMAIL_VERIFY_START,EMAIL_VERIFY_SUCCESS, EMAIL_VERIFY_END } from "../actions/types";


const initialState = {
    data:{},
    error:"",
    sending:false
}

export default function(state=initialState,action){
    switch (action.type) {
        case EMAIL_VERIFY_START:
            return{
                ...state,
                sending:action.payload
            }
        case EMAIL_VERIFY_END:
            return{
                ...state,
                sending:action.payload
            }
        case EMAIL_VERIFY_SUCCESS:
            return{
                ...state,
                data:action.payload
            }
        case EMAIL_VERIFY_FAIL:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}
