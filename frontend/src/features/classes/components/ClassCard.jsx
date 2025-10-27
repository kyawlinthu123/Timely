import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/CardWiggleAnimation.css"
import { ClassesContext } from "../context/ClassesContext";

export default function ClassCard({ myClass }) {
  const { removeClass, isManaging } = useContext(ClassesContext);

  const truncateText = (text, maxLength = 45) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleDelete = () => {
    if (window.confirm(`Delete "${myClass.classTitle}"?`)) {
      removeClass(myClass._id);
    }
  };

  // TODO: Calculate these from actual assignment data
  const totalAssignments = 5;
  const overdueCount = 1;
  const upcomingCount = 2;

  return (
    <div
      className={`class-card relative w-full max-w-sm p-5 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300 ${
        isManaging ? "wiggle" : ""
      }`}
    >
      {/* Header with title and delete button */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h5 className="flex-1 text-lg font-semibold leading-tight text-gray-900 break-words">
          {myClass.classTitle}
        </h5>
        {isManaging && (
          <button 
            aria-label="Delete class"
            className="flex-shrink-0 p-1 transition-colors duration-200 rounded-md hover:bg-red-50 group"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-gray-400 transition-colors duration-200 group-hover:text-red-500"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Instructor */}
      <p className="mb-3 text-xs font-medium text-gray-500">
        {myClass.instructor}
      </p>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        {truncateText(myClass.description)}
      </p>

      {/* Assignment Stats */}
      <div className="pb-4 mb-4 border-b border-gray-100">
        {/* Counter badges */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium mb-2.5">
          <span className="px-2 py-1 text-gray-700 border border-gray-200 rounded bg-gray-50">
            {totalAssignments} tasks
          </span>
          {overdueCount > 0 && (
            <span className="flex items-center gap-1 px-2 py-1 text-red-700 border border-red-200 rounded bg-red-50">
              {overdueCount} overdue
            </span>
          )}
          {upcomingCount > 0 && (
            <span className="px-2 py-1 border rounded bg-amber-50 text-amber-700 border-amber-200">
              {upcomingCount} upcoming
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <Link
          to={`/my-classes/${myClass._id}`}
          state={myClass}
          className="px-3.5 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200 active:scale-95"
        >
          View Class
        </Link>
        {isManaging && (
          <Link
            to={`/my-classes/${myClass._id}/edit`}
            state={myClass}
            className="px-3.5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
          >
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}