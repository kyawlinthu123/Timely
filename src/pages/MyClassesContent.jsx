import React from 'react'
import ClassList from '../components/MyClasses/ClassList'

export default function MyClassesContent() {
  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold'> My Classes </h1>
      <div className='mt-6'>
        <ClassList/>
      </div>
    </div>
  )
}
