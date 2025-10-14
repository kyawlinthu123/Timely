import React from "react";

export default function AssignmentTable({ singleClassData }) {
  const assignments = [
    {
      id: 1,
      title: "Essay Draft",
      class: "English 101",
      due: "2025-10-20 14:00",
      priority: "High",
      notes: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      class: "Web Dev",
      due: "2025-10-25 23:59",
      priority: "Medium",
      notes: false,
    },
    {
      id: 3,
      title: "Group Presentation",
      class: "Public Speaking",
      due: "2025-10-30 09:00",
      priority: "Low",
      notes: true,
    },
  ];

  const priorityColor = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600",
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 overflow-x-auto bg-white border border-green-400 rounded-xl shadow-xl/30">
      <table className="w-full text-left text-gray-700">
        <caption class="p-5 text-xl font-bold text-left bg-white border border-green-400 gap-1">
          📚 {singleClassData.title} Assignments
          <p class="mt-1 text-sm font-normal text-gray-600">
            View, track, and manage all assignments related to this class.
          </p>
          <div className="flex gap-2">
              <button className="px-4 py-2 mt-2 text-sm bg-green-400 border-green-400 shadow hover:bg-green-500 rounded-lg">
                Add assignment
              </button>
              <button className="px-4 py-2 mt-2 text-sm bg-gray-200 border-green-400 shadow hover:bg-gray-300 rounded-lg">
                Manage
              </button>
          </div>
        </caption>
        <thead className="bg-gray-50 text-xs uppercase text-gray-600">
          <tr>
            <th className="px-4 py-3 w-10 text-center rounded-tl-2xl">✔</th>
            <th className="px-4 py-3 w-1/4">Title</th>
            <th className="px-4 py-3 w-1/5">Class</th>
            <th className="px-4 py-3 w-1/6">Due</th>
            <th className="px-4 py-3 w-1/12">Priority</th>
            <th className="px-4 py-3 w-1/12 text-center">Notes</th>
            <th className="px-4 py-3 w-1/6 text-center rounded-tr-2xl">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((item) => (
            <tr
              key={item.id}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              {/* Checkbox */}
              <td className="px-4 py-3 text-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-green-500 cursor-pointer"
                />
              </td>

              {/* Title */}
              <td className="px-4 py-3 font-medium text-gray-900 truncate">
                {item.title}
              </td>

              {/* Class */}
              <td className="px-4 py-3">{item.class}</td>

              {/* Due */}
              <td className="px-4 py-3 text-gray-700">
                {new Date(item.due).toLocaleDateString()}{" "}
                <span className="text-xs text-gray-500">
                  {new Date(item.due).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </td>

              {/* Priority */}
              <td
                className={`px-4 py-3 font-semibold ${
                  priorityColor[item.priority]
                }`}
              >
                {item.priority}
              </td>

              {/* Notes */}
              <td className="px-4 py-3 text-center">
                {item.notes ? (
                  <span className="text-blue-500">📎</span>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>

              {/* Actions */}
              <td className="px-4 py-3 flex justify-center items-center space-x-5">
                {/* Edit */}
                <button
                  className="text-blue-600 hover:text-blue-800 transition"
                  title="Edit"
                >
                  ✏️
                </button>

                {/* Delete */}
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  title="Delete"
                >
                  🗑️
                </button>

                {/* Focus Mode */}
                <button
                  className="text-green-600 hover:text-green-800 transition"
                  title="Focus Mode"
                >
                  🎯
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
