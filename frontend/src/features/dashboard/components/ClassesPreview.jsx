import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ClassesContext } from "../../classes/context/ClassesContext";
import NoClassesYet from "../../classes/components/NoClassesYet";
import truncateText from "../../../utils/truncateText";

export default function MyClasses() {
  const { myClasses } = useContext(ClassesContext);
  const DESCRIPTION_MAX_LENGTH = 85;
  
  // Memoize random selection to prevent re-shuffling on every render
  const displayClasses = useMemo(() => {
    return [...myClasses]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [myClasses]);

  return (
    <div className="flex flex-col w-full h-full p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      <div className="pb-3 mb-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">My Classes</h2>
              <p className="text-xs text-gray-500">
                {myClasses.length} class{myClasses.length !== 1 ? "es" : ""} in Total
              </p>
          </div>
          {/* Quick action badge */}
          {myClasses.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-green-700 border border-green-200 rounded-full bg-green-50">
              +{myClasses.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Classes List */}
      <div className="flex-1 mb-4 overflow-y-auto">
        {myClasses.length > 0 ? (
          <ul className="space-y-3">
            {displayClasses.map((myClass, index) => (
              <li key={myClass._id || index}>
                <Link
                  to={`/my_classes/${myClass._id}`}
                  state={myClass}
                  className={`block p-3.5 transition-all duration-200 border-2 rounded-lg bg-white border-gray-200 hover:shadow-md group`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-green-600">
                      {myClass.classTitle}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-4 h-4 text-gray-400 transition-transform group-hover:text-green-600 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5 text-gray-400"
                    >
                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg> */}
                    <p className="text-xs font-medium text-gray-600">
                      {myClass.instructor}
                    </p>
                  </div>

                  {/* Description */}
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

      {/* View All Button - Enhanced */}
      {myClasses.length > 0 && (
        <Link to="/my_classes" className="w-full">
          <button className="flex items-center justify-center w-full gap-2 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm active:scale-[0.98]">
            <span>View All Classes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      )}
    </div>
  );
}