import React from "react";
import { Link } from "react-router-dom";

export default function MyClasses() {

  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-6 w-full min-h-96 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">My Classes</h2>

      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-3">
            <li
              className="border-gray-50 bg-rose-100 rounded-lg p-3 hover:bg-gray-50 transition"
            >
              <p className="font-medium">class name</p>
              <p className="text-sm text-gray-500">instructor name</p>
              <p className="text-xs text-gray-400">progress</p>
            </li>
        </ul>
      </div>
          <Link to='/my-classes' className="self-end">
              <button className="mt-4 text-sm text-white font-semibold p-2 rounded-xl bg-black">
                View all
              </button>
          </Link>
    </div>
  );
}
