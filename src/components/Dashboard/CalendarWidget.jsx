import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarWidget() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({
    "2025-10-12": ["Essay Draft due", "Team Meeting"],
  });

  const formattedDate = date.toISOString().split("T")[0];
  const dayNotes = notes[formattedDate] || [];

  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-6 w-full h-[28rem] flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Calendar</h2>

      <Calendar
        onChange={setDate}
        value={date}
        className="rounded-xl border-none shadow-sm"
      />

      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2">
          Notes for {formattedDate}:
        </h3>
        {dayNotes.length ? (
          <ul className="list-disc ml-5 text-sm text-gray-600">
            {dayNotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">No notes yet.</p>
        )}
      </div>
    </div>
  );
}
