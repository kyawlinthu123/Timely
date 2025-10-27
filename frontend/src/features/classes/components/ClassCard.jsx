import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/CardWiggleAnimation.css"
import { ClassesContext } from "../context/ClassesContext";

export default function SingleClass({myClass}) {

  const {removeClass, isManaging} = useContext(ClassesContext);

  const truncateText = (text, maxLength = 60) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div
      className={`class-card relative max-w-sm p-6 bg-white border-2 text-black border-green-400 rounded-xl shadow-xl/30 transition-transform ${
        isManaging ? "wiggle" : ""
      }`}
    >
      <div className="flex justify-between">
        <h5 className="mb-2 text-2xl font-bold">📚 {myClass.classTitle}</h5>
        {isManaging && (
          <button 
          className="hover:bg-gray-200 rounded-2xl"
          onClick={()=>removeClass(myClass._id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      <span className="text-sm text-gray-500">by {myClass.instructor}</span>
      <p className="mb-6 font-normal ">{truncateText(myClass.description, 70)}</p>
      <div className="flex gap-2 text-left">
        <Link
          to={`/my-classes/${myClass.classTitle}`}
          state={myClass}
          className="px-4 py-2 font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500"
        >
          View
        </Link>
        {isManaging && 
        <button className="px-4 py-2 font-semibold bg-gray-200 border-green-400 rounded-lg shadow hover:bg-gray-300">
          Edit
        </button>}
      </div>
    </div>
  );
}
