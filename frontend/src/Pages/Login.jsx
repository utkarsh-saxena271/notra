import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/actions/userActions'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors}
    } = useForm()
    const submitHandler = (data) => {
        console.log(data)
        try{
            dispatch(loginUser(data))
            reset();
            navigate('/dashboard')
        }catch(err){
            console.log(err)
        }
    }
  return(
    <div>
        <h1>Welcome Back!</h1>
    <form onSubmit={handleSubmit(submitHandler)}>
        <input 
        {...register("email",{required:"email is required"})}
        type="email" placeholder='Enter email'/>
        <input 
        {...register("password",{required:"password is required"})}
        type="text" placeholder='Enter Password' />
        <button>Submit</button>
    </form>
    <p>Don't have an account <NavLink to={'/signup'}>Register</NavLink></p>
    </div>
  )
}

export default Login