import { createContext, useState, useEffect } from "react";

export const ClassesContext = createContext();

export default function ClassesProvider({ children }) {
  const [myClasses, setMyClasses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isManaging, setIsManaging] = useState(false);

  // load data from local storage on mount if there's any
  useEffect(() => {
    const storedClasses = localStorage.getItem("myClasses");
    if (storedClasses) {
      setMyClasses(JSON.parse(storedClasses));
    }
  }, []);

  // add a new class to local storage
  const addNewClass = (addedClass) => {
    setMyClasses((prevClasses) => {
      const updatedClasses = [...prevClasses, addedClass];
      localStorage.setItem("myClasses", JSON.stringify(updatedClasses));
      return updatedClasses;
    });
  };

  //  TODO : Implement a function to delete classes from UI and localStorage

  const removeClass = (removedClass) => {
    setMyClasses((prevClasses) => {
      const updatedClasses = prevClasses.filter(
        (prevClass) => prevClass.title !== removedClass
      );
      localStorage.setItem("myClasses", JSON.stringify(updatedClasses));
      return updatedClasses;
    });
  };

  return (
    <ClassesContext.Provider
      value={{ myClasses, setMyClasses, addNewClass, removeClass, showAddForm, setShowAddForm, isManaging, setIsManaging }}
    >
      {children}
    </ClassesContext.Provider>
  );
}
