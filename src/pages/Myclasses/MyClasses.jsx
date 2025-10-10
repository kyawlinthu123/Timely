import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddClassForm from './AddClassForm';
import ClassList from './ClassList';

export default function MyClasses() {
  const [showmyClasses,setShowMyClasses] = useState(true);
  const [showFormComponent, setShowFormComponent] = useState(false);
  const [showClassList, setShowClassList] = useState(false);

  const addClassHandler = () => {
    setShowFormComponent(true);
    setShowClassList(false);
  };

  const viewClassHandler = () => {
    setShowClassList(true);
    setShowFormComponent(false);
  };

  return (
    <div className="flex flex-col items-center max-h-screen justify-center text-center text-black">
      <div className="bg-white border rounded-3xl px-10 py-8 transition-all duration-300 hover:shadow">
        <h1 className="text-3xl font-bold mb-6">📚 My Classes</h1>
        <div className="flex flex-row space-x-4">
          <Link to='/add-class'>
            <button
              className="text-black font-semibold border-2 border-black bg-yellow-300 hover:bg-emerald-500 transition-colors duration-200 px-6 py-2 rounded-lg"
            >
              Add a Class
            </button>
          </Link>
          <Link to='/class-list'>
            <button
              className="text-black font-semibold bg-white border border-gray-300 hover:bg-emerald-50 hover:border-emerald-400 transition-colors duration-200 px-6 py-2 rounded-lg"
            >
              View My Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
