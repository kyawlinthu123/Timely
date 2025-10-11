import React from "react";
import { Link } from "react-router-dom";

export default function MyClasses() {

  return (
    <div className="bg-gray-100 rounded-2xl p-6 w-full min-h-96 flex flex-col shadow-xl/30">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        🗂️ My Classes
      </h2>
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-3">
            <li
              className="bg-teal-200 font-semibold rounded-lg p-3 hover:bg-teal-300 transition hadow-xl/30 shadow-teal-400 border-2 border-green-400"
            >
              <p className="font-bold">📌 CS101</p>
              <p className="text-sm text-gray-500"> by Fireship</p>
              <p className="text-xs text-gray-400 ">In progress</p>
            </li>
        </ul>
      </div>
          <Link to='/my-classes' className="self-end">
              <button className="mt-4 px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg">
                View All
              </button>
          </Link>
    </div>
  );
}
