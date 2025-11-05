import { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import AddAssignmentForm from "./AddAssignmentForm";
import { AssignmentsContext } from "../context/AssignmentsContext";
import axiosInstance from "../../../api/axiosInstance";
import { LoadingSkeleton } from "../../common/Loading";
import AssignmentStats from "./AssignmentStats";

export default function AssignmentList() {
  const location = useLocation();
  const classData = location.state; // Class data passed from navigation
  const [activeTab, setActiveTab] = useState("all"); // all, active, completed, overdue
  const [loading,setLoading] = useState(false);

  const {
    myAssignments,
    setMyAssignments,
    manageAssignment,
    setManageAssignment,
    showAddAssignmentForm,
    setShowAddAssignmentForm,
  } = useContext(AssignmentsContext);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        setLoading(true)
        const response = await axiosInstance.get(
          `/assignments?classId=${classData._id}`
        );
        setMyAssignments(response.data);
      } catch (error) {
        console.log("Failed to fetch class assignments:", error.message);
      }
      finally {
        setLoading(false);
      }
    };
    if (classData?._id){
      fetchAssignments();
    }
  }, [classData,setMyAssignments]);

  // These variables are used for displaying assignment stats related to each class
  const totalAssignments = myAssignments.length;
  const completedAssignments = myAssignments.filter(
    (myAssignment) => myAssignment.status === "Completed"
  ).length;
  const activeAssignments = myAssignments.filter(
    (myAssignment) => myAssignment.status === "In progress"
  ).length;
  const overdueAssignments = myAssignments.filter((myAssignment) => {
    return new Date(myAssignment.deadline) < new Date() && myAssignment.status !== "Completed";
  }).length;
  const totalStudyTime = 0; // TODO: Calculate from focus sessions

  // This function is used for filtering assignments based on the status of active tab
  const getFilteredAssignments = () => {
    switch (activeTab) {
      case "active":
        return myAssignments.filter((myAssignment) => myAssignment.status === "In progress");
      case "completed":
        return myAssignments.filter((myAssignment) => myAssignment.status === "Completed");
      case "overdue":
        return myAssignments.filter(
          (myAssignment) => new Date(myAssignment.deadline) < new Date() && myAssignment.status !== "Completed"
        );
      default:
        return myAssignments;
    }
  };

  const filteredAssignments = getFilteredAssignments();

  // skeleton loader
   if (loading) {
    return (
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6">
      {/* Class Header */}
      <div className="p-6 mb-6 bg-white border border-gray-200 shadow-sm rounded-xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              {classData?.classTitle || "Class Name"}
            </h1>
            <p className="text-sm text-gray-600">
              {classData?.instructor || "Instructor Name"}
            </p>
          </div>
        </div>

        {/* Description */}
        {classData?.description && (
          <p className="mb-4 text-sm text-gray-600">
            {classData.description}
          </p>
        )}

        {/* Quick Stats Cards */}
        <AssignmentStats
        stats={{
          totalAssignments,
          completedAssignments,
          activeAssignments,
          overdueAssignments,
          totalStudyTime
        }}
        />
      </div>

      {/* Assignment Panel */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl">
        {/* Panel Header with Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900">Assignments</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAddAssignmentForm(true)}
                className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600 active:scale-95"
              >
                + Add Assignment
              </button>
              <button
                onClick={() => setManageAssignment((prev) => !prev)}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
              >
                {manageAssignment ? "Done" : "Manage"}
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95">
                ⏱ Start Focus
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 px-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                activeTab === "all"
                  ? "bg-white text-gray-900 border-t-2 border-x border-gray-200 border-t-green-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              All ({totalAssignments})
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                activeTab === "active"
                  ? "bg-white text-gray-900 border-t-2 border-x border-gray-200 border-t-green-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Active ({activeAssignments})
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                activeTab === "completed"
                  ? "bg-white text-gray-900 border-t-2 border-x border-gray-200 border-t-green-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Completed ({completedAssignments})
            </button>
              <button
                onClick={() => setActiveTab("overdue")}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === "overdue"
                    ? "bg-white text-gray-900 border-t-2 border-x border-gray-200 border-t-red-500"
                    : "text-red-600 hover:text-red-700 hover:bg-red-50"
                }`}
              >
                Overdue ({overdueAssignments})
              </button>
          </div>
        </div>

        {/* Assignment List */}
        <div className="p-6">
          {filteredAssignments.length > 0 ? (
            <div className="space-y-3">
              {filteredAssignments.map((myAssignment) => (
                <AssignmentCard
                  key={myAssignment._id}
                  myAssignment={myAssignment}
                />
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
              <p className="mb-1 text-lg font-medium text-gray-900">
                No {activeTab !== "all" ? activeTab : ""} assignments
              </p>
              <p className="mb-4 text-sm text-gray-500">
                {activeTab === "all"
                  ? "Get started by adding your first assignment"
                  : `You have no ${activeTab} assignments`}
              </p>
              {activeTab === "all" && (
                <button
                  onClick={() => setShowAddAssignmentForm(true)}
                  className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600"
                >
                  + Add Your First Assignment
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Add Assignment Form Modal */}
      {showAddAssignmentForm && (
        <AddAssignmentForm classData={classData} />
      )}
    </div>
  );
}
