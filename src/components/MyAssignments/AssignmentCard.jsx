// src/components/AssignmentCard.jsx
import React, { useContext } from "react";
import { AssignmentsContext } from "../../contexts/AssignmentsContext";

export default function AssignmentCard() {

  const {manageAssignment} = useContext(AssignmentsContext);

  return (
    <div className="flex flex-col items-center justify-between w-full p-5 mb-3 transition bg-gray-100 border border-green-400 shadow-md md:flex-row md:items-center rounded-2xl hover:shadow-lg hover:scale-101">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-gray-800">
          📌 Install Figma on Windows Server
        </h3>
        <p className="text-sm text-gray-600">🕒 Created at 22 August 2024</p>
      </div>

      {!manageAssignment && <div className="flex flex-wrap items-center gap-3 mt-3 md:mt-0">
        <span className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-white bg-red-400 rounded-full">
          🔔 High
        </span>

        <span className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-white bg-blue-400 rounded-full">
          ⏳ 23 May 2024
        </span>

        <span className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-white rounded-full bg-amber-400">
          🎯 In Progress
        </span>

        <button className="text-white bg-green-400 border hover:bg-green-500 border-green-400 text-sm font-medium px-4 py-1.5 rounded-full transition hover:scale-105">
          📝 View Notes
        </button>
      </div>}
      {manageAssignment && <div className="flex flex-wrap items-center gap-1 mt-3 md:mt-0">
        <button className="text-black bg-gray-200 hover:bg-gray-300 font-medium px-4 py-1.5 rounded-full transition hover:scale-105">
          Edit
        </button>
        <button className="text-white bg-red-400 border hover:bg-red-500 border-green-400 font-medium px-4 py-1.5 rounded-full transition hover:scale-105">
          Delete
        </button>
      </div> }
    </div>
  );
}
