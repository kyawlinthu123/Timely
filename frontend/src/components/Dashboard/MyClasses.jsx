import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClassesContext } from "../../contexts/ClassesContext";

export default function MyClasses() {
  const { myClasses } = useContext(ClassesContext);

  const randomThreeClasses = [...myClasses]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const truncateText = (text, maxLength = 60) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="flex flex-col w-full p-6 bg-gray-100 rounded-2xl min-h-96 shadow-xl/30">
      <h2 className="mb-4 text-lg font-bold text-gray-800">🗂️ My Classes</h2>

      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-3">
          {myClasses.length > 0 ? (
            randomThreeClasses.map((myClass) => (
              <li
                key={myClass._id}
                className="p-3 font-semibold transition bg-teal-200 border-2 border-green-400 rounded-lg hover:bg-teal-300 shadow-xl/30 shadow-teal-400"
              >
                <Link 
                to={`/my-classes/${myClass.classTitle}`}
                state={myClass}
                >
                  <p className="font-bold cursor-pointer">
                    📌 {myClass.classTitle}
                  </p>
                </Link>
                <p className="text-sm text-gray-500">by {myClass.instructor}</p>
                <p className="text-xs text-gray-400">
                  {truncateText(myClass.description, 70)}
                </p>
              </li>
            ))
          ) : (
            <p className="py-6 text-center text-gray-400">No classes yet...</p>
          )}
        </ul>
      </div>

      <Link to="/my-classes" className="self-end">
        <button className="px-4 py-2 mt-4 font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500">
          View All
        </button>
      </Link>
    </div>
  );
}
