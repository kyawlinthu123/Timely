import { createContext, useState, useEffect } from "react";
import API from "../api/Api";

export const ClassesContext = createContext();

export default function ClassesProvider({ children }) {
  const [myClasses, setMyClasses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isManaging, setIsManaging] = useState(false);

  // fetch available classes from backend api
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await API.get("/classes")
        setMyClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes", error);
      }
    };
    fetchClasses();
  }, []);

  // create a class in db
    const addNewClass = async (addedClass) => {
      try {
        const response = await API.post("/classes", addedClass)
        setMyClasses((prev)=> [...prev, response.data]);
      } catch (error) {
        console.error("Error creating new class", error)
      }
    }

    // todo remove a class in db, update an existing class in db

    const removeClass = async (classID) => {
      try {
        const response = await API.delete(`/classes/${classID}`)
        console.log("deleted successfully", response)
        setMyClasses((prevClasses)=> prevClasses.filter(prevClass =>{
          return prevClass._id !== classID
        }))
      } catch (error) {
        console.log("Error deleting class")
      }
    }




  return (
    <ClassesContext.Provider
      value={{
        myClasses,
        setMyClasses,
        addNewClass,
        removeClass,
        showAddForm,
        setShowAddForm,
        isManaging,
        setIsManaging,
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
}
