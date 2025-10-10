import React from 'react'

export default function ClassList() {

  return ( 
    <div className='container mx-auto px-4 font-nunito mt-2'>
      <div className='max-w-sm mx-auto bg-white border rounded-3xl px-10 py-8 transition-all duration-300 hover:shadow'>
        <h1 className='text-2xl font-bold mb-6'>🗂️ Organize Your Classes</h1>
        <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                      <thead className="bg-red-400 text-white">
                          <tr>
                              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Class Name</th>
                              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Description</th>
                              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6"> </th>
      
                          </tr>
                      </thead>
                      <tbody className="text-gray-700">
                              <tr className="border-b">
                                  <td className="w-1/6 py-3 px-4 text-left lg:px-6">Computer Science</td>
                                  <td className="w-1/6 py-3 px-4 text-left lg:px-6">blah blah blah blah blah...</td>
                                  <td className="w-1/6 py-3 px-4 text-left lg:px-6">
                                  <button> Edit </button>
                                  <button> Delete </button>
                                  </td>
                              </tr>
                      </tbody>
                  </table>
      </div>
      </div>
    </div>
  )
} 
