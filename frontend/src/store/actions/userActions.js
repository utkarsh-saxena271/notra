import instance from "../../config/AxiosConfig"
import { loadUser, removeUser } from "../reducers/userSlice";

export const fetchUser = () => async(dispatch, getState) => {
    try {
        const res = await instance.get('/auth/me');
        dispatch(loadUser(res))

    } catch (error) {
        console.log(error)
    }
}

export const loginUser =(data) => async (dispatch, getState) =>{
    try{
        const res = await instance.post('/auth/login',data);
        dispatch(loadUser(res.data.user))
    }catch(err){
        console.log(err)
    }
}

export const signupUser = (data) => async (dispatch, getState) => {
    try{
        const res = await instance.post('/auth/register',data)
        dispatch(loadUser(res.data.user))
    }catch(error){
        console.log(error)
    }
}