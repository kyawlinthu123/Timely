import { useContext, useState } from "react";
import AddClassForm from "./AddClassForm";
import ClassCard from "./ClassCard";
import { ClassesContext } from "../context/ClassesContext";
import NoClassesYet from "./NoClassesYet";

export default function ClassesList() {
  const { myClasses, showAddForm, setShowAddForm, isManaging, setIsManaging } =
    useContext(ClassesContext);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-6 mx-auto max-w-7xl sm:px-6">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-bold text-gray-900">My Classes</h1>
          <p className="text-sm text-gray-500">
            Click on a class to view assignments, notes, and stats
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600 active:scale-95"
            onClick={() => setShowAddForm(true)}
          >
            + Add Class
          </button>
          <button
            onClick={() => setIsManaging((prev) => !prev)}
            className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95"
          >
            {isManaging ? "Done" : "Manage"}
          </button>
        </div>
      </div>
      {myClasses.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {myClasses.map((myClass) => (
            <ClassCard key={myClass._id} myClass={myClass} />
          ))}
        </div>
      ) : (
        <NoClassesYet />
      )}

      {/* Add class form modal */}
      {showAddForm && <AddClassForm />}
    </div>
  );
}
