import React from 'react'
import { useLocation } from 'react-router-dom'
import AssignmentTable from '../MyAssignments/AssignmentTable';

export default function SingleClassDetails() {
  const location = useLocation();
  const singleClassData = location.state;

  return (
    <div className='max-w-6xl mx-auto'>
      {singleClassData && 
      <div>
      <h1 className='text-2xl font-bold mt-2 mb-2'>📚 {singleClassData.title} </h1>
      <AssignmentTable singleClassData={singleClassData}/>
      </div>
      }
    </div>
  )
}
