// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function NavigationBar() {
//   return (
//     <nav className='border border-b-1'>
//         <ul className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
//             <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                 </svg>
//             </li>
//             <li> Timely </li>
//             <li className='flex gap-3 items-center'> 
//                 <div className='w-11'>
//                     <img src="https://avatars.githubusercontent.com/u/110378996?v=4" alt="profile-picture" className='w-full rounded-full'/>
//                 </div>
//                 <Link to='/'>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//             <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
//             </svg>
//                 </Link>
//             </li>
//         </ul>
//     </nav>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <ul className="flex justify-between items-center p-3 max-w-6xl mx-auto text-gray-800">

        <li> 
          <Link to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                 className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>
        </li>

        <li className="font-bold text-xl ">
          <ul>
             <span className='font-bold text-xl'>Timely</span>
          </ul>
        </li>

        <li className="flex gap-3 items-center">
          <div className="w-10 h-10">
            <img
              src="https://avatars.githubusercontent.com/u/110378996?v=4"
              alt="profile"
              className="w-full h-full rounded-full border border-gray-200 shadow-sm"
            />
          </div>
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            <svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                fill="currentColor" className="size-6">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
