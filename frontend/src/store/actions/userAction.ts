import type { AppDispatch } from "../store";
import axios from "axios";

import instance from "../../config/axiosConfig";

import {
    setLoading,
    setUser,
    setError,
    removeUser,
} from '../slices/userSlice'

interface LoginData {
    email: string,
    password: string
}
interface RegisterData {
    name: string,
    email: string,
    password: string
}

interface UpdateData {
    name?: string,
    email?: string,
}

export const registerUser = (data: RegisterData) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const res = await instance.post(
            "/auth/register",
            data
        );
        dispatch(setUser(res.data.user));
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            dispatch(
                setError(
                    error.response?.data?.message ||
                    "Login failed"
                )
            );
        } else {
            dispatch(
                setError("Something went wrong")
            );
        }
    }
}

export const loginUser = (data: LoginData) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const res = await instance.post(
            "/auth/login",
            data
        );
        dispatch(setUser(res.data.user));
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            dispatch(
                setError(
                    error.response?.data?.message ||
                    "Login failed"
                )
            );
        } else {
            dispatch(
                setError("Something went wrong")
            );
        }
    }
}


export const logoutUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));

        await instance.post('/auth/logout')
        dispatch(removeUser())
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            dispatch(
                setError(
                    error.response?.data?.message ||
                    "Logout failed"
                )
            );
        } else {
            dispatch(
                setError("Something went wrong")
            );
        }
    }
}

export const updateUser = (data : UpdateData) => async (dispatch : AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const res = await instance.post(
            "/user/update",
            data
        );
        dispatch(setUser(res.data.user));
    } catch (error : unknown) {
        if(axios.isAxiosError(error)){
            dispatch(
                setError(
                    error.response?.data.message || "Update Failed"
                )
            )
        }else {
            dispatch(
                setError("Something went wrong")
            );
        }
    }
}

