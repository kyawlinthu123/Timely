import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SingleClassDetails() {
  const location = useLocation();
  const singleClassData = location.state;

  return (
    <div className='max-w-6xl mx-auto'>
      {singleClassData && <h1 className='flex justify-center items-center text-2xl'> {singleClassData.title} </h1>}
    </div>
  )
}
