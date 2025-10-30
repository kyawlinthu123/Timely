import { useContext } from "react";
import { ClassesContext } from "../context/ClassesContext";

export default function NoClassesYet() {
  const {setShowAddForm} = useContext(ClassesContext);
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-16 h-16 mb-4 text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
      <p className="mb-1 text-lg font-medium text-gray-900">No classes yet</p>
      <p className="mb-4 text-sm text-gray-500">
        Get started by adding your first class
      </p>
      <button
        className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600"
        onClick={() => setShowAddForm(true)}
      >
        + Add Your First Class
      </button>
    </div>
  );
}
