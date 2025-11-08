import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarWidget() {
  const [date, setDate] = useState(new Date());
  
  // TODO: Replace with actual assignment/deadline data from context
  const [assignments, setAssignments] = useState({
    "2025-10-28": [
      { title: "Essay Draft", priority: "high", class: "English 101" },
      { title: "Lab Report", priority: "medium", class: "Biology" }
    ],
    "2025-10-29": [
      { title: "Math Problem Set", priority: "low", class: "Calculus" }
    ],
    "2025-11-01": [
      { title: "Midterm Exam", priority: "high", class: "History" }
    ],
  });

  const formattedDate = date.toISOString().split("T")[0];
  const dayAssignments = assignments[formattedDate] || [];

  const formatDisplayDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Highlight dates with assignments
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      if (assignments[dateStr]) {
        return 'has-assignments';
      }
    }
    return null;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 w-full h-[28rem] flex flex-col shadow-sm">
      {/* Header */}
      <div className="pb-3 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Calendar
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Select a date to view assignments
        </p>
      </div>

      {/* Calendar */}
      <div className="mb-4 calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          className="w-full border border-gray-200 rounded-lg shadow-sm"
          tileClassName={tileClassName}
        />
        <style jsx>{`
          .calendar-container :global(.has-assignments) {
            background: rgba(34, 197, 94, 0.1);
            font-weight: 600;
            color: #059669;
          }
          .calendar-container :global(.has-assignments:hover) {
            background: rgba(34, 197, 94, 0.2);
          }
        `}</style>
      </div>

      {/* Assignments Section */}
      <div className="flex-1 pt-3 mt-auto overflow-y-auto border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">
            {formatDisplayDate(date)}
          </h3>
          {dayAssignments.length > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200">
              {dayAssignments.length}
            </span>
          )}
        </div>
        
        {dayAssignments.length > 0 ? (
          <ul className="space-y-2">
            {dayAssignments.map((assignment, i) => (
              <li key={i} className="p-2 transition-colors border border-gray-200 rounded-lg bg-gray-50 hover:border-gray-300">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="flex-1 text-sm font-medium text-gray-900">
                    {assignment.title}
                  </span>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded border ${getPriorityColor(assignment.priority)}`}>
                    {assignment.priority}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{assignment.class}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-8 mb-2 text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM8 6a.75.75 0 0 1 .75.75V8H10a.75.75 0 0 1 0 1.5H8.75v1.25a.75.75 0 0 1-1.5 0V9.5H6a.75.75 0 0 1 0-1.5h1.25V6.75A.75.75 0 0 1 8 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-500">No assignments for this day</span>
          </div>
        )}
      </div>
    </div>
  );
}