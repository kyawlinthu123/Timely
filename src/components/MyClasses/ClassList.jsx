import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddClassForm from "./AddClassForm";
import SingleClass from "./SingleClass";
import { ClassesContext } from "../../contexts/ClassesContext";

export default function ClassList() {
  const { myClasses, addNewClassFunction } = useContext(ClassesContext);
  const [showAddForm, setShowAddForm] = useState(false);

  const [isManaging, setIsManaging] = useState(false);

  //  stop wiggle effect on cards when clicked outside any card on screen
  useEffect(() => {
    if (!isManaging) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest(".class-card") && !e.target.closest("button")) {
        setIsManaging(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isManaging]);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">
          💬 Click on a class to view assignments, notes, and stats
        </h2>
        <div className="flex justify-between gap-2">
          <button
            className="px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg"
            onClick={() => setShowAddForm(true)}
          >
            Add Class
          </button>
          <button
            onClick={() => setIsManaging((prev) => !prev)}
            className="px-4 py-2 bg-gray-200 border-green-400 shadow font-semibold hover:bg-gray-300 rounded-lg"
          >
            {isManaging ? "Done" : "Manage"}
          </button>
        </div>
      </div>
      {myClasses.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 mt-6 ">
          {myClasses.map((myClass, index) => (
            <SingleClass
              key={index}
              myClass={myClass}
              isManaging={isManaging}
            />
          ))}
        </div>
      ) : (
        <span className="text-xl text-gray-400 font-semibold flex justify-center items-center md:h-96">
          {" "}
          No class yet...{" "}
        </span>
      )}
      {showAddForm && <AddClassForm setShowAddForm={setShowAddForm} />}
    </div>
  );
}
