import React, { useContext, useState } from "react";
import { ClassesContext } from "../../contexts/ClassesContext";

export default function AddClassForm({setShowAddForm}) {

  const [title,setTitle] = useState("");
  const [instructor,setInstructor] = useState("");
  const [description,setDescription] = useState("")
  const {addNewClassFunction} = useContext(ClassesContext);

  const addNewClassHandler = (event) => {
        event.preventDefault();
        const newClass = {
            title,
            instructor,
            description
        };
        addNewClassFunction(newClass);
        console.log('A new class added successfully')
    }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <form 
      className="bg-white text-black rounded-2xl shadow-2xl p-6 w-full max-w-md space-y-5 animate-scaleIn"
      onSubmit={addNewClassHandler}
      >
        <h2 className="text-xl font-semibold text-center border-b pb-2 text-shadow-lg">
          🆕 Add a new Class
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
            value={title}
            onChange={(event)=>setTitle(event.target.value)}
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
            value={instructor}
            onChange={(event)=>setInstructor(event.target.value)}
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
            value={description}
            onChange={(event)=>setDescription(event.target.value)}
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
