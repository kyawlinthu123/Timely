import React from "react";

export default function UpcomingDeadlines() {
  // TODO: Replace with actual data from context/API
  const deadlines = [
    {
      id: 1,
      title: "Essay Draft",
      due: "Oct 12",
      dueTime: "11:59 PM",
      course: "English 101",
      priority: "high",
    },
    {
      id: 2,
      title: "Lab Report",
      due: "Oct 15",
      dueTime: "3:00 PM",
      course: "Computer Science",
      priority: "medium",
    },
    {
      id: 3,
      title: "Math Homework",
      due: "Oct 18",
      dueTime: "9:00 AM",
      course: "Mathematics",
      priority: "low",
    },
  ];

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-50 border-red-200 hover:bg-red-100";
      case "medium":
        return "bg-amber-50 border-amber-200 hover:bg-amber-100";
      case "low":
        return "bg-blue-50 border-blue-200 hover:bg-blue-100";
      default:
        return "bg-gray-50 border-gray-200 hover:bg-gray-100";
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return (
          <span className="px-2 py-0.5 text-xs font-medium text-red-700 bg-red-100 rounded border border-red-200">
            High
          </span>
        );
      case "medium":
        return (
          <span className="px-2 py-0.5 text-xs font-medium text-amber-700 bg-amber-100 rounded border border-amber-200">
            Medium
          </span>
        );
      case "low":
        return (
          <span className="px-2 py-0.5 text-xs font-medium text-blue-700 bg-blue-100 rounded border border-blue-200">
            Low
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      {/* Header */}
      <div className="pb-3 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Upcoming Deadlines
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          {deadlines.length} assignment{deadlines.length !== 1 ? "s" : ""} due
          soon
        </p>
      </div>

      {/* Deadlines List */}
      <div className="flex-1 mb-4 overflow-y-auto">
        {deadlines.length > 0 ? (
          <ul className="space-y-2">
            {deadlines.map((deadline) => (
              <li
                key={deadline.id}
                className={`p-3 border rounded-lg transition-all duration-200 cursor-pointer ${getPriorityStyles(
                  deadline.priority
                )}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="flex-1 text-sm font-semibold leading-tight text-gray-900">
                    {deadline.title}
                  </p>
                  {getPriorityBadge(deadline.priority)}
                </div>
                <p className="mb-1 text-xs text-gray-600">{deadline.course}</p>
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
                  <span>
                    Due {deadline.due} at {deadline.dueTime}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-sm text-gray-500">No upcoming deadlines</p>
          </div>
        )}
      </div>

      <button className="flex items-center justify-center w-full gap-2 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm active:scale-[0.98]">
            <span>Calendar View</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
    </div>
  );
}
