import React from "react";

export default function FocusStats() {
  // TODO: Replace with actual focus session data from context
  const stats = {
    todaySessions: 3,
    todayMinutes: 75,
    weekStreak: 5,
    totalSessions: 42,
  };

  const StatCard = ({ icon, label, value, subtext }) => (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs font-medium text-gray-600">{label}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      {subtext && <div className="mt-1 text-xs text-gray-500">{subtext}</div>}
    </div>
  );

  return (
    <div className="flex flex-col w-full p-5 bg-white border border-gray-200 shadow-sm rounded-xl min-h-96">
      {/* Header */}
      <div className="pb-3 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Focus Stats
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Your pomodoro session tracking
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-green-600"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="Today"
          value={stats.todaySessions}
          subtext="sessions"
        />

        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-purple-600"
            >
              <path d="M5.75 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 5.75 3ZM10.25 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75ZM3.5 6A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6h-9Z" />
            </svg>
          }
          label="This Week"
          value={stats.weekStreak}
          subtext="day streak"
        />

        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-blue-600"
            >
              <path
                fillRule="evenodd"
                d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-.978.569-.978 1.237a.75.75 0 1 0 1.5 0c0-1.555 1.375-2.49 2.57-2.864a2.5 2.5 0 0 0-4.88-.568.75.75 0 1 0 1.487.193.999.999 0 0 1 .311-.665Z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="Focus Time"
          value={`${stats.todayMinutes}m`}
          subtext="today"
        />

        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-amber-600"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="All Time"
          value={stats.totalSessions}
          subtext="sessions"
        />
      </div>

      {/* View All Button */}
      <button className="w-full py-2 mt-4 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95">
        View All Sessions
      </button>
    </div>
  );
}