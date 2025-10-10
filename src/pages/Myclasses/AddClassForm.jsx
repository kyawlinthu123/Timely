import React from 'react'
import { Link } from 'react-router-dom'

export default function AddClassForm({setShowFormComponent}) {

  return (
    <form className="max-w-sm mx-auto bg-white border rounded-3xl px-10 py-8 transition-all duration-300 hover:shadow mt-8">
  <h1 className='text-2xl font-bold mb-6'>📚 Add a Class</h1>

  <div className="mb-5">
    <input 
      type="text" 
      placeholder='Enter class name...' 
      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
    />
  </div>

  <div className="mb-5">
    <input 
      type="text" 
      placeholder='Enter description...' 
      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
    />
  </div>

  <div className='flex flex-row justify-center space-x-2'>
    <button type='button' className='text-black border-2 border-black font-semibold bg-yellow-300 hover:bg-emerald-500 transition-colors duration-200 px-6 py-2 rounded-lg'> Add </button>
    <Link to='/my-classes'>
      <button
        type='button'
        className='text-black font-semibold bg-white border border-gray-300 hover:bg-emerald-50 hover:border-emerald-400 transition-colors duration-200 px-6 py-2 rounded-lg'>
          Go Back
      </button>
    </Link>
  </div>
</form>
  )
};
