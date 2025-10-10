import React from "react";

export default function AddClassForm({ setShowAddForm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <form className="bg-white text-black rounded-2xl shadow-2xl p-6 w-full max-w-md space-y-5 animate-scaleIn">
        <h2 className="text-xl font-semibold text-center border-b pb-2">
          Add a New Class
        </h2>
        <div>
          <label
            htmlFor="class-name"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Class
          </label>
          <input
            type="text"
            id="class-name"
            // placeholder="e.g., Introduction to Web Development"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="instructor"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Instructor (optional)
          </label>
          <input
            type="text"
            id="instructor"
            // placeholder="e.g., Mr. Aung Kyaw"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="3"
            // placeholder="Write a short description for this class..."
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none resize-none"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-3 pt-2">
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
