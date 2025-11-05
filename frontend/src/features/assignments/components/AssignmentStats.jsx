export default function AssignmentStats({stats}) {
  const {totalAssignments, completedAssignments, activeAssignments, overdueAssignments, totalStudyTime} = stats;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {/* Total Assignments */}
      <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
        <div className="flex items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 text-gray-600"
          >
            <path d="M2.5 3.5A1.5 1.5 0 0 1 4 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 10.121 4H12a1.5 1.5 0 0 1 1.5 1.5v1.75a.75.75 0 0 1-1.5 0V5.5a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.75a.75.75 0 0 1 1.5 0V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Z" />
          </svg>
          <span className="text-xs font-medium text-gray-600">Total</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{totalAssignments}</p>
      </div>

      {/* Active Assignments */}
      <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
        <div className="flex items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs font-medium text-gray-600">Active</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{activeAssignments}</p>
      </div>

      {/* Completed */}
      <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
        <div className="flex items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 text-green-600"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs font-medium text-gray-600">Done</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">
          {completedAssignments}
        </p>
      </div>

      {/* Study Time */}
      <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
        <div className="flex items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 text-purple-600"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path
              fillRule="evenodd"
              d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs font-medium text-gray-600">Study Time</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{totalStudyTime}h</p>
      </div>
    </div>
  );
}
