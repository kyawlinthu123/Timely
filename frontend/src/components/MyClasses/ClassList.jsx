import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddClassForm from "./AddClassForm";
import SingleClassCard from "./SingleClassCard";
import { ClassesContext } from "../../contexts/ClassesContext";

export default function ClassList() {
  const { myClasses, showAddForm, setShowAddForm, isManaging, setIsManaging } = useContext(ClassesContext);

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
            className="px-4 py-2 font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500"
            onClick={() => setShowAddForm(true)}
          >
            Add Class
          </button>
          <button
            onClick={() => setIsManaging((prev) => !prev)}
            className="px-4 py-2 font-semibold bg-gray-200 border-green-400 rounded-lg shadow hover:bg-gray-300"
          >
            {isManaging ? "Done" : "Manage"}
          </button>
        </div>
      </div>
      {/* mapping myClasses and conditional rendering*/}
      {myClasses.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 mt-6 ">
          {myClasses.map((myClass) => (
            <SingleClassCard
              key={myClass._id}
              myClass={myClass}
            />
          ))}
        </div>
      ) : (
        <span className="flex items-center justify-center text-xl font-semibold text-gray-400 md:h-96">
          {" "}
          No class yet...{" "}
        </span>
      )}
      {showAddForm && <AddClassForm setShowAddForm={setShowAddForm} />}
    </div>
  );
}
