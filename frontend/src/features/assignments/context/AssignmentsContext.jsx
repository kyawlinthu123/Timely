import { createContext, useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export const AssignmentsContext = createContext();

export default function AssignmentsProvider({ children }) {
  const [myAssignments, setMyAssignments] = useState([]);
  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);
  const [manageAssignment, setManageAssignment] = useState(false);

  const addNewAssignment = async (addedAssignment) => {
    try {
      const response = await axiosInstance.post(
        "/assignments",
        addedAssignment
      );
      const createdAssignment = response.data;
      setMyAssignments((prevAssignments) => [
        ...prevAssignments,
        createdAssignment,
      ]);
    } catch (error) {
      console.error(
        "This is a message written in react part to let me know i cannot add new assignment to mongoDB"
      );
    }
  };

  const removeAssignment = async (assignmentID) => {
    try {
      const response = await axiosInstance.delete(
        `/assignments/${assignmentID}`
      );
      console.log("deleted successfully", response.data.message);
      setMyAssignments((prevAssignments) =>
        prevAssignments.filter(
          (prevAssignment) => prevAssignment._id !== assignmentID
        )
      );
    } catch (error) {
      console.error("Error deleting assignment");
    }
  };

  const updateAssignment = async (updatedAssignmentId, updatedFields) => {
    try {
      const response = await axiosInstance.put(
        `/assignments/${updatedAssignmentId}`,
        updatedFields
      );
      const updatedAssignment = response.data;
      setMyAssignments((prevAssignments) => (prevAssignment) => {
        return prevAssignment._id === updatedAssignmentId
          ? updatedAssignment
          : prevAssignment;
      });
    } catch (error) {
      console.error("Error updating assignment");
    }
  };

  return (
    <AssignmentsContext.Provider
      value={{
        myAssignments,
        setMyAssignments,
        addNewAssignment,
        removeAssignment,
        updateAssignment,
        manageAssignment,
        setManageAssignment,
        showAddAssignmentForm,
        setShowAddAssignmentForm,
      }}
    >
      {children}
    </AssignmentsContext.Provider>
  );
}
