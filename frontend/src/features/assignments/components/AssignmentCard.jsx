import { useContext, useState } from "react";
import { AssignmentsContext } from "../context/AssignmentsContext";
import { getPriorityColor, getStatusColor } from "../utils/colorUtils";
import { formatDate } from "../utils/dateUtils";
import toast from "react-hot-toast";

export default function AssignmentCard({ myAssignment }) {
  const { manageAssignment, removeAssignment, updateAssignment } =
    useContext(AssignmentsContext);

  // these are for updating priority through a dropdown options in assignment card
  const [priorityDropdown, setPriorityDropdown] = useState(false);
  const priorityOptions = ["Low", "Medium", "High"];
  //  these are for updating status through a dropdown options in assignment card
  const [statusDropdown, setStatusDropdown] = useState(false);
  const statusOptions = ["Not started", "In progress", "Completed"];

  const handleFocusMode = () => {
    console.log("Starting focus mode for:", myAssignment.assignmentTitle);
  };

  const handleDelete = () => {
    if (window.confirm(`Delete "${myAssignment.assignmentTitle}"?`)) {
      removeAssignment(myAssignment._id);
      toast.success("Assignment deleted successfully");
    }
  };

  return (
    <div className="flex flex-col justify-between w-full p-4 transition-all duration-200 bg-white border border-gray-200 rounded-lg sm:flex-row sm:items-center hover:border-gray-300 hover:shadow-sm">
      {/* Left Section - Assignment Info */}
      <div className="flex-1 mb-3 sm:mb-0">
        <h3 className="mb-1 text-base font-semibold text-gray-900">
          {myAssignment.assignmentTitle}
        </h3>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Created {formatDate(myAssignment.createdAt)}</span>
        </div>
      </div>

      {/* Badges & Actions */}
      {!manageAssignment ? (
        <div className="flex flex-wrap items-center gap-2">
          {/* Priority Badge */}
          <div className="relative">
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded border cursor-pointer ${getPriorityColor(
                myAssignment.priority
              )}`}
              onClick={() => {
                setPriorityDropdown((prev) => !prev);
                setStatusDropdown(false);
              }}
            >
              {myAssignment.priority || "Medium"}
            </span>

            {priorityDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px] overflow-hidden">
                <div className="flex flex-col gap-1 px-1 py-0.5 m-2 text-xs">
                  {priorityOptions.map((priorityOption, index) => (
                    <button
                      key={priorityOption || index}
                      className={`px-1 py-0.5 text-xs font-medium rounded border cursor-pointer ${getPriorityColor(
                        priorityOption
                      )}`}
                      onClick={async () => {
                          try {
                            await updateAssignment(myAssignment._id, {
                              priority: priorityOption,
                            });
                            setPriorityDropdown(false);
                            toast.success(
                              `${myAssignment.assignmentTitle} priority updated`
                            );
                          } catch (error) {
                            toast.error("Unable to update priority");
                          }
                      }}
                    >
                      {priorityOption}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Deadline Badge */}
          <span className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded border border-gray-200 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="M5.75 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 5.75 3ZM10.25 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75ZM3.5 6A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6h-9Z" />
            </svg>
            {formatDate(myAssignment.dueDate) || "No deadline"}
          </span>

          {/* Status Badge */}
          <div className="relative">
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded border cursor-pointer ${getStatusColor(
                myAssignment.status
              )}`}
              onClick={() => {
                setStatusDropdown((prev) => !prev);
                setPriorityDropdown(false);
              }}
            >
              {myAssignment.status}
            </span>
            {statusDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px] overflow-hidden">
                <div className="flex flex-col gap-1 px-1 py-0.5 m-2 text-xs">
                  {statusOptions.map((statusOption, index) => (
                    <button
                      key={statusOption || index}
                      className={`px-1 py-0.5 text-xs font-medium rounded border cursor-pointer ${getStatusColor(
                        statusOption
                      )}`}
                      onClick={async () => {
                        try {
                          // await the context update; AssignmentsContext now returns merged result
                          await updateAssignment(myAssignment._id, {
                            status: statusOption,
                          });
                          setStatusDropdown(false);
                          toast.success("Status updated");
                        } catch (err) {
                          toast.error("Unable to update status");
                        }
                      }}
                    >
                      {statusOption}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Focus Mode Button */}
          <button
            onClick={handleFocusMode}
            className="px-3 py-1.5 text-xs font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors duration-200 active:scale-95 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3.5 h-3.5"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              <path
                fillRule="evenodd"
                d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                clipRule="evenodd"
              />
            </svg>
            Focus
          </button>

          {/* View Notes Button */}
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200 active:scale-95">
            View Notes
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {/* Edit Button */}
          <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95">
            Edit
          </button>
          {/* Delete Button */}
          <button
            className="px-3 py-1.5 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 active:scale-95"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
