import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddClassForm from "./AddClassForm";
import SingleClass from "./SingleClass";

export default function ClassList() {
  const [myClasses, setMyClasses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // load datas from local storage on mount if there's any
  useEffect(()=>{
    const storedClasses = localStorage.getItem("myClasses")
    if (storedClasses){
      setMyClasses(JSON.parse(storedClasses))
    }
  },[])

  // add a new class to local storage
  const addNewClassFunction = (addedClass) => {
    setMyClasses((prevClasses)=>{
      const updatedClasses = [...prevClasses,addedClass]
      localStorage.setItem("myClasses", JSON.stringify(updatedClasses))
      return updatedClasses;
    })
    setShowAddForm(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">
        💬 Click on a class to view assignments, notes, and stats
        </h2>
        <button
          className="self-end px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg"
          onClick={() => setShowAddForm(true)}
        >
          Add Class
        </button>
      </div>
      {
        myClasses.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 mt-6 ">
        {myClasses.map((myClass, index) => (
          <SingleClass key={index} myClass={myClass} />
        ))}
      </div>
        ):(
          <span className="text-xl text-gray-400 font-semibold flex justify-center items-center md:h-96"> No class yet... </span>
        )
      }
      {showAddForm && (
        <AddClassForm
          addNewClassFunction={addNewClassFunction}
          setShowAddForm={setShowAddForm}
        />
      )}
    </div>
  );
}
