import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateNote = () => {
  const navigate = useNavigate()
  const createHandler = () => {
    navigate('/dashboard/createnote')
  }

  return (
    <div className="flex justify-center items-center p-6  h-48 w-48">
      <button
      onClick={createHandler}
        className="group cursor-pointer w-full h-full bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg flex flex-col justify-center items-center text-white hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300"
      >
        <span className="text-5xl mb-2 group-hover:scale-110 transform transition-transform duration-200 text-blue-400">
          +
        </span>
        <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-200">
          Create Note
        </h3>
      </button>
    </div>
  )
}

export default CreateNote