import React from "react";

export default function FocusStats() {
  // TODO: Replace with actual data from context
  const todaySessions = 2; // Count of today's focus sessions
  const todayMinutes = 50; // Total minutes focused today
  const weekSessions = 8; // This week's total sessions
  const totalSessions = 24; // All time sessions

  // Helper function to format minutes to hours/minutes
  const formatTime = (minutes) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="flex flex-col w-full p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      {/* Header */}
      <div className="pb-3 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Focus Stats
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Your study session tracking
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Today Sessions */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-purple-600"
            >
              <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-600">Today</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{todaySessions}</p>
          <p className="mt-1 text-xs text-gray-500">sessions</p>
        </div>

        {/* Today Time */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-blue-600"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-600">Focus Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatTime(todayMinutes)}</p>
          <p className="mt-1 text-xs text-gray-500">today</p>
        </div>

        {/* This Week */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-green-600"
            >
              <path d="M5.75 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 5.75 3ZM10.25 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75ZM3.5 6A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6h-9Z" />
            </svg>
            <span className="text-xs font-medium text-gray-600">This Week</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{weekSessions}</p>
          <p className="mt-1 text-xs text-gray-500">sessions</p>
        </div>

        {/* All Time */}
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-amber-600"
            >
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-600">All Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{totalSessions}</p>
          <p className="mt-1 text-xs text-gray-500">total</p>
        </div>
      </div>

      {/* Quick Action Button */}
      <button className="w-full py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95">
        View Session History
      </button>
    </div>
  );
}