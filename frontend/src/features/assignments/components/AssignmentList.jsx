import { useContext, useEffect } from "react";
import AssignmentCard from "./AssignmentCard";
import AddAssignmentForm from "./AddAssignmentForm";
import { AssignmentsContext } from "../context/AssignmentsContext";

export default function AssignmentList({ singleClassData }) {
  const {
    myAssignments,
    manageAssignment,
    setManageAssignment,
    showAddAssignmentForm,
    setShowAddAssignmentForm
  } = useContext(AssignmentsContext);

  // Stop wiggle effect on cards when clicked outside any card on screen
  useEffect(() => {
    if (!manageAssignment) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest(".class-card") && !e.target.closest("button")) {
        setManageAssignment(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [manageAssignment, setManageAssignment]);

  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-6 bg-white border border-gray-200 shadow-sm rounded-xl">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          {singleClassData.classTitle} - Assignments
        </h1>
        <p className="mb-4 text-sm text-gray-500">
          View, track, and manage all assignments related to this class
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddAssignmentForm(true)}
            className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600 active:scale-95"
          >
            + Add Assignment
          </button>
          <button
            onClick={() => setManageAssignment(prev => !prev)}
            className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95"
          >
            {manageAssignment ? "Done" : "Manage"}
          </button>
        </div>
      </div>

      {/* Assignments List */}
      <div className="p-6">
        {myAssignments.length > 0 ? (
          <div className="space-y-3">
            {myAssignments.map((myAssignment, index) => (
              <AssignmentCard key={myAssignment._id || index} myAssignment={myAssignment} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 mb-4 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
            <p className="mb-1 text-lg font-medium text-gray-900">No assignments yet</p>
            <p className="mb-4 text-sm text-gray-500">Get started by adding your first assignment</p>
            <button
              onClick={() => setShowAddAssignmentForm(true)}
              className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600"
            >
              + Add Your First Assignment
            </button>
          </div>
        )}
      </div>

      {/* Add Assignment Form Modal */}
      {showAddAssignmentForm && <AddAssignmentForm singleClassData={singleClassData} />}
    </div>
  );
}