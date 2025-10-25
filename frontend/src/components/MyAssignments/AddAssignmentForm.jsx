// src/components/Assignments/AddAssignmentForm.jsx
import React, { useContext, useState, useEffect } from "react";
import { ClassesContext } from "../../contexts/ClassesContext";
import { AssignmentsContext } from "../../contexts/AssignmentsContext";

export default function AddAssignmentForm({singleClassData}) {

  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [priority,setPriority] = useState("medium")
  const [deadline,setDeadline] = useState("");

  const {addNewAssignment, setShowAddAssignmentForm} = useContext(AssignmentsContext);

  //  for created date and time feature
  // const [createdAt, setCreatedAt] = useState("");
  // useEffect(() => {
  //   const now = new Date();
  //   setCreatedAt(now.toISOString());
  // }, []);

  const addNewAssignmentHandler = (event) =>{
    event.preventDefault();
   try { const newAssignment = {
      assignmentTitle,
      classTitle : singleClassData.title,
      priority,
      deadline
    }
    addNewAssignment(newAssignment);
    setShowAddAssignmentForm(false);}
    catch(error) {
      console.error("Submit failed:", error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <form 
      className="w-full max-w-md p-6 space-y-5 text-black bg-white shadow-2xl rounded-2xl animate-scaleIn"
      onSubmit={addNewAssignmentHandler}
      >
        <h2 className="pb-2 text-xl font-semibold text-center border-b text-shadow-lg">
          🆕 Add new Assignment
        </h2>

        {/* Assignment Name */}
        <div>
          <label
            htmlFor="assignment-name"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Assignment
          </label>
          <input
            type="text"
            id="assignment-name"
            value={assignmentTitle}
            onChange={(event)=>setAssignmentTitle(event.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none"
            required
          />
        </div>

        {/* Class Name */}
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
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none read-only:cursor-not-allowed"
            value={singleClassData.title}
            readOnly
          />
        </div>

        {/* Priority + Deadline */}
        <div className="flex space-x-4">
          {/* Priority */}
          <div className="w-1/2">
            <label
              htmlFor="assignment-priority"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Priority
            </label>
            <select
              id="assignment-priority"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none"
              value={priority}
              onChange={(event)=>setPriority(event.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Deadline */}
          <div className="w-1/2">
            <label
              htmlFor="assignment-deadline"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Deadline
            </label>
            <input
              type="datetime-local"
              id="assignment-deadline"
              value={deadline}
              onChange={(event)=> setDeadline(event.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none"
            />
          </div>
        </div>

        {/* Created At (hidden field, stored only)
        <input
          type="hidden"
          id="assignment-created-at"
          value={createdAt}
          readOnly
        /> */}

        {/* Buttons */}
        <div className="flex justify-end pt-2 space-x-3">
          <button
            type="button"
            onClick={() => setShowAddAssignmentForm(false)}
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
