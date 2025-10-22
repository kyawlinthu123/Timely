import { createContext, useEffect, useState } from "react";

export const AssignmentsContext = createContext();

export default function AssignmentsProvider({children}){
    const [myAssignments, setMyAssignments] = useState([]);
    const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);
    const [manageAssignment,setManageAssignment] = useState(false);

    useEffect(()=>{
    const storedAssignments = localStorage.getItem("myAssignments");
    if (storedAssignments){
        setMyAssignments(JSON.parse(storedAssignments));
    }
    },[])

const addNewAssignment = (addedAssignment) => {
    const updatedAssignments = [...myAssignments, addedAssignment];
    setMyAssignments(updatedAssignments);
    localStorage.setItem("myAssignments", JSON.stringify(updatedAssignments));
}

return (
    <AssignmentsContext.Provider value={{myAssignments,setMyAssignments,addNewAssignment, manageAssignment, setManageAssignment, showAddAssignmentForm, setShowAddAssignmentForm}}>
        {children}
    </AssignmentsContext.Provider>
)
}
