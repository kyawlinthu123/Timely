// src/components/Assignments/AddAssignmentForm.jsx
import React, { useContext, useState, useEffect } from "react";
import { ClassesContext } from "../../contexts/ClassesContext";
import { AssignmentsContext } from "../../contexts/AssignmentsContext";

export default function AddAssignmentForm({singleClassData}) {

  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [priority,setPriority] = useState("medium")
  const [deadline,setDeadline] = useState("");

  const {addNewAssignment, setShowAddAssignmentForm} = useContext(AssignmentsContext);

  // for created date and time feature
  const [createdAt, setCreatedAt] = useState("");
  useEffect(() => {
    const now = new Date();
    setCreatedAt(now.toISOString());
  }, []);

  const addNewAssignmentHandler = (event) =>{
    event.preventDefault();
    const newAssignment = {
      assignmentTitle,
      classTitle : singleClassData.title,
      priority,
      deadline,
      createdAt
    }
    addNewAssignment(newAssignment);
    setShowAddAssignmentForm(false);
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
            Assignment name
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
            Class name
          </label>
          <input
            type="text"
            id="class-name"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-400 focus:border-green-400 outline-none read-only:cursor-not-allowed"
            defaultValue={singleClassData.title}
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
          </div>

          {/* Deadline */}
          <div className="w-1/2">
          <input class="hs-datepicker py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-600 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-neutral-500" type="text" placeholder="Select day" readonly="" data-hs-datepicker='{
    "type": "default",
    "dateMax": "2050-12-31",
    "mode": "custom-select",
    "templates": {
      "arrowPrev": "<button data-vc-arrow=\"prev\"><svg class=\"shrink-0 size-4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m15 18-6-6 6-6\"></path></svg></button>",
      "arrowNext": "<button data-vc-arrow=\"next\"><svg class=\"shrink-0 size-4\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m9 18 6-6-6-6\"></path></svg></button>"
    }
  }'></input>
        </div>

        {/* Created At (hidden field, stored only) */}
        <input
          type="hidden"
          id="assignment-created-at"
          value={createdAt}
          readOnly
        />

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
