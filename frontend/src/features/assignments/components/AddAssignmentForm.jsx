import { useContext, useState } from "react";
import { AssignmentsContext } from "../context/AssignmentsContext";
import toast from "react-hot-toast";

export default function AddAssignmentForm({ classData }) {
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Not Started");

  const { addNewAssignment, setShowAddAssignmentForm } = useContext(AssignmentsContext);

  const addNewAssignmentHandler = (event) => {
    event.preventDefault();
    try {
      const newAssignment = {
        assignmentTitle,
        classTitle: classData._id,
        priority,
        dueDate,
        status,
        createdAt: new Date().toISOString()
      };
      addNewAssignment(newAssignment);
      toast.success(`"${newAssignment.assignmentTitle}" has been created.`)
      setShowAddAssignmentForm(false);
    } catch (error) {
      toast.error("Unable to create assignment.")
    }
  };

  // Get min datetime (now)
  const getMinDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <form
        className="w-full max-w-md p-6 space-y-5 text-black bg-white shadow-xl rounded-xl animate-scaleIn"
        onSubmit={addNewAssignmentHandler}
      >
        {/* Header */}
        <div className="pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Add New Assignment
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Create a new assignment for {classData.classTitle}
          </p>
        </div>

        {/* Assignment Title */}
        <div>
          <label
            htmlFor="assignment-name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Assignment Title
          </label>
          <input
            type="text"
            id="assignment-name"
            value={assignmentTitle}
            onChange={(event) => setAssignmentTitle(event.target.value)}
            placeholder="e.g., Essay Draft, Problem Set 3"
            className="w-full px-3 py-2 text-sm transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Class Name (Read-only) */}
        <div>
          <label
            htmlFor="class-name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Class
          </label>
          <input
            type="text"
            id="class-name"
            className="w-full px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg cursor-not-allowed bg-gray-50"
            value={classData.classTitle}
            readOnly
          />
        </div>

        {/* Priority + Status */}
        <div className="grid grid-cols-2 gap-4">
          {/* Priority */}
          <div>
            <label
              htmlFor="assignment-priority"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="assignment-priority"
              className="w-full px-3 py-2 text-sm transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="assignment-status"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="assignment-status"
              className="w-full px-3 py-2 text-sm transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label
            htmlFor="assignment-due-date"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Due Date <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            type="datetime-local"
            id="assignment-due-date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
            min={getMinDateTime()}
            className="w-full px-3 py-2 text-sm transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <p className="mt-1 text-xs text-gray-500">
            Leave empty if no specific due date
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={() => setShowAddAssignmentForm(false)}
            className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600 active:scale-95"
          >
            Add Assignment
          </button>
        </div>
      </form>
    </div>
  );
}