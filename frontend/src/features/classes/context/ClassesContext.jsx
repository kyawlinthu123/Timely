import { createContext, useState, useEffect } from "react";
import axiosInstance from "../../../api/axiosInstance";

export const ClassesContext = createContext();

export default function ClassesProvider({ children }) {
  const [myClasses, setMyClasses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isManaging, setIsManaging] = useState(false);

  // fetch available classes from backend api
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosInstance.get("/classes");
        console.log(response.data)
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
      const response = await axiosInstance.post("/classes", addedClass);
      setMyClasses((prevClasses) => [...prevClasses, response.data]);
    } catch (error) {
      console.error("Error creating new class", error);
    }
  };

  // remove a class from db
  const removeClass = async (classID) => {
    try {
      const response = await axiosInstance.delete(`/classes/${classID}`);
      console.log("deleted successfully", response.data.message);
      setMyClasses((prevClasses) =>
        prevClasses.filter((prevClass) => {
          return prevClass._id !== classID;
        })
      );
    } catch (error) {
      console.log("Error deleting class");
    }
  };

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
