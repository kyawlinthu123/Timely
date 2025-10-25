import React, { useContext, useState } from "react";
import { ClassesContext } from "../../contexts/ClassesContext";

export default function AddClassForm({setShowAddForm}) {

  const [title,setTitle] = useState("");
  const [instructor,setInstructor] = useState("");
  const [description,setDescription] = useState("")
  
  const {addNewClass} = useContext(ClassesContext);

  const addNewClassHandler = (event) => {
        event.preventDefault()
        const newClass = {
            title,
            instructor,
            description
        }
        addNewClass(newClass)
        setShowAddForm(false);
    }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <form 
      className="w-full max-w-md p-6 space-y-5 text-black bg-white shadow-2xl rounded-2xl animate-scaleIn"
      onSubmit={addNewClassHandler}
      >
        <h2 className="pb-2 text-xl font-semibold text-center border-b text-shadow-lg">
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
        <div className="flex justify-end pt-2 space-x-3">
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            className="px-4 py-2 font-medium bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
