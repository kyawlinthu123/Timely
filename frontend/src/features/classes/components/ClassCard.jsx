import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ClassesContext } from "../context/ClassesContext";
import EditClassForm from "./EditClassForm";
import toast from "react-hot-toast";
import truncateText from "../../../utils/truncateText";
import { AssignmentsContext } from "../../assignments/context/AssignmentsContext";

export default function ClassCard({ myClass }) {
  const { removeClass, isManaging} = useContext(ClassesContext);
  const {myAssignments} = useContext(AssignmentsContext);
   const [showEditForm, setShowEditForm] = useState(false);
   const MAX_DESCRIPTION_LENGTH = 45;

  const handleDelete = () => {
    if (window.confirm(`Delete "${myClass.classTitle}"?`)) {
      removeClass(myClass._id);
      toast.success(`"${myClass.classTitle}" has been deleted.`)
    }
  };

  const handleUpdate = () => {
    setShowEditForm(true);
  };

  const totalAssignments = myAssignments.length
  const overdueCount = myAssignments.filter(
    (myAssignment) => (
      new Date(myAssignment.dueDate) < new Date() &&
      myAssignment.status !== "Completed"
    )
  ).length;
  const upcomingCount = myAssignments.filter(
    (myAssignment) => myAssignment.status === "Not Started"
  ).length;

  return (
    <div className="relative w-full max-w-sm p-5 transition-all duration-200 bg-white border border-gray-200 shadow-sm class-card rounded-xl hover:shadow-md hover:border-gray-300">
      {/* Header with title and delete button */}
        <h5 className="flex-1 mb-1 text-lg font-semibold leading-tight text-gray-900 break-words">
          {myClass.classTitle}
        </h5>
      {/* Instructor */}
      <p className="mb-3 text-xs font-medium text-gray-500">
        {myClass.instructor}
      </p>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        {truncateText(myClass.description, MAX_DESCRIPTION_LENGTH)}
      </p>
      {/* Assignment Stats */}
      <div className="pb-4 mb-4 border-b border-gray-100">
        {/* Counter badges */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium mb-2.5">
          <span className="px-2 py-1 text-gray-700 border border-gray-200 rounded bg-gray-50">
            {totalAssignments} assignment{myAssignments.length > 1 ? "s" : "" }
          </span>
          {overdueCount > 0 && (
            <span className="flex items-center gap-1 px-2 py-1 text-red-700 border border-red-200 rounded bg-red-50">
              {overdueCount} overdue
            </span>
          )}
          {upcomingCount > 0 && (
            <span className="px-2 py-1 border rounded bg-amber-50 text-amber-700 border-amber-200">
              {upcomingCount} upcoming
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        {!isManaging && (
          <Link
            to={`/my_classes/${myClass._id}`}
            state={myClass}
            className="px-3 py-2 text-xs font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95"
          >
            View Assignments
          </Link>
        )}
        {isManaging && (
          <>
            <Link
              onClick={handleUpdate}
              state={myClass}
              className="px-3.5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
            >
              Edit
            </Link>
            <button 
            className="px-3 py-1.5 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 active:scale-95"
            onClick={handleDelete}
            >
              Delete
            </button>
          </>
        )}
      </div>
      {showEditForm && <EditClassForm myClass={myClass} setShowEditForm={setShowEditForm} />}
    </div>
  );
}
