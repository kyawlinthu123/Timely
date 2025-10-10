import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddClassForm from "./AddClassForm";

export default function ClassList() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">
          Click on a class to view assignments, notes, and stats
        </h2>
        <button
          className="self-end px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg"
          onClick={() => setShowAddForm(true)}
        >
          Add Class
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-6 ">
        {/* first card */}
        <div className="max-w-sm p-6 bg-white border text-black border-gray-200 rounded-lg shadow-sm">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold">
              CS101: Intro to Computer Science
            </h5>
          </a>
          <p className="mb-3 font-normal ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, veniam. Tempora ullam accusamus, optio minus dolor
            impedit porro. Asperiores eos et eum voluptate. Qui est, eum in
            molestiae blanditiis aut?
          </p>
          <Link
            to="/"
            className="px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg"
          >
            View
          </Link>
        </div>
      </div>
      {showAddForm && <AddClassForm setShowAddForm={setShowAddForm} />}
    </div>
  );
}
