import { useContext } from "react";
import { AssignmentsContext } from "../context/AssignmentsContext";
import { getPriorityColor, getStatusColor } from "../utils/colorUtils";
import { formatDate } from "../utils/dateUtils";

export default function AssignmentCard({ myAssignment }) {
  const { manageAssignment } = useContext(AssignmentsContext);

  const handleFocusMode = () => {
    // TODO: Implement Pomodoro focus mode
    console.log('Starting focus mode for:', myAssignment.assignmentTitle);
  };

  return (
    <div className="flex flex-col justify-between w-full p-4 transition-all duration-200 bg-white border border-gray-200 rounded-lg sm:flex-row sm:items-center hover:border-gray-300 hover:shadow-sm">
      {/* Left Section - Assignment Info */}
      <div className="flex-1 mb-3 sm:mb-0">
        <h3 className="mb-1 text-base font-semibold text-gray-900">
          {myAssignment.assignmentTitle}
        </h3>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Created {formatDate(myAssignment.createdAt)}</span>
        </div>
      </div>

      {/* Right Section - Badges & Actions */}
      {!manageAssignment ? (
        <div className="flex flex-wrap items-center gap-2">
          {/* Priority Badge */}
          <span className={`px-2.5 py-1 text-xs font-medium rounded border ${getPriorityColor(myAssignment.priority)}`}>
            {myAssignment.priority || 'Medium'}
          </span>

          {/* Deadline Badge */}
          <span className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded border border-gray-200 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="M5.75 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 5.75 3ZM10.25 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75ZM3.5 6A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6h-9Z" />
            </svg>
            {formatDate(myAssignment.deadline) || 'No deadline'}
          </span>

          {/* Status Badge */}
          <span className={`px-2.5 py-1 text-xs font-medium rounded border ${getStatusColor(myAssignment.status || 'In Progress')}`}>
            {myAssignment.status || 'In Progress'}
          </span>

          {/* Focus Mode Button */}
          <button 
            onClick={handleFocusMode}
            className="px-3 py-1.5 text-xs font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors duration-200 active:scale-95 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3.5 h-3.5"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              <path
                fillRule="evenodd"
                d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                clipRule="evenodd"
              />
            </svg>
            Focus
          </button>

          {/* View Notes Button */}
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200 active:scale-95">
            View Notes
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {/* Edit Button */}
          <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95">
            Edit
          </button>

          {/* Delete Button */}
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 active:scale-95">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}