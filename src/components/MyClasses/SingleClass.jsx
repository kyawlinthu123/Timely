import React from "react";
import { Link } from "react-router-dom";

export default function SingleClass({myClass}) {
  return (
    <div className="max-w-sm p-6 bg-white border-2 text-black border-green-400 rounded-xl shadow-xl/30">
      <Link to="/">
        <h5 className="mb-2 text-2xl font-bold">📚 {myClass.title}</h5>
      </Link>
      <p className="mb-6 font-normal ">{myClass.description}</p>
      <Link
        to="/class-details"
        className="px-4 py-2 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg"
      >
        View
      </Link>
    </div>
  );
}
