import { createContext, useState, useEffect } from "react";

export const ClassesContext = createContext();

export default function ClassesProvider({ children }) {
  const [myClasses, setMyClasses] = useState([]);

  // load datas from local storage on mount if there's any
  useEffect(() => {
    const storedClasses = localStorage.getItem("myClasses");
    if (storedClasses) {
      setMyClasses(JSON.parse(storedClasses));
    }
  }, []);

  // add a new class to local storage
  const addNewClassFunction = (addedClass) => {
    setMyClasses((prevClasses) => {
      const updatedClasses = [...prevClasses, addedClass];
      localStorage.setItem("myClasses", JSON.stringify(updatedClasses));
      return updatedClasses;
    });
    setShowAddForm(false);
  };

  return (
    <ClassesContext.Provider value={{myClasses,setMyClasses,addNewClassFunction}}>
        {children}
    </ClassesContext.Provider>
  )
}
