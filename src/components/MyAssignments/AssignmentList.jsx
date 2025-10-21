import React, { useContext, useState, useEffect } from "react";
import AssignmentCard from "./AssignmentCard";
import AddAssignmentForm from "./AddAssignmentForm";
import { AssignmentsContext } from "../../contexts/AssignmentsContext";

export default function AssignmentTable({ singleClassData }) {

  // const {manageAssignment,setManageAssignment, showAddAssignmentForm, setShowAddAssignmentForm} = useContext(AssignmentsContext);

  const {manageAssignment,setManageAssignment,showAddAssignmentForm,setShowAddAssignmentForm} = useContext(AssignmentsContext)

   //  stop wiggle effect on cards when clicked outside any card on screen
    useEffect(() => {
      if (!manageAssignment) return;
  
      const handleClickOutside = (e) => {
        if (!e.target.closest(".class-card") && !e.target.closest("button")) {
          setManageAssignment(false);
        }
      };
  
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [manageAssignment]);

  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-5 bg-white border border-green-400 shadow-lg rounded-xl">
      <div className="p-2 m-4 mt-2 text-left">
        <p className="text-xl font-bold">
          {" "}
          📚 {singleClassData.title} - Assignments{" "}
        </p>
        <span className="mt-2 text-gray-600 font-sm text-md">
          {" "}
          View, track, and manage all assignments related to this class{" "}
        </span>
        <div className="flex items-start gap-2 mt-2">
          <button onClick={()=>setShowAddAssignmentForm(true)}
            className="px-4 py-2 text-sm font-semibold bg-green-400 rounded-lg hover:bg-green-500"
          >
            Add Assignment
          </button>
         <button
            className="px-4 py-2 text-sm font-semibold bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={()=>setManageAssignment(prev => !prev)}
          >
            {manageAssignment ? "Done" : "Manage"}
          </button>
        </div>
      </div>
      <div className="m-4">
        <AssignmentCard />
      </div>
      {showAddAssignmentForm && <AddAssignmentForm singleClassData={singleClassData}/>}
    </div>
  );
}
