import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signupUser } from '../store/actions/userActions'

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState:{errors}
    } = useForm()
    const submitHandler = (data) =>{
        try{
            dispatch(signupUser(data))
            reset();
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <h1>Welcome! Signup to continue</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <input 
            {...register("fullName.firstName",{required:"firstname is required"})}
            type="text" placeholder='firstName'/>
            <input 
            {...register("fullName.lastName",{required:"lastname is required"})}
            type="text" placeholder='lastName' />
            <input 
            {...register("userName",{required:"username is required"})}
            type="text" placeholder='userName'/>
            <input
            {...register("email",{required:"email is required"})}
            type="text" placeholder='email'/>
            <input
            {...register("password",{required:"password is required"})}
            type="text" placeholder='password'/>
            <button>Submit</button>
        </form>
        <p>Already have an account?<NavLink to={'/'}>Login</NavLink></p>
    </div>
  )
}

export default Signup