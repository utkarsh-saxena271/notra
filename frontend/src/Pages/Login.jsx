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
    formState: { errors }
  } = useForm()

  const submitHandler = (data) => {
    console.log(data)
    try {
      dispatch(loginUser(data))
      reset()
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-4">
      <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">Welcome Back!</h1>

        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
          <div>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            Submit
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don’t have an account?{' '}
          <NavLink
            to="/signup"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Login