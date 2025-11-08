import React from "react";

export default function TodaysOverview() {
  // TODO: Replace with actual data from context
  const todayAssignments = 3; // Count assignments where deadline = today
  const overdueAssignments = 1; // Count assignments where deadline < today
  const totalAssignments = 12; // Total assignments across all classes
  const completedToday = 2; // Count completed assignments today

  // Calculate completion percentage
  const completionPercentage = totalAssignments > 0 
    ? Math.round((completedToday / todayAssignments) * 100) 
    : 0;

  // Determine if user is on track
  const isOnTrack = overdueAssignments === 0;

  return (
    <div className="flex flex-col w-full p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      {/* Header */}
      <div className="pb-3 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Today's Overview
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Due Today */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-blue-600"
            >
              <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-600">Due Today</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{todayAssignments}</p>
        </div>

        {/* Overdue */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-red-600"
            >
              <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-600">Overdue</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{overdueAssignments}</p>
        </div>

        {/* Total Active */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-gray-600"
            >
              <path d="M2.5 3.5A1.5 1.5 0 0 1 4 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 10.121 4H12a1.5 1.5 0 0 1 1.5 1.5v1.75a.75.75 0 0 1-1.5 0V5.5a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.75a.75.75 0 0 1 1.5 0V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Z" />
            </svg>
            <span className="text-xs font-medium text-gray-600">Total Active</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{totalAssignments}</p>
        </div>

        {/* Completed Today */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-green-600"
            >
              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-600">Completed</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{completedToday}</p>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-700">Today's Progress</span>
          <span className="text-xs font-semibold text-gray-900">{completionPercentage}%</span>
        </div>
        <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
          <div 
            className="h-full transition-all duration-500 bg-green-500 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        {isOnTrack ? (
          <div className="flex items-center gap-2 px-3 py-2 border border-green-200 rounded-lg bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-green-600"
            >
              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-green-700">You're on track! No overdue assignments</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 border border-red-200 rounded-lg bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-red-600"
            >
              <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-red-700">
              {overdueAssignments} overdue - catch up today!
            </span>
          </div>
        )}
      </div>

      {/* Quick Action Button */}
      <button className="w-full py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95">
        View All Assignments
      </button>
    </div>
  );
}