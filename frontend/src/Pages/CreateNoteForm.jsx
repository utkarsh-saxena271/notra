import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNote } from '../store/actions/noteAction'

const CreateNoteForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const SubmitHandler = async (data) => {
    try {
      await dispatch(createNote(data))
      reset()
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center h-screen w-screen items-center text-white px-4">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg flex flex-col gap-5 border border-gray-800"
      >
        <h2 className="text-2xl font-semibold text-blue-400 text-center mb-2">
          Create a New Note
        </h2>

        <div>
          <input
            {...register('title', { required: 'Title is required' })}
            type="text"
            placeholder="Enter Title"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          {errors.Title && (
            <p className="text-sm text-red-500 mt-1">{errors.Title.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register('content', { required: 'Content is required' })}
            placeholder="Write your note here..."
            rows="6"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          {errors.Content && (
            <p className="text-sm text-red-500 mt-1">{errors.Content.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateNoteForm