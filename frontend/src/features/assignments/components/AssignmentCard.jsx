import { useContext, useState, useRef, useEffect } from "react";
import { AssignmentsContext } from "../context/AssignmentsContext";
import { getPriorityColor, getStatusColor } from "../utils/colorUtils";
import { formatDate } from "../utils/dateUtils";
import toast from "react-hot-toast";

export default function AssignmentCard({ myAssignment }) {
  const { manageAssignment, removeAssignment, updateAssignment } =
    useContext(AssignmentsContext);

  const [assignmentTitle, setAssignmentTitle] = useState(
    myAssignment.assignmentTitle
  );
  const [updateAssignmentTitle, setUpdateAssignmentTitle] = useState(false);
  // these are for updating priority through a dropdown options in assignment card
  const [priorityDropdown, setPriorityDropdown] = useState(false);
  const priorityOptions = ["Low", "Medium", "High"];
  //  these are for updating status through a dropdown options in assignment card
  const [statusDropdown, setStatusDropdown] = useState(false);
  const statusOptions = ["Not Started", "In Progress", "Completed"];
  //  these refs are used so that dropdowns are automatically closed when clicked outside
  const priorityRef = useRef(null);
  const statusRef = useRef(null);
  // these are for updating due date through a dropdown in assignment card
  const [dueDateDropdown, setDueDateDropdown] = useState(false);
  const dueDateRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (priorityRef.current && !priorityRef.current.contains(event.target)) {
        setPriorityDropdown(false);
      }
      if (statusRef.current && !statusRef.current.contains(event.target)) {
        setStatusDropdown(false);
      }
      if (dueDateRef.current && !dueDateRef.current.contains(event.target))
        setDueDateDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Delete "${myAssignment.assignmentTitle}"?`)) {
      removeAssignment(myAssignment._id);
      toast.success("Assignment deleted successfully");
    }
  };

  const handleUpdateAssignmentTitle = async (event) => {
    event.preventDefault();
    if (!assignmentTitle.trim()) {
      toast.error("Assignment Title cannot remain empty");
      return;
    }
    try {
      await updateAssignment(myAssignment._id, { assignmentTitle });
      setUpdateAssignmentTitle(false);
      toast.success("Assignment title updated!")
    } catch (error) {
      toast.error("Unable to update assignment title");
    }
  };

  return (
    <div className="flex flex-col justify-between w-full p-4 transition-all duration-200 bg-white border border-gray-200 rounded-lg sm:flex-row sm:items-center hover:border-gray-300 hover:shadow-sm">
      <div className="flex-1 mb-3 sm:mb-0">
        {!updateAssignmentTitle && (
          <h3
            className="mb-1 text-base font-semibold text-gray-900"
            onDoubleClick={() => setUpdateAssignmentTitle(true)}
          >
            {myAssignment.assignmentTitle}
          </h3>
        )}
        {updateAssignmentTitle && (
          <form onSubmit={handleUpdateAssignmentTitle} className="mb-1">
            <input
              type="text"
              value={assignmentTitle}
              onChange={(e) => setAssignmentTitle(e.target.value)}
              onBlur={() =>
                handleUpdateAssignmentTitle({ preventDefault: () => {} })
              }
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setUpdateAssignmentTitle(false);
                  setAssignmentTitle(myAssignment.assignmentTitle);
                }
              }}
              autoFocus
              className="w-[50%] px-2 py-1 text-base font-semibold text-gray-900 border-2 border-green-500 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none bg-green-50"
            />
          </form>
        )}
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

      {/* badges for assignment : priority, status, due date */}
      {!manageAssignment ? (
        <div className="flex flex-wrap items-center gap-2">
          {/* Priority Badge */}
          <div className="relative" ref={priorityRef}>
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded border cursor-pointer ${getPriorityColor(
                myAssignment.priority
              )}`}
              onClick={() => {
                setPriorityDropdown((prev) => !prev);
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
          {/* Status Badge */}
          <div className="relative" ref={statusRef}>
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded border cursor-pointer ${getStatusColor(
                myAssignment.status
              )}`}
              onClick={() => {
                setStatusDropdown((prev) => !prev);
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
          {/* Due Date Badge */}
          <div className="relative" ref={dueDateRef}>
            <span
              className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded border border-gray-200 flex items-center gap-1 cursor-pointer hover:bg-gray-200 transition"
              onClick={() => setDueDateDropdown((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path d="M5.75 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 5.75 3ZM10.25 3a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75ZM3.5 6A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6h-9Z" />
              </svg>
              {myAssignment.dueDate
                ? formatDate(myAssignment.dueDate)
                : "No due date"}
            </span>

            {dueDateDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 min-w-[200px]">
                <label className="block mb-1 text-xs text-gray-600">
                  Update Due Date
                </label>
                <input
                  type="datetime-local"
                  defaultValue={
                    myAssignment.dueDate
                      ? new Date(myAssignment.dueDate)
                          .toISOString()
                          .slice(0, 16)
                      : ""
                  }
                  id={`due-date-${myAssignment._id}`}
                  className="w-full px-2 py-1 mb-2 text-xs border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
                />
                <div className="flex justify-end gap-1">
                  <button
                    onClick={() => setDueDateDropdown(false)}
                    className="px-2 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={async () => {
                      const input = document.getElementById(
                        `due-date-${myAssignment._id}`
                      );
                      const newDate = input.value;
                      try {
                        await updateAssignment(myAssignment._id, {
                          dueDate: newDate,
                        });
                        toast.success("Due date updated");
                        setDueDateDropdown(false);
                      } catch {
                        toast.error("Unable to update due date");
                      }
                    }}
                    className="px-2 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* View Notes Button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all duration-200 active:scale-95">
            <i className="bi bi-pencil-square text-[13px]"></i>
            Manage Notes
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
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
