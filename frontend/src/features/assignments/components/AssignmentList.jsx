import { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import AddAssignmentForm from "./AddAssignmentForm";
import { AssignmentsContext } from "../context/AssignmentsContext";
import axiosInstance from "../../../api/axiosInstance";
import { LoadingSkeleton } from "../../common/Loading";

export default function AssignmentList() {
  const location = useLocation();
  const singleClassData = location.state; // Class data passed from navigation
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
          `/assignments?classId=${singleClassData._id}`
        );
        setMyAssignments(response.data);
      } catch (error) {
        console.log("Failed to fetch class assignments:", error.message);
      }
      finally {
        setLoading(false);
      }
    };
    if (singleClassData?._id){
      fetchAssignments();
    }
  }, [singleClassData,setMyAssignments]);

  // TODO: Replace with actual data from context
  const totalAssignments = myAssignments.length;
  const completedAssignments = myAssignments.filter(
    (a) => a.status === "completed"
  ).length;
  const activeAssignments = myAssignments.filter(
    (a) => a.status !== "completed"
  ).length;
  const overdueAssignments = myAssignments.filter((a) => {
    return new Date(a.deadline) < new Date() && a.status !== "completed";
  }).length;
  const totalStudyTime = 0; // TODO: Calculate from focus sessions

  // Filter assignments based on active tab
  const getFilteredAssignments = () => {
    switch (activeTab) {
      case "active":
        return myAssignments.filter((a) => a.status !== "completed");
      case "completed":
        return myAssignments.filter((a) => a.status === "completed");
      case "overdue":
        return myAssignments.filter(
          (a) => new Date(a.deadline) < new Date() && a.status !== "completed"
        );
      default:
        return myAssignments;
    }
  };

  const filteredAssignments = getFilteredAssignments();

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
              {singleClassData?.classTitle || "Class Name"}
            </h1>
            <p className="text-sm text-gray-600">
              {singleClassData?.instructor || "Instructor Name"}
            </p>
          </div>
        </div>

        {/* Description */}
        {singleClassData?.description && (
          <p className="mb-4 text-sm text-gray-600">
            {singleClassData.description}
          </p>
        )}

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {/* Total Assignments */}
          <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path d="M2.5 3.5A1.5 1.5 0 0 1 4 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 10.121 4H12a1.5 1.5 0 0 1 1.5 1.5v1.75a.75.75 0 0 1-1.5 0V5.5a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.75a.75.75 0 0 1 1.5 0V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Z" />
              </svg>
              <span className="text-xs font-medium text-gray-600">Total</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {totalAssignments}
            </p>
          </div>

          {/* Active Assignments */}
          <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-blue-600"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium text-gray-600">Active</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {activeAssignments}
            </p>
          </div>

          {/* Completed */}
          <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium text-gray-600">Done</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {completedAssignments}
            </p>
          </div>

          {/* Study Time */}
          <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-purple-600"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                <path
                  fillRule="evenodd"
                  d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium text-gray-600">
                Study Time
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {totalStudyTime}h
            </p>
          </div>
        </div>
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
            {overdueAssignments > 0 && (
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
            )}
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
        <AddAssignmentForm singleClassData={singleClassData} />
      )}
    </div>
  );
}
