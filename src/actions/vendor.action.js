import {SET_ACTIVITY,CREATE_USER} from './types'
import request from '../request'

const setVendor = payload =>({
    type:CREATE_USER,
    payload
})

const setActivity = payload =>({
    type:SET_ACTIVITY,
    payload
})

export const createVendor = (data)=>async dispatch =>{    
    try{
        dispatch(setActivity(true));
        try{
          const register = await request.post("/api/vendor/register/",data);  
          dispatch(setVendor(register))
        }
        catch(err){
           if (err.response){
               dispatch(setVendor(err.response))  
           }
        }
        dispatch(setActivity(false));
    }
    catch(err){
        dispatch(setActivity(false))
        return err
    }
}