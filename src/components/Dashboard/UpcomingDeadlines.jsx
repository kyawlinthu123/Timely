import React from "react";

export default function UpcomingDeadlines() {
  const deadlines = [
    { title: "Essay Draft", due: "Oct 12", course: "English 101" },
    { title: "CS Intro", due: "Oct 15", course: "Computer Science" },
    { title: "Math Homework", due: "Oct 18", course: "Mathematics" },
  ];

  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-6 w-full min-h-96 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Upcoming Deadlines
      </h2>

      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-3">
            <li
              className="bg-white font-semibold rounded-lg p-3"
            >
              <p className="font-medium">Essay Draft</p>
              <p className="text-sm text-gray-500">English</p>
              <p className="text-xs text-gray-400">Due: Oct 15</p>
            </li>
        </ul>
      </div>

      <button className="mt-4 self-end px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg">
        View all
      </button>
    </div>
  );
}
