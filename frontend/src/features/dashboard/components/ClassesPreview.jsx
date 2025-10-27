import React, { useContext } from "react";
import { Link } from "react-router-dom";
import truncateText from "../../../utils/truncateText";
import { ClassesContext } from "../../classes/context/ClassesContext";
import NoClassesYet from "../../classes/components/NoClassesYet";

export default function MyClasses() {
  const { myClasses } = useContext(ClassesContext);
  const DESCRIPTION_MAX_LENGTH = 85;

  const randomThreeClasses = [...myClasses]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      {/* Header */}
      <div className="pb-3 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          My Classes
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          {myClasses.length} class{myClasses.length !== 1 ? "es" : ""} total
        </p>
      </div>

      {/* Classes List */}
      <div className="flex-1 mb-4 overflow-y-auto">
        {myClasses.length > 0 ? (
          <ul className="space-y-2">
            {randomThreeClasses.map((myClass) => (
              <li
                key={myClass._id}
                className="p-3 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 hover:border-gray-300"
              >
                <Link
                  to={`/my-classes/${myClass._id}`}
                  state={myClass}
                  className="block"
                >
                  <p className="mb-1 text-sm font-semibold text-gray-900 transition-colors hover:text-green-600">
                    {myClass.classTitle}
                  </p>
                  <p className="mb-2 text-xs text-gray-600">
                    {myClass.instructor}
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {truncateText(myClass.description, DESCRIPTION_MAX_LENGTH)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <NoClassesYet />
        )}
      </div>

      {/* View All Button */}
      {myClasses.length > 0 && (
        <Link to="/my-classes" className="w-full">
          <button className="w-full py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95">
            View All Classes
          </button>
        </Link>
      )}
    </div>
  );
}