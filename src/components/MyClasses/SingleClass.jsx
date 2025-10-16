import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardWiggleAnimation.css"

export default function SingleClass({ myClass, isManaging }) {
  return (
    <div
      className={`class-card relative max-w-sm p-6 bg-white border-2 text-black border-green-400 rounded-xl shadow-xl/30 transition-transform ${
        isManaging ? "wiggle" : ""
      }`}
    >
      <div className="flex justify-between">
        <h5 className="mb-2 text-2xl font-bold">📚 {myClass.title}</h5>
        {isManaging && (
          <button>
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
      <span className="text-sm text-gray-500">by {myClass.author}</span>
      <p className="mb-6 font-normal ">{myClass.description}</p>
      <Link
        to="/class-details"
        state={myClass}
        className="px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg"
      >
        View
      </Link>
    </div>
  );
}
